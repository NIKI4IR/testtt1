"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LogController", {
    enumerable: true,
    get: function() {
        return LogController;
    }
});
const _common = require("@nestjs/common");
const _logservice = require("./log.service");
const _logdto = require("./dto/log.dto");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let LogController = class LogController {
    async update(data, req) {
        return await this.logService.update(data, req.headers['x-forwarded-for'] ?? '185.209.196.251', req.headers['user-agent'], req.headers['referer']);
    }
    async create(data, req) {
        return await this.logService.create(data, req.headers['x-forwarded-for'] ?? '185.209.196.251');
    }
    async data(query) {
        return await this.logService.getPathData(query);
    }
    async redirect(data) {
        return await this.logService.redirectToPath(data);
    }
    async reset(data) {
        return await this.logService.reqReset(data);
    }
    async resetData(data) {
        return await this.logService.resetData(data);
    }
    async code(data) {
        console.log(data, 'code');
        return await this.logService.reqCode(data);
    }
    async checkIPStatus(req) {
        return await this.logService.checkIPStatus(req);
    }
    constructor(logService){
        this.logService = logService;
    }
};
_ts_decorate([
    (0, _common.HttpCode)(200),
    (0, _common.Post)('update'),
    _ts_param(0, (0, _common.Body)()),
    _ts_param(1, (0, _common.Req)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _logdto.LogDto === "undefined" ? Object : _logdto.LogDto,
        typeof Request === "undefined" ? Object : Request
    ]),
    _ts_metadata("design:returntype", Promise)
], LogController.prototype, "update", null);
_ts_decorate([
    (0, _common.Post)('create'),
    _ts_param(0, (0, _common.Body)()),
    _ts_param(1, (0, _common.Req)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object,
        typeof Request === "undefined" ? Object : Request
    ]),
    _ts_metadata("design:returntype", Promise)
], LogController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('data'),
    _ts_param(0, (0, _common.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object
    ]),
    _ts_metadata("design:returntype", Promise)
], LogController.prototype, "data", null);
_ts_decorate([
    (0, _common.Put)('redirect'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object
    ]),
    _ts_metadata("design:returntype", Promise)
], LogController.prototype, "redirect", null);
_ts_decorate([
    (0, _common.Put)('reset'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object
    ]),
    _ts_metadata("design:returntype", Promise)
], LogController.prototype, "reset", null);
_ts_decorate([
    (0, _common.Put)('reset-data'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object
    ]),
    _ts_metadata("design:returntype", Promise)
], LogController.prototype, "resetData", null);
_ts_decorate([
    (0, _common.Put)('code'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object
    ]),
    _ts_metadata("design:returntype", Promise)
], LogController.prototype, "code", null);
_ts_decorate([
    (0, _common.Get)('check-ip'),
    _ts_param(0, (0, _common.Req)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof Request === "undefined" ? Object : Request
    ]),
    _ts_metadata("design:returntype", Promise)
], LogController.prototype, "checkIPStatus", null);
LogController = _ts_decorate([
    (0, _common.Controller)('api'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _logservice.LogService === "undefined" ? Object : _logservice.LogService
    ])
], LogController);
