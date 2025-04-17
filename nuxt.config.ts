import tailwindcss from "@tailwindcss/vite";
import tailwindPostcss from "@tailwindcss/postcss";
import { addPrerenderRoutes } from '@nuxt/kit'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        preset: 'node-server',
    },
    hooks: {
        // počas build‑time upravíme Nitro config
        'nitro:config'(nitroConfig) {
            // pridáme presne tú jednu routu, ktorú chceme,
            // vygeneruje sa .output/public/index.html
            addPrerenderRoutes(['/'])
        }
    },
    supabase: {
        redirect: false,
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_KEY,
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