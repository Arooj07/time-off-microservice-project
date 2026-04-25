"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeOffModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const timeoff_entity_1 = require("./timeoff.entity");
const timeoff_service_1 = require("./timeoff.service");
const timeoff_controller_1 = require("./timeoff.controller");
const balance_module_1 = require("../balance/balance.module");
const hcm_service_1 = require("../hcm/hcm.service");
let TimeOffModule = class TimeOffModule {
};
exports.TimeOffModule = TimeOffModule;
exports.TimeOffModule = TimeOffModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([timeoff_entity_1.TimeOff]), balance_module_1.BalanceModule],
        providers: [timeoff_service_1.TimeOffService, hcm_service_1.HcmService],
        controllers: [timeoff_controller_1.TimeOffController],
    })
], TimeOffModule);
