
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HcmMock = void 0;
class HcmMock {
    static validateSuccess() {
        return { valid: true, remainingBalance: 10 };
    }
    static validateFailure() {
        return { valid: false, remainingBalance: 0 };
    }
    static timeout() {
        throw new Error("HCM timeout");
    }
    static batchResponse() {
        return [
            { employeeId: "1", locationId: "L1", balance: 10 },
            { employeeId: "2", locationId: "L1", balance: 8 },
        ];
    }
}
exports.HcmMock = HcmMock;
