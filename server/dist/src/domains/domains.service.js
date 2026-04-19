"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DomainsService", {
    enumerable: true,
    get: function() {
        return DomainsService;
    }
});
const _common = require("@nestjs/common");
const _typeorm = require("@nestjs/typeorm");
const _domainsentity = require("./domains.entity");
const _typeorm1 = require("typeorm");
const _cloudflare = require("../lib/cloudflare");
const _child_process = require("child_process");
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
let DomainsService = class DomainsService {
    async domains(ctx) {
        if (!this.PERMITTED_USERS.includes(ctx.from.id)) {
            await ctx.reply('You are not permitted to use this command');
            return;
        }
        const domains = await this.domainsRepository.find();
        const text = `Количество доменов: ${domains.length}\n\n${domains.map((domain, index)=>`${index + 1}. ${domain.domain}`).join('\n')}`;
        await ctx.reply(text, {
            disable_web_page_preview: true,
            // reply_markup: {
            //     inline_keyboard: [
            //         [
            //             {
            //                 text: "Добавить домен",
            //                 callback_data: "add_domain"
            //             }
            //         ]
            //     ]
            // }
        });
    }
    async addDomain(ctx) {
        if (!this.PERMITTED_USERS.includes(ctx.from.id)) {
            await ctx.reply('You are not permitted to use this command');
            return;
        }
        //@ts-ignore
        const domain = ctx.message?.text.split(' ')[1];
        const zone = await _cloudflare.Cloudflare.registerDomain(domain);
        if (!zone.success) {
            await ctx.reply('<b>Error adding domain:</b> ' + `<code>${zone?.errors[0]?.message}</code>` || '<code>Unknown error</code>', {
                parse_mode: 'HTML'
            });
            return;
        }
        await _cloudflare.Cloudflare.addDNSRecords(zone.result.id, domain);
        await _cloudflare.Cloudflare.toggleFullSSLType(zone.result.id);
        await _cloudflare.Cloudflare.sslRecomendMode(zone.result.id);
        await _cloudflare.Cloudflare.updateNginxConfig(zone.result.name);
        (0, _child_process.spawn)('cp', [
            '/usr/ssl/com-partnershub.com.key',
            '/usr/ssl/' + zone.result.name + '.key'
        ]);
        (0, _child_process.spawn)('cp', [
            '/usr/ssl/com-partnershub.com.pem',
            '/usr/ssl/' + zone.result.name + '.pem'
        ]);
        const newDomain = new _domainsentity.DomainsEntity();
        newDomain.domain = domain;
        newDomain.zoneId = zone.result.id;
        await this.domainsRepository.save(newDomain);
        await ctx.reply('NS записи для домена: \n' + zone.result.name_servers.join('\n'));
    }
    constructor(domainsRepository){
        this.domainsRepository = domainsRepository;
        this.PERMITTED_USERS = [
            7665230745
        ];
    }
};
DomainsService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _typeorm.InjectRepository)(_domainsentity.DomainsEntity)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _typeorm1.Repository === "undefined" ? Object : _typeorm1.Repository
    ])
], DomainsService);
