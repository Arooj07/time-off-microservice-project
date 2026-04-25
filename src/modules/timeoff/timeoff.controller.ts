import { Controller, Post, Body, Param } from "@nestjs/common";
import { TimeOffService } from "./timeoff.service";

@Controller("timeoff")
export class TimeOffController {
  constructor(private service: TimeOffService) {}

  @Post("request")
  create(@Body() dto) {
    return this.service.create(dto);
  }

  @Post(":id/approve")
  approve(@Param("id") id: number) {
    return this.service.approve(id);
  }

  @Post(":id/reject")
  reject(@Param("id") id: number) {
    return this.service.reject(id);
  }
}
