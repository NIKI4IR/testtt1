"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    app.enableCors({
        origin: /.*/,
        methods: [
            'GET',
            'POST',
            'PUT',
            'DELETE',
            'OPTIONS'
        ],
        allowedHeaders: [
            'Content-Type',
            'Authorization'
        ],
        credentials: true
    });
    app.use((req, res, next)=>{
        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.status(200).send();
        } else {
            next();
        }
    });
    await app.listen(8080);
}
bootstrap();
