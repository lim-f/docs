/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-10 00:53:27
 * @Description: Coding something
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  title: `Lim Docs`,
  description: "Mark Framework Easier to Use",
  base: isProd ? '/docs/': '/',
  outDir: './docs',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'https://shiyix.cn/images/lim-logo.ico' }],
    ['meta', { property: 'og:type', content: 'website' }],
    // ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: "Mark Framework Easier to Use" }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@lim_f' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['link', { rel: 'stylesheet', href: isProd 
      ? 'https://unpkg.com/easy-icon@1.1.0/offline/css/easy-icon.css'
      : `/easy-icon.offline.css` 
    }],
  ],
  locales: {
    root: { label: 'English' },
    en: { label: '简体中文', link: 'https://lim-f.github.io/docs-cn' },
  },
  themeConfig: {
    logo: 'https://shiyix.cn/images/lim-logo.png',
    siteTitle: 'Lim Framework',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/intro' },
      { text: 'Playground', link: 'https://lim-f.github.io/playground' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'Introduction',
              link: '/guide/intro',
            },
            {
              text: 'Quick Start',
              link: '/guide/start',
            },
          ]
        },
        {
          text: 'Vue Lim',
          items: [
            {
              text: 'Install',
              link: '/guide/vue/install',
            },
            {
              text: 'Rule',
              link: '/guide/vue/rule',
            },
          ]
        },
        {
          text: 'React Lim',
          items: [
            {
              text: 'Install',
              link: '/guide/react/install',
            },
            {
              text: 'Rule',
              link: '/guide/react/rule',
            },
          ]
        },
        {
          text: 'Examples',
          items: [
            {
              text: 'Counter',
              link: '/guide/sample/counter',
            },
            {
              text: 'Binding',
              link: '/guide/sample/binding',
            },
            {
              text: 'TodoList',
              link: '/guide/sample/todo',
            },
            {
              text: 'Parameter',
              link: '/guide/sample/param',
            },
          ]
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lim-f' }
    ],
    footer: {
      message: 'LimF 2022-present',
      copyright: '@github/lim-f',
    }
  }
})
