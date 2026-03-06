import { ui, defaultLang } from './ui';
import type { LangKey, UIKey } from './ui';

export function getLangFromUrl(url: URL): LangKey {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as LangKey;
    return defaultLang;
}

export function useTranslations(lang: LangKey) {
    return function t(key: UIKey): string {
        return ui[lang][key] || ui[defaultLang][key];
    };
}

export function getAlternateLang(lang: LangKey): LangKey {
    return lang === 'es' ? 'en' : 'es';
}
