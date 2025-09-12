import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "mk",
  title: "ФИНКИ СНИМКИ",
  description: "Колекција од снимки од предмети на ФИНКИ",
  themeConfig: {
    nav: [
      { text: 'Дома', link: '/' },
      { text: 'Предмети', link: '/courses/' }
    ],
    sidebar: [
      {
        text: 'Преглед',
        items: [
          { text: 'Предмети', link: '/courses/' },
          { text: 'Структурно програмирање', link: '/courses/structural-programming' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/finki-hub/finki-recordings-listing' }
    ]
  }
})
