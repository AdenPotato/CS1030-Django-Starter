import comp from "/home/adenl/CS1030/CS1030-Django-Starter/docs/.vuepress/.temp/pages/ProjectStart/ProjectStart.html.vue"
const data = JSON.parse("{\"path\":\"/ProjectStart/ProjectStart.html\",\"title\":\"Lets Start\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1758341156000,\"contributors\":[{\"name\":\"AdenPotato\",\"username\":\"AdenPotato\",\"email\":\"AdenKappa403@gmail.com\",\"commits\":2,\"url\":\"https://github.com/AdenPotato\"}],\"changelog\":[{\"hash\":\"3d846d3af4ea232761357bd00304c84cdd54d5ff\",\"time\":1758341156000,\"email\":\"AdenKappa403@gmail.com\",\"author\":\"AdenPotato\",\"message\":\"added git and new sidebar\"},{\"hash\":\"b4d7227583b22f6f50275c482f63ad41ca18cb23\",\"time\":1758340270000,\"email\":\"AdenKappa403@gmail.com\",\"author\":\"AdenPotato\",\"message\":\"adding Project start and pre added understanding django\"}]},\"filePathRelative\":\"ProjectStart/ProjectStart.md\"}")
export { comp, data }

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
