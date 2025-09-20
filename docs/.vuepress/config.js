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
    sidebar: [
    //sidebar item - Welcome
    {
      
      text: 'Welcome',
      link: 'README.md',
      collapsible: false,
      
    },
    //sidebar item - installing
    {
      text: 'Installing',
      link: '/Installing/get-started.md',
      collapsible: false,
      children: ['/Installing/Linux.md', '/Installing/Windows.md']
    },
    //sidebar item - Starting THe Project
    {
      text: 'Starting The Project',
      link: '/ProjectStart/ProjectStart.md',
      collapsible: false,
      children: ['/ProjectStart/git.md']
    },
  ]
    
      
    

    
}),
  

  bundler: viteBundler(),

})

