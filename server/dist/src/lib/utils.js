"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "replaceToken", {
    enumerable: true,
    get: function() {
        return replaceToken;
    }
});
function replaceToken(buttons, token) {
    return buttons.map((row)=>row.map((button)=>({
                ...button,
                callback_data: button.callback_data.replace('%token%', token)
            })));
}
