import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: '/CS1030-Django-Starter/',
  lang: 'en-US',

  title: 'Django Project',
  description: '',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/', '/get-started'],
    sidebar: 
      [
        '/',
        {
          title: 'Getting Started',
          collapsable: false,
          children  : [
            '/getting-started/'
          ]
        }
      ]
  }),
  

  bundler: viteBundler(),
})


