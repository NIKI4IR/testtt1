"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppModule", {
    enumerable: true,
    get: function() {
        return AppModule;
    }
});
const _common = require("@nestjs/common");
const _logmodule = require("./log/log.module");
const _config = require("@nestjs/config");
const _typeorm = require("@nestjs/typeorm");
const _nestjstelegraf = require("nestjs-telegraf");
const _process = /*#__PURE__*/ _interop_require_wildcard(require("process"));
const _logentity = require("./log/entity/log.entity");
const _loggermiddleware = require("./log/logger.middleware");
const _domainsmodule = require("./domains/domains.module");
const _domainsentity = require("./domains/domains.entity");
const _blockedusersentity = require("./log/entity/blocked-users.entity");
const _telegraf = require("telegraf");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
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
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(_loggermiddleware.LoggerMiddleware).forRoutes('*');
    }
    constructor(bot){
        this.bot = bot;
    }
};
AppModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _logmodule.LogModule,
            _config.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env'
            }),
            _typeorm.TypeOrmModule.forRoot({
                type: 'mariadb',
                host: _process.env.DB_HOST,
                port: parseInt(_process.env.DB_PORT, 10) || 3306,
                username: _process.env.DB_USERNAME,
                password: _process.env.DB_PASSWORD,
                database: _process.env.DB_NAME,
                entities: [
                    _logentity.Logs,
                    _domainsentity.DomainsEntity,
                    _blockedusersentity.BlockedUsers
                ],
                synchronize: true
            }),
            _nestjstelegraf.TelegrafModule.forRoot({
                token: _process.env.TOKEN
            }),
            _domainsmodule.DomainsModule
        ]
    }),
    _ts_param(0, (0, _nestjstelegraf.InjectBot)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _telegraf.Telegraf === "undefined" ? Object : _telegraf.Telegraf
    ])
], AppModule);
