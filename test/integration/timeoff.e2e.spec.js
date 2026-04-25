
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
describe("TimeOff Flow", () => {
    it("create request flow", async () => {
        const res = await (0, supertest_1.default)("http://localhost:3000")
            .post("/api/timeoff/request")
            .send({
            employeeId: "1",
            locationId: "L1",
            startDate: "2026-01-01",
            endDate: "2026-01-03",
        });
        expect(res.status).toBe(201);
    });
    it("approve request flow", async () => {
        const res = await (0, supertest_1.default)("http://localhost:3000").post("/api/timeoff/1/approve");
        expect([200, 201]).toContain(res.status);
    });
});
