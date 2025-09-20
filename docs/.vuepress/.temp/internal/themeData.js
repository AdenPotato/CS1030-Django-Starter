export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"navbar\":[],\"sidebar\":[{\"text\":\"Welcome\",\"link\":\"README.md\",\"collapsible\":false},{\"text\":\"Installing\",\"link\":\"/Installing/get-started.md\",\"collapsible\":false,\"children\":[\"/Installing/Linux.md\",\"/Installing/Windows.md\"]},{\"text\":\"Starting The Project\",\"link\":\"/ProjectStart/ProjectStart.md\",\"collapsible\":false,\"children\":[\"/ProjectStart/git.md\"]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
