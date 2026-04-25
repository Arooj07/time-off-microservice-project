import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Balance } from "./balance.entity";

@Injectable()
export class BalanceService {
  constructor(
    @InjectRepository(Balance)
    private repo: Repository<Balance>,
  ) {}

  find(employeeId: string, locationId: string) {
    return this.repo.findOne({ where: { employeeId, locationId } });
  }

  async deduct(employeeId: string, locationId: string, days: number) {
    const bal = await this.find(employeeId, locationId);
    bal.availableDays -= days;
    return this.repo.save(bal);
  }

  async restore(employeeId: string, locationId: string, days: number) {
    const bal = await this.find(employeeId, locationId);
    bal.availableDays += days;
    return this.repo.save(bal);
  }
}
