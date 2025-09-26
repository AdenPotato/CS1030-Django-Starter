export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/aden/school/cs1030/CS1030-Django-Starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Welcome"} }],
  ["/Installing/Linux.html", { loader: () => import(/* webpackChunkName: "Installing_Linux.html" */"/home/aden/school/cs1030/CS1030-Django-Starter/docs/.vuepress/.temp/pages/Installing/Linux.html.js"), meta: {"title":"Linux / Mac"} }],
  ["/Installing/Windows.html", { loader: () => import(/* webpackChunkName: "Installing_Windows.html" */"/home/aden/school/cs1030/CS1030-Django-Starter/docs/.vuepress/.temp/pages/Installing/Windows.html.js"), meta: {"title":"Windows"} }],
  ["/Installing/get-started.html", { loader: () => import(/* webpackChunkName: "Installing_get-started.html" */"/home/aden/school/cs1030/CS1030-Django-Starter/docs/.vuepress/.temp/pages/Installing/get-started.html.js"), meta: {"title":"Setting up Your Django Enviroment"} }],
  ["/ProjectStart/ProjectStart.html", { loader: () => import(/* webpackChunkName: "ProjectStart_ProjectStart.html" */"/home/aden/school/cs1030/CS1030-Django-Starter/docs/.vuepress/.temp/pages/ProjectStart/ProjectStart.html.js"), meta: {"title":"Lets Start"} }],
  ["/ProjectStart/Understanding-Django.html", { loader: () => import(/* webpackChunkName: "ProjectStart_Understanding-Django.html" */"/home/aden/school/cs1030/CS1030-Django-Starter/docs/.vuepress/.temp/pages/ProjectStart/Understanding-Django.html.js"), meta: {"title":""} }],
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
