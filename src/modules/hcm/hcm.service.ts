import { Injectable } from "@nestjs/common";

@Injectable()
export class HcmService {
  async validate(employeeId: string, locationId: string, days: number) {
    // simulate HCM response
    return {
      valid: true,
      remainingBalance: 10,
    };
  }

  async getBalance(employeeId: string, locationId: string) {
    return {
      balance: 10,
    };
  }
}
