import tailwindcss from "@tailwindcss/vite";
import tailwindPostcss from "@tailwindcss/postcss";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    supabase: {
        redirect: false,
    },
    ui: {
        colorMode: true,
        theme: {
            colors: ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'],
        }
    },
    compatibilityDate: '2024-11-01',
    future: {
        // compatibilityVersion: 4,
    },
    devtools: {
        enabled: true
    },
    css: [
        '~/assets/styles/main.css',
    ],
    modules: [
      '@nuxt/ui',
      '@nuxt/fonts',
      '@nuxt/image',
      '@nuxtjs/supabase',
      '@pinia/nuxt',
      '@nuxtjs/i18n',
      '@nuxtjs/device',
      '@vueuse/nuxt',
      'dayjs-nuxt',
      '@vee-validate/nuxt',
      '@vesp/nuxt-fontawesome',
    ],

    postcss: {
        plugins: {

            // '@tailwindcss/postcss':tailwindPostcss,
            // autoprefixer: {},
        },
    },
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    i18n: {
        bundle: {
            optimizeTranslationDirective: false,
        },
    },
    fontawesome: {
        icons: {
            solid: ['file-pdf']
        },
        proIcons: {
            solid: [
                'scroll',
                // 'file-pdf'
            ],
            light: [
                // 'file-pdf',
                'scroll',
                'computer-mouse-scrollwheel'
            ],
            thin: [],
            duotone: [],
        },
        // component: 'font-awesome-icon',
    },
})