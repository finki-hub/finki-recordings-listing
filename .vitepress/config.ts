import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "mk",
  title: "ФИНКИ СНИМКИ",
  description: "Колекција од снимки од предмети на ФИНКИ",
  // Exclude the repository README from being compiled as a page
  srcExclude: [
    'README.md'
  ],
  markdown: {
    config: (md) => {
      md.core.ruler.push('frontmatter-keywords', (state) => {
        const env: any = state.env || {}
        const keywords: unknown = env.frontmatter?.keywords
        if (Array.isArray(keywords) && keywords.length > 0) {
          // Append a hidden HTML block so the terms are indexed by local search
          // without authors needing to place HTML in the Markdown.
          const token = new (state as any).Token('html_block', '', 0)
          token.content = `<div style="display:none">${keywords.join(' ')}</div>`
          state.tokens.push(token)
        }
        return true
      })
    }
  },
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
