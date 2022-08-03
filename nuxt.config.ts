import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    "nitro": {
        "output": {
            dir: 'output',
            publicDir: 'output/public'
        }
    },
    "target": "static"
})
