export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/aden/school/cs1030/CS1030-Django-Starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Welcome"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/home/aden/school/cs1030/CS1030-Django-Starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Setting up Your Django Enviroment"} }],
  ["/getting-started/Docker.html", { loader: () => import(/* webpackChunkName: "getting-started_Docker.html" */"/home/aden/school/cs1030/CS1030-Django-Starter/docs/.vuepress/.temp/pages/getting-started/Docker.html.js"), meta: {"title":""} }],
  ["/getting-started/Linux.html", { loader: () => import(/* webpackChunkName: "getting-started_Linux.html" */"/home/aden/school/cs1030/CS1030-Django-Starter/docs/.vuepress/.temp/pages/getting-started/Linux.html.js"), meta: {"title":"Linux"} }],
  ["/getting-started/Windows.html", { loader: () => import(/* webpackChunkName: "getting-started_Windows.html" */"/home/aden/school/cs1030/CS1030-Django-Starter/docs/.vuepress/.temp/pages/getting-started/Windows.html.js"), meta: {"title":"Setup for Windows"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/aden/school/cs1030/CS1030-Django-Starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
