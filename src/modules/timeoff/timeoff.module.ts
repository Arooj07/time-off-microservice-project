import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TimeOff } from "./timeoff.entity";
import { TimeOffService } from "./timeoff.service";
import { TimeOffController } from "./timeoff.controller";
import { BalanceModule } from "../balance/balance.module";
import { HcmService } from "../hcm/hcm.service";

@Module({
  imports: [TypeOrmModule.forFeature([TimeOff]), BalanceModule],
  providers: [TimeOffService, HcmService],
  controllers: [TimeOffController],
})
export class TimeOffModule {}
