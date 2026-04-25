"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe("TimeOff Rules", () => {
    it("should calculate correct days", () => {
        const start = new Date("2026-01-01");
        const end = new Date("2026-01-03");
        const diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24) + 1;
        expect(diff).toBe(3);
    });
});
