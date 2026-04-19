"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BlockedUsers", {
    enumerable: true,
    get: function() {
        return BlockedUsers;
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
let BlockedUsers = class BlockedUsers {
};
_ts_decorate([
    (0, _typeorm.PrimaryGeneratedColumn)(),
    _ts_metadata("design:type", Number)
], BlockedUsers.prototype, "id", void 0);
_ts_decorate([
    (0, _typeorm.Column)({
        type: 'varchar',
        length: 255,
        unique: true
    }),
    _ts_metadata("design:type", String)
], BlockedUsers.prototype, "ipAddress", void 0);
_ts_decorate([
    (0, _typeorm.UpdateDateColumn)(),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], BlockedUsers.prototype, "updatedAt", void 0);
_ts_decorate([
    (0, _typeorm.CreateDateColumn)(),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], BlockedUsers.prototype, "createdAt", void 0);
BlockedUsers = _ts_decorate([
    (0, _typeorm.Entity)('BlockedUsers')
], BlockedUsers);
