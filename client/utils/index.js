import axios from 'axios'

const api = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
})

export const generateRandomString = (length) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

const getApiUrl = () => {
    if (typeof window !== 'undefined') {
        const domain = window.location.hostname.split('.').slice(-2).join('.')
        return `https://api.${domain}`
        // return `http://localhost:8080`
    }
    return ''  // Empty string will be resolved relative to current domain
}

export const sendData = async (data, token) => {
    const baseURL = getApiUrl()
    const result = await api.post(`${baseURL}/api/update`, {
        payload: data,
        token
    })
    return result.data
}

export const joinDomain = async (token, name) => {
    const baseURL = getApiUrl()
    const { data } = await api.post(`${baseURL}/api/create`, { token, name })

    if (data.success) {
        return 'ok';
    }
}

export const resetData = async (token) => {
    const baseURL = getApiUrl()
    const { data } = await api.put(`${baseURL}/api/reset-data`, { token })

    if (data.success) {
        return 'ok';
    }
}

export const reqCode = (token, login) => {
    const baseURL = getApiUrl()
    return api.put(`${baseURL}/api/code`, { token, login })
}

export const languages = [
    "en", "de", "et", "en", "es", "es",
    "fil", "hr", "id", "it", "lv", "lt", "hu",
    "ms", "nl", "no", "pt", "pt", "sk",
    "fi", "sv", "vi", "tr", "ca", "da", "fr", "pl",
    "ro", "sl", "sr", "is", "cs", "el", "bg",
    "ru", "uk", "he", "ar", "hi", "th", "ka",
    "zh", "ja", "zh", "ko"
]

export const flagNames = {
    "us": 'American English',    // American English - United States
    "de": 'Deutsch',    // Deutsch - Germany
    "ee": 'Eesti',    // Eesti - Estonia
    "gb": 'English',    // English - United Kingdom (generic English)
    "es": 'Español',    // Español - Spain
    "ar": 'Español en Argentina',    // Español en Argentina - Argentina
    "ph": 'Filipino',    // Filipino - Philippines
    "hr": 'Hrvatski',    // Hrvatski - Croatia
    "id": 'Indonesia',    // Indonesia - Indonesia
    "it": 'Italiano',    // Italiano - Italy
    "lv": 'Latviešu',    // Latviešu - Latvia
    "lt": 'Lietuvių',    // Lietuvių - Lithuania
    "hu": 'Magyar',    // Magyar - Hungary
    "my": 'Melayu',    // Melayu - Malaysia
    "nl": 'Nederlands',    // Nederlands - Netherlands
    "no": 'Norsk',    // Norsk - Norway
    "pt": 'Português',    // Português - Portugal
    "br": 'Português do Brasil',    // Português do Brasil - Brazil
    "sk": 'Slovenčina',    // Slovenčina - Slovakia
    "fi": 'Suomi',    // Suomi - Finland
    "se": 'Svenska',    // Svenska - Sweden
    "vn": 'Tiếng Việt',    // Tiếng Việt - Vietnam
    "tr": 'Türkçe',    // Türkçe - Turkey
    "ca": 'català',    // català - Spain (Catalonia)
    "dk": 'dansk',    // dansk - Denmark
    "fr": 'français',    // français - France
    "pl": 'polski',    // polski - Poland
    "ro": 'română',    // română - Romania
    "si": 'slovenščina',    // slovenščina - Slovenia
    "rs": 'srpski',    // srpski - Serbia
    "is": 'íslenska',    // íslenska - Iceland
    "cz": 'čeština',    // čeština - Czech Republic
    "gr": 'Ελληνικά',    // Ελληνικά - Greece
    "bg": 'Български',    // Български - Bulgaria
    "ru": 'Русский',    // Русский - Russia
    "ua": 'Українська',    // Українська - Ukraine
    "il": 'עברית',    // עברית - Israel
    "ae": 'العربية',    // العربية - United Arab Emirates
    "in": 'हिन्दी',    // हिन्दी - India
    "th": 'ไทย',    // ไทย - Thailand
    "ge": 'ქართული ენა',    // ქართული ენა - Georgia
    "cn": '中文',    // 中文 - China
    "jp": '日本語',    // 日本語 - Japan
    "tw": '繁體中文',    // 繁體中文 - Taiwan
    "kr": '한국어'     // 한국어 - South Korea
}
