import { type App } from 'vue';
import type { Locale } from 'vue-i18n';
import { createI18n } from 'vue-i18n';

export const currentLang = 'zh-cn';

export const i18n = createI18n({
  legacy: false,
  locale: '',
  messages: {},
});

const localesMap = Object.fromEntries(
  Object.entries(import.meta.glob('../../locales/*.yml')).map(([path, loadLocale]) => [
    path.match(/([\w-]*)\.yml$/)?.[1],
    loadLocale,
  ]),
) as Record<Locale, () => Promise<{ default: Record<string, string> }>>;

export const availableLocales = Object.keys(localesMap);

const loadedLanguages: Array<string> = [];

function setI18nLanguage(lang: Locale) {
  i18n.global.locale.value = lang as any;
  if (typeof document !== 'undefined') {
    document.querySelector('html')?.setAttribute('lang', lang);
  }

  return lang;
}

export async function loadLanguageAsync(lang: string): Promise<Locale> {
  // 若為同語系
  if (i18n.global.locale.value === lang) {
    return setI18nLanguage(lang);
  }

  // 若語系已準備就緒
  if (loadedLanguages.includes(lang)) {
    return setI18nLanguage(lang);
  }

  const availableLang = availableLocales.includes(lang) ? lang : 'zh-cn';

  // 若語系尚未準備完成
  const messages = await localesMap[availableLang]();
  i18n.global.setLocaleMessage(availableLang, messages.default);
  loadedLanguages.push(availableLang);
  return setI18nLanguage(availableLang);
}

export const install = async (app: App) => {
  app.use(i18n);
  await loadLanguageAsync(currentLang);
};
