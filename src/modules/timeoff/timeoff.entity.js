"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeOff = exports.Status = void 0;
const typeorm_1 = require("typeorm");
var Status;
(function (Status) {
    Status["PENDING"] = "PENDING";
    Status["APPROVED"] = "APPROVED";
    Status["REJECTED"] = "REJECTED";
    Status["CANCELLED"] = "CANCELLED";
})(Status || (exports.Status = Status = {}));
let TimeOff = class TimeOff {
};
exports.TimeOff = TimeOff;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TimeOff.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TimeOff.prototype, "employeeId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TimeOff.prototype, "locationId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TimeOff.prototype, "totalDays", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], TimeOff.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], TimeOff.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], TimeOff.prototype, "status", void 0);
exports.TimeOff = TimeOff = __decorate([
    (0, typeorm_1.Entity)()
], TimeOff);
