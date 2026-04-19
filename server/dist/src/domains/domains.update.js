"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DomainsUpdate", {
    enumerable: true,
    get: function() {
        return DomainsUpdate;
    }
});
const _nestjstelegraf = require("nestjs-telegraf");
const _types = require("../lib/types");
const _domainsservice = require("./domains.service");
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
let DomainsUpdate = class DomainsUpdate {
    async domains(ctx) {
        return this.domainsService.domains(ctx);
    }
    async addDomain(ctx) {
        return this.domainsService.addDomain(ctx);
    }
    constructor(domainsService){
        this.domainsService = domainsService;
    }
};
_ts_decorate([
    (0, _nestjstelegraf.Command)('domains'),
    _ts_param(0, (0, _nestjstelegraf.Ctx)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _types.Context === "undefined" ? Object : _types.Context
    ]),
    _ts_metadata("design:returntype", Promise)
], DomainsUpdate.prototype, "domains", null);
_ts_decorate([
    (0, _nestjstelegraf.Command)('add_domain'),
    _ts_param(0, (0, _nestjstelegraf.Ctx)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _types.Context === "undefined" ? Object : _types.Context
    ]),
    _ts_metadata("design:returntype", Promise)
], DomainsUpdate.prototype, "addDomain", null);
DomainsUpdate = _ts_decorate([
    (0, _nestjstelegraf.Update)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _domainsservice.DomainsService === "undefined" ? Object : _domainsservice.DomainsService
    ])
], DomainsUpdate);
