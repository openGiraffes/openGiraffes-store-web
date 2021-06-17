var lang = new Lang();

// If you want to add more languages, please add a line here
lang.dynamic("en", "assets/locales/en.json");
lang.dynamic("zh-CN", "assets/locales/zh-CN.json");

lang.init({
    defaultLang: "en",
    currentLang: 'zh-CN',
    cookie: {
        name: 'langCookie',
        expiry: 365,
        path: '/'
    },
    allowCookieOverride: true
});

function changeLocales(locale) {
    window.lang.change(locale);
    window.reloadData();
    return false;
}