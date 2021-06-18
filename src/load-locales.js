// If you want to add more languages, please add a line here
lang.init({
    defaultLang: "en",
    cookie: {
      name: 'langCookie',
      expiry: 365,
      path: '/'
    },
    allowCookieOverride: false
});
lang.dynamic("en", "assets/locales/en.json");
lang.dynamic("zh-CN", "assets/locales/zh-CN.json");

if (!Cookies.get('categoryLocale')) {
    Cookies.set('categoryLocale', currentLang, {
        expires: 365
    });
} else {
    console.log('categoryLocale is exist.')
}

function changeLocales(locale) {
    lang.change(locale);
    Cookies.set('categoryLocale', locale, {
        expires: 365
    });
    reloadData();
    return false;
}