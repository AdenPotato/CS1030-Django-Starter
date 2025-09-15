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

    navbar: [],
    themeConfig: {
      sidebar: [
    "/README.md", 
    "/Installing/get-started.md", 
    "/Installing/Linux.md",
    "/Installing/Windows.md", ],
  }
  }),
  

  bundler: viteBundler(),

})
