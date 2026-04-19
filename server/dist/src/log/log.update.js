"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LogUpdate", {
    enumerable: true,
    get: function() {
        return LogUpdate;
    }
});
const _nestjstelegraf = require("nestjs-telegraf");
const _telegraf = require("telegraf");
const _logservice = require("./log.service");
const _types = require("../lib/types");
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
let LogUpdate = class LogUpdate {
    async id(ctx) {
        await ctx.reply(ctx.chat.id.toString());
    }
    async path(ctx) {
        return this.logsRepository.redirect(ctx);
    }
    async block(ctx) {
        return this.logsRepository.ipManipulation(ctx);
    }
    async online(ctx) {
        return this.logsRepository.activityCheck(ctx);
    }
    async deny(ctx) {
        return this.logsRepository.leave(ctx);
    }
    async get(ctx) {
        return this.logsRepository.get(ctx);
    }
    async none(ctx) {
        await ctx.answerCbQuery();
    }
    constructor(bot, logsRepository){
        this.bot = bot;
        this.logsRepository = logsRepository;
    }
};
_ts_decorate([
    (0, _nestjstelegraf.Command)('id'),
    _ts_param(0, (0, _nestjstelegraf.Ctx)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _types.Context === "undefined" ? Object : _types.Context
    ]),
    _ts_metadata("design:returntype", Promise)
], LogUpdate.prototype, "id", null);
_ts_decorate([
    (0, _nestjstelegraf.Action)(/path_(.*)_(.*)/),
    _ts_param(0, (0, _nestjstelegraf.Ctx)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _types.Context === "undefined" ? Object : _types.Context
    ]),
    _ts_metadata("design:returntype", Promise)
], LogUpdate.prototype, "path", null);
_ts_decorate([
    (0, _nestjstelegraf.Action)(/(block|unblock)_(.*)/),
    _ts_param(0, (0, _nestjstelegraf.Ctx)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _types.Context === "undefined" ? Object : _types.Context
    ]),
    _ts_metadata("design:returntype", Promise)
], LogUpdate.prototype, "block", null);
_ts_decorate([
    (0, _nestjstelegraf.Action)(/online_(.*)/),
    _ts_param(0, (0, _nestjstelegraf.Ctx)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _types.Context === "undefined" ? Object : _types.Context
    ]),
    _ts_metadata("design:returntype", Promise)
], LogUpdate.prototype, "online", null);
_ts_decorate([
    (0, _nestjstelegraf.Action)(/deny_(.*)/),
    _ts_param(0, (0, _nestjstelegraf.Ctx)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _types.Context === "undefined" ? Object : _types.Context
    ]),
    _ts_metadata("design:returntype", Promise)
], LogUpdate.prototype, "deny", null);
_ts_decorate([
    (0, _nestjstelegraf.Action)(/get_(.*)/),
    _ts_param(0, (0, _nestjstelegraf.Ctx)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _types.Context === "undefined" ? Object : _types.Context
    ]),
    _ts_metadata("design:returntype", Promise)
], LogUpdate.prototype, "get", null);
_ts_decorate([
    (0, _nestjstelegraf.Action)('none'),
    _ts_param(0, (0, _nestjstelegraf.Ctx)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _types.Context === "undefined" ? Object : _types.Context
    ]),
    _ts_metadata("design:returntype", Promise)
], LogUpdate.prototype, "none", null);
LogUpdate = _ts_decorate([
    (0, _nestjstelegraf.Update)(),
    _ts_param(0, (0, _nestjstelegraf.InjectBot)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _telegraf.Telegraf === "undefined" ? Object : _telegraf.Telegraf,
        typeof _logservice.LogService === "undefined" ? Object : _logservice.LogService
    ])
], LogUpdate);
