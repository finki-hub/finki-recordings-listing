import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "mk",
  title: "ФИНКИ СНИМКИ",
  description: "Колекција од снимки од предмети на ФИНКИ",
  themeConfig: {
    nav: [
      { text: 'Дома', link: '/' },
      { text: 'Вовед', link: '/courses/' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Пребарај',
                buttonAriaLabel: 'Пребарај'
              },
              modal: {
                noResultsText: 'Нема резултати',
                resetButtonTitle: 'Исчисти пребарување',
                displayDetails: 'Прикажи детали',
                backButtonTitle: 'Назад',
                footer: {
                  selectText: 'избери',
                  navigateText: 'движи се',
                  closeText: 'затвори'
                }
              }
            }
          }
        }
      }
    },
    sidebar: [
      {
        text: 'Преглед',
        items: [
          { text: 'Вовед', link: '/courses/' },
          { text: 'Структурно програмирање', link: '/courses/structural-programming' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/finki-hub/finki-recordings-listing' }
    ]
  }
})
