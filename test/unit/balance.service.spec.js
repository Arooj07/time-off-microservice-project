
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe("Balance Logic", () => {
    it("should deduct balance correctly", () => {
        const balance = 10;
        const deducted = balance - 2;
        expect(deducted).toBe(8);
    });
    it("should not allow negative balance", () => {
        const balance = 1;
        const request = 5;
        expect(balance - request < 0).toBe(true);
    });
});
