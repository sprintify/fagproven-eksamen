export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "logo-blob-ff0060.svg",
    "heroText": "Helsefagarbeider",
    "tagline": "Hvilke oppgaver har helsefagarbeideren?",
    "actions": [
      {
        "text": "Fagprøven →",
        "link": "/fagproven/dag1.md/",
        "type": "primary"
      },
      {
        "text": "Delta →",
        "link": "/fagproven/dag2.md/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "Approachable",
        "details": "now HTML, CSS and JavaScript? Read the guide and start building things in no time!"
      },
      {
        "title": "Versatile",
        "details": "An incrementally adoptable ecosystem that scales between a library and a full-featured framework."
      },
      {
        "title": "Performant",
        "details": "20KB min+gzip Runtim Blazing Fast Virtual DOM Minimal Optimization Efforts"
      }
    ],
    "footer": "Made by  sprintify ❤️"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
