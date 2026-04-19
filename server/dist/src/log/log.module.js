"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LogModule", {
    enumerable: true,
    get: function() {
        return LogModule;
    }
});
const _common = require("@nestjs/common");
const _logcontroller = require("./log.controller");
const _logservice = require("./log.service");
const _logupdate = require("./log.update");
const _typeorm = require("@nestjs/typeorm");
const _logentity = require("./entity/log.entity");
const _blockedusersentity = require("./entity/blocked-users.entity");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let LogModule = class LogModule {
};
LogModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _typeorm.TypeOrmModule.forFeature([
                _logentity.Logs,
                _blockedusersentity.BlockedUsers
            ])
        ],
        controllers: [
            _logcontroller.LogController
        ],
        providers: [
            _logservice.LogService,
            _logupdate.LogUpdate
        ]
    })
], LogModule);
