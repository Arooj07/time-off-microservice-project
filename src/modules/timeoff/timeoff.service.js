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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeOffService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const timeoff_entity_1 = require("./timeoff.entity");
const balance_service_1 = require("../balance/balance.service");
const hcm_service_1 = require("../hcm/hcm.service");
let TimeOffService = class TimeOffService {
    constructor(repo, balanceService, hcm) {
        this.repo = repo;
        this.balanceService = balanceService;
        this.hcm = hcm;
    }
    async create(dto) {
        const days = this.calculateDays(dto.startDate, dto.endDate);
        const balance = await this.balanceService.find(dto.employeeId, dto.locationId);
        if (balance.availableDays < days) {
            throw new Error("Insufficient balance");
        }
        const hcmCheck = await this.hcm.validate(dto.employeeId, dto.locationId, days);
        if (!hcmCheck.valid) {
            throw new Error("HCM rejected request");
        }
        await this.balanceService.deduct(dto.employeeId, dto.locationId, days);
        return this.repo.save({
            ...dto,
            totalDays: days,
            status: timeoff_entity_1.Status.PENDING,
        });
    }
    async approve(id) {
        const request = await this.repo.findOneBy({ id });
        const hcmCheck = await this.hcm.validate(request.employeeId, request.locationId, request.totalDays);
        if (!hcmCheck.valid)
            throw new Error("HCM invalid");
        request.status = timeoff_entity_1.Status.APPROVED;
        return this.repo.save(request);
    }
    async reject(id) {
        const request = await this.repo.findOneBy({ id });
        await this.balanceService.restore(request.employeeId, request.locationId, request.totalDays);
        request.status = timeoff_entity_1.Status.REJECTED;
        return this.repo.save(request);
    }
    calculateDays(start, end) {
        return ((new Date(end).getTime() - new Date(start).getTime()) /
            (1000 * 60 * 60 * 24) +
            1);
    }
};
exports.TimeOffService = TimeOffService;
exports.TimeOffService = TimeOffService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(timeoff_entity_1.TimeOff)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        balance_service_1.BalanceService,
        hcm_service_1.HcmService])
], TimeOffService);
