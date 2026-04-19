"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Cloudflare", {
    enumerable: true,
    get: function() {
        return Cloudflare;
    }
});
const _axios = /*#__PURE__*/ _interop_require_default(require("axios"));
const _promises = /*#__PURE__*/ _interop_require_default(require("node:fs/promises"));
const _child_process = require("child_process");
const _nodeprocess = /*#__PURE__*/ _interop_require_wildcard(require("node:process"));
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
let Cloudflare = class Cloudflare {
    static async addDNSRecords(zoneId, domain) {
        const content = [
            'api',
            'booking',
            '*',
            '@'
        ];
        content.map(async (record)=>{
            try {
                await _axios.default.post(`https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`, {
                    type: 'A',
                    name: record,
                    content: _nodeprocess.env.SERVER_IP,
                    ttl: 3600,
                    proxied: true
                }, {
                    headers: {
                        'X-Auth-Email': _nodeprocess.env.CLOUDFLARE_EMAIL,
                        'X-Auth-Key': _nodeprocess.env.CLOUDFLARE_GLOBAL_API_KEY,
                        'Content-Type': 'application/json'
                    }
                });
            } catch (e) {
                console.log('Error adding DNS records:', e.response.data.errors, e.response.data.errors[0].error_chain);
                return e.response.data;
            }
        });
    }
    static async toggleFullSSLType(zoneId) {
        try {
            const response = await _axios.default.patch(`https://api.cloudflare.com/client/v4/zones/${zoneId}/settings/ssl`, {
                value: 'full'
            }, {
                headers: {
                    'X-Auth-Email': _nodeprocess.env.CLOUDFLARE_EMAIL,
                    'X-Auth-Key': _nodeprocess.env.CLOUDFLARE_GLOBAL_API_KEY,
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (e) {
            return e.response.data;
        }
    }
    static async sslRecomendMode(zoneId) {
        try {
            const response = await _axios.default.patch(`https://api.cloudflare.com/v4/zones/${zoneId}/settings/ssl_recommender`, {
                enabled: true
            }, {
                headers: {
                    'X-Auth-Email': _nodeprocess.env.CLOUDFLARE_EMAIL,
                    'X-Auth-Key': _nodeprocess.env.CLOUDFLARE_GLOBAL_API_KEY,
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (e) {
            return e.response.data;
        }
    }
    static async registerDomain(domain) {
        try {
            const url = new URL(domain);
            const response = await _axios.default.post('https://api.cloudflare.com/client/v4/zones', {
                name: url.hostname,
                account: {
                    "id": _nodeprocess.env.CLOUDFLARE_ACCOUNT_ID
                },
                type: 'full'
            }, {
                headers: {
                    'X-Auth-Email': _nodeprocess.env.CLOUDFLARE_EMAIL,
                    'X-Auth-Key': _nodeprocess.env.CLOUDFLARE_GLOBAL_API_KEY,
                    'Authorization': 'Bearer ' + _nodeprocess.env.CLOUDFLARE_API_TOKEN,
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);
            return response.data;
        } catch (e) {
            console.log(e.response.data);
            return e.response.data;
        }
    }
    static async updateNginxConfig(domain) {
        const config = await _promises.default.readFile('/etc/nginx/sites-available/default');
        
        const text = `
server {
    if ($host = ${domain}) {
        return 301 https://$host$request_uri;
    }

    listen 80;
    server_name ${domain};
    return 404;
}

server {
    listen 443 ssl http2;
    server_name ${domain};

    ssl_certificate /usr/ssl/${domain}.pem;
    ssl_certificate_key /usr/ssl/${domain}.key;

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
server {
    listen 443 ssl http2;
    server_name ws.${domain};

    ssl_certificate /usr/ssl/${domain}.pem;
    ssl_certificate_key /usr/ssl/${domain}.key;

    location / {
        proxy_pass http://localhost:4040;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400;
        proxy_send_timeout 86400;
        proxy_buffering off;
    }
}
server {
    if ($host = api.${domain}) {
        return 301 https://$host$request_uri;
    }

    listen 80;
    server_name api.${domain};
    return 404;
}
server {
    listen 443 ssl http2;
    server_name api.${domain};

    ssl_certificate /usr/ssl/${domain}.pem;
    ssl_certificate_key /usr/ssl/${domain}.key;
    
    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400;
        proxy_send_timeout 86400;
        proxy_buffering off;
    }
}
`;
        if (config.includes(domain)) {
            return 'Domain already exists';
        }
        await _promises.default.writeFile('/etc/nginx/sites-available/default', config + text);
        (0, _child_process.spawn)("sudo", [
            'nginx',
            '-s',
            'reload'
        ], {
            shell: true
        });
    }
};
