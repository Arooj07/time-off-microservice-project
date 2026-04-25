"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startMockHcm = startMockHcm;
const express_1 = __importDefault(require("express"));
function startMockHcm() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.post("/hcm/validate", (req, res) => {
        res.json({
            valid: true,
            remainingBalance: 10,
        });
    });
    app.post("/hcm/batch", (req, res) => {
        res.json({
            success: true,
        });
    });
    app.listen(4001, () => {
        console.log("Mock HCM running on port 4001");
    });
}
