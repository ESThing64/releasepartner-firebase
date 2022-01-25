const config = {
    // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
    // like '/berry-material-react/react/default'
    basename: '',
    defaultPath: '/sample-page',
    fontFamily: `'Roboto', sans-serif`,
    borderRadius: 12,
    outlinedFilled: true,
    theme: 'light', // light, dark
    presetColor: 'default', // default, theme1, theme2, theme3, theme4, theme5, theme6
    i18n: 'en', // 'en' - English, 'fr' - French, 'ro' - Romanian, 'zh' - Chinese
    rtlLayout: false,
    jwt: {
        secret: 'SECRET-KEY',
        timeout: '1 days'
    },
    firebase: {
        apiKey: "AIzaSyB_1oWs0BR0zwCPOP8HwbhvyksvESogGMo",
        authDomain: "releasepartner.firebaseapp.com",
        databaseURL: "https://releasepartner-default-rtdb.firebaseio.com",
        projectId: "releasepartner",
        storageBucket: "releasepartner.appspot.com",
        messagingSenderId: "199679970723",
        appId: "1:199679970723:web:aa771e128c3faee3299e16",
        measurementId: 'G-MGJHSL8XW3'
    },
    auth0: {
        client_id: '7T4IlWis4DKHSbG8JAye4Ipk0rvXkH9V',
        domain: 'dev-w0-vxep3.us.auth0.com'
    }
};

export default config;
