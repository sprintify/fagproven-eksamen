import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-5319cec8","/fagproven/dag1.html",{"title":"Dag 1"},["/fagproven/dag1","/fagproven/dag1.md"]],
  ["v-54cea767","/fagproven/dag2.html",{"title":"Dag 2"},["/fagproven/dag2","/fagproven/dag2.md"]],
  ["v-56838006","/fagproven/dag3.html",{"title":"Dag 3"},["/fagproven/dag3","/fagproven/dag3.md"]],
  ["v-1e8e5a4e","/fagproven/fagprov.html",{"title":"Hva er fagprøven?"},["/fagproven/fagprov","/fagproven/fagprov.md"]],
  ["v-764790ca","/fagproven/gjennomforing.html",{"title":"Hvordan gjennomføre fagprøven?"},["/fagproven/gjennomforing","/fagproven/gjennomforing.md"]],
  ["v-2e0938a6","/fagproven/helsefremmende.html",{"title":"Helsefremmende arbeid"},["/fagproven/helsefremmende","/fagproven/helsefremmende.md"]],
  ["v-5861e2d4","/fagproven/karakter.html",{"title":"Bestått eller ikke bestått"},["/fagproven/karakter","/fagproven/karakter.md"]],
  ["v-9068262a","/fagproven/kommunikasjon.html",{"title":"Kommunikasjon og samhandling"},["/fagproven/kommunikasjon","/fagproven/kommunikasjon.md"]],
  ["v-bd6de0fa","/fagproven/oppgavelosning.html",{"title":"Hvordan skrive oppgaven?"},["/fagproven/oppgavelosning","/fagproven/oppgavelosning.md"]],
  ["v-739fe9f3","/fagproven/ped-pleieplan.html",{"title":""},["/fagproven/ped-pleieplan","/fagproven/ped-pleieplan.md"]],
  ["v-2e601ec5","/fagproven/yrkesfaglig.html",{"title":"Yrkesutøvelse"},["/fagproven/yrkesfaglig","/fagproven/yrkesfaglig.md"]],
  ["v-877f4d14","/group-one/bar.html",{"title":"bar"},["/group-one/bar","/group-one/bar.md"]],
  ["v-3b3dc0a3","/group-one/foo.html",{"title":"foo"},["/group-one/foo","/group-one/foo.md"]],
  ["v-43dcbd0c","/helselinker/helseinformasjon.html",{"title":"Helseinformasjon"},["/helselinker/helseinformasjon","/helselinker/helseinformasjon.md"]],
  ["v-38ba7506","/helseguide/observasjon.html",{"title":"Hva skal observeres"},["/helseguide/observasjon","/helseguide/observasjon.md"]],
  ["v-526801e6","/helseguide/pleieplan.html",{"title":"Pedagogisk pleieplan"},["/helseguide/pleieplan","/helseguide/pleieplan.md"]],
  ["v-6ab9b057","/helseguide/sykdommer.html",{"title":"Sykdommer"},["/helseguide/sykdommer","/helseguide/sykdommer.md"]],
  ["v-0f0e7a20","/helseapper/helseapp.html",{"title":"Helseapper"},["/helseapper/helseapp","/helseapper/helseapp.md"]],
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
