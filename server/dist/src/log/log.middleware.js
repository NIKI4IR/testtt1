"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "logMiddleware", {
    enumerable: true,
    get: function() {
        return logMiddleware;
    }
});
async function logMiddleware(ctx, next) {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
}
