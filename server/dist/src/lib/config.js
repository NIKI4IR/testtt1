"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BUTTONS", {
    enumerable: true,
    get: function() {
        return BUTTONS;
    }
});
const BUTTONS = [
    [
        {
            text: '❌ Неверный логин',
            callback_data: 'path_incorrect-login_%token%'
        },
        {
            text: '❌ Неверный пароль',
            callback_data: 'path_incorrect-password_%token%'
        }
    ],
    [
        {
            text: "❌ Аккаунт в блоке",
            callback_data: "path_account-blocked_%token%"
        },
        {
            text: "❌ Неверный код",
            callback_data: "path_incorrect-code_%token%"
        }
    ],
    [
        {
            text: "⛔ Заблокировать",
            callback_data: "block_%token%"
        },
        {
            text: "🔓 Разблокировать",
            callback_data: "unblock_%token%"
        }
    ],
    [
        {
            text: "👀 Узнать онлайн",
            callback_data: "online_%token%"
        }
    ],
    [
        {
            text: "⭕ Отказаться от лога ⭕",
            callback_data: "deny_%token%"
        }
    ]
];
