import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TimeOff, Status } from "./timeoff.entity";
import { BalanceService } from "../balance/balance.service";
import { HcmService } from "../hcm/hcm.service";

@Injectable()
export class TimeOffService {
  constructor(
    @InjectRepository(TimeOff)
    private repo: Repository<TimeOff>,
    private balanceService: BalanceService,
    private hcm: HcmService,
  ) {}

  async create(dto) {
    const days = this.calculateDays(dto.startDate, dto.endDate);

    const balance = await this.balanceService.find(
      dto.employeeId,
      dto.locationId,
    );

    if (balance.availableDays < days) {
      throw new Error("Insufficient balance");
    }

    const hcmCheck = await this.hcm.validate(
      dto.employeeId,
      dto.locationId,
      days,
    );

    if (!hcmCheck.valid) {
      throw new Error("HCM rejected request");
    }

    await this.balanceService.deduct(dto.employeeId, dto.locationId, days);

    return this.repo.save({
      ...dto,
      totalDays: days,
      status: Status.PENDING,
    });
  }

  async approve(id: number) {
    const request = await this.repo.findOneBy({ id });

    const hcmCheck = await this.hcm.validate(
      request.employeeId,
      request.locationId,
      request.totalDays,
    );

    if (!hcmCheck.valid) throw new Error("HCM invalid");

    request.status = Status.APPROVED;

    return this.repo.save(request);
  }

  async reject(id: number) {
    const request = await this.repo.findOneBy({ id });

    await this.balanceService.restore(
      request.employeeId,
      request.locationId,
      request.totalDays,
    );

    request.status = Status.REJECTED;
    return this.repo.save(request);
  }

  calculateDays(start, end) {
    return (
      (new Date(end).getTime() - new Date(start).getTime()) /
        (1000 * 60 * 60 * 24) +
      1
    );
  }
}
