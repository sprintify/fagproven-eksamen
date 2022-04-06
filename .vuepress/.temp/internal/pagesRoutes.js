import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-147825fb","/docs/",{"title":""},["/docs/index.html","/docs/README.md"]],
  ["v-c0b52ef4","/docs/fagproven/dag1.html",{"title":"Dag 1"},["/docs/fagproven/dag1","/docs/fagproven/dag1.md"]],
  ["v-bd4b7db6","/docs/fagproven/dag2.html",{"title":"Dag 2"},["/docs/fagproven/dag2","/docs/fagproven/dag2.md"]],
  ["v-4b1b8ff8","/docs/group-one/bar.html",{"title":"bar"},["/docs/group-one/bar","/docs/group-one/bar.md"]],
  ["v-6bce11b6","/docs/group-one/foo.html",{"title":"foo"},["/docs/group-one/foo","/docs/group-one/foo.md"]],
  ["v-89311e78","/docs/helseguide/observasjon.html",{"title":"Hva skal observeres"},["/docs/helseguide/observasjon","/docs/helseguide/observasjon.md"]],
  ["v-8162f8d6","/docs/helseguide/sykdommer.html",{"title":"Sykdommer"},["/docs/helseguide/sykdommer","/docs/helseguide/sykdommer.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
