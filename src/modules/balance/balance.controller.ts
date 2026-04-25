import { Controller, Get, Param } from "@nestjs/common";
import { BalanceService } from "./balance.service";

@Controller("balances")
export class BalanceController {
  constructor(private service: BalanceService) {}

  @Get(":employeeId/:locationId")
  get(@Param() params) {
    return this.service.find(params.employeeId, params.locationId);
  }
}
