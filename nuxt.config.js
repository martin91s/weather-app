const { resolve } = require('path');

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'weather-app',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap' },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/scss/app.scss',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/style-resources',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    styleResources: {
        scss: [
            '@/assets/scss/_variables.scss',
            '@/node_modules/bootstrap/scss/mixins/**/*.scss',
        ],
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    publicRuntimeConfig: {
        WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    },
};
