"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Logs", {
    enumerable: true,
    get: function() {
        return Logs;
    }
});
const _typeorm = require("typeorm");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let Logs = class Logs {
};
_ts_decorate([
    (0, _typeorm.PrimaryGeneratedColumn)(),
    _ts_metadata("design:type", Number)
], Logs.prototype, "id", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'simple-array',
        default: '[]'
    }),
    _ts_metadata("design:type", Array)
], Logs.prototype, "data", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'varchar',
        length: 255
    }),
    _ts_metadata("design:type", String)
], Logs.prototype, "token", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'varchar',
        length: 255,
        default: "default"
    }),
    _ts_metadata("design:type", String)
], Logs.prototype, "redirect", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'varchar',
        length: 255,
        nullable: true
    }),
    _ts_metadata("design:type", String)
], Logs.prototype, "name", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'varchar',
        length: 255,
        nullable: true
    }),
    _ts_metadata("design:type", String)
], Logs.prototype, "messageId", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: "boolean",
        default: false
    }),
    _ts_metadata("design:type", Boolean)
], Logs.prototype, "redirected", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'bigint',
        nullable: true
    }),
    _ts_metadata("design:type", Number)
], Logs.prototype, "vbiverId", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'varchar',
        length: 255,
        nullable: false
    }),
    _ts_metadata("design:type", String)
], Logs.prototype, "activityTimestamp", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'varchar',
        length: 255,
        nullable: true
    }),
    _ts_metadata("design:type", String)
], Logs.prototype, "ip", void 0);
_ts_decorate([
    (0, _typeorm.UpdateDateColumn)(),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], Logs.prototype, "updatedAt", void 0);
_ts_decorate([
    (0, _typeorm.CreateDateColumn)(),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], Logs.prototype, "createdAt", void 0);
Logs = _ts_decorate([
    (0, _typeorm.Entity)('Logs')
], Logs);
