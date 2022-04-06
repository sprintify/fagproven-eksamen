


module.exports = {
    plugins: [
      [
        '@vuepress/docsearch',
        {
          apiKey: '<API_KEY>',
          indexName: '<INDEX_NAME>',
          locales: {
            '/': {
              placeholder: 'Search Documentation',
            },
            // '/zh/': {
            //   placeholder: '搜索文档',
            // },
          },
        },
      ],
    ],
     // site config
     lang: 'en-US',
     title: 'Helsefagarbeider',
     description: 'This is my first VuePress site',
   
     // theme and its config
     theme: '@vuepress/theme-default',
     themeConfig: {
      //  logo: 'https://vuejs.org/images/logo.png',
      logo: '/logo-blob-ff0060.svg',

       // NavbarGroup
       navbar: [
         
         { text: 'Helseguide', link: '/helseguide/sykdommer.md' },
        
      
          // {
          //    text: 'Helselinker',
          //    children: ['/group-one/foo.md', '/group-one/bar.md'],
          // },

          {
            text: 'Fagprøveguide', 
            children: [
              { text: 'FAGPRØVEN',
              children: [
                {
                  text: 'Hva er fagprøven?',
                  link: '/fagproven/fagprov.md',
                },
                {
                  text: 'Hvordan gjennomføre fagprøven?', 
                  link: '/fagproven/gjennomforing.md',
                },
                {
                  text: 'Hvordan skrive oppgaven?',
                  link: '/fagproven/oppgavelosning.md',
                },
                {
                  text: 'Dag 1',
                  link: '/fagproven/dag1.md',
                },
                {
                  text: 'Dag 2',
                  link: '/fagproven/dag2.md',
                },
                {
                  text: 'Dag 3',
                  link: '/fagproven/dag3.md',
                },
                {
                  text: 'Bestått eller ikke bestått',
                  link: '/fagproven/karakter.md',
                },
              ],
            },

            // '/fagproven/helsefremmende.md', 
            // '/fagproven/kommunikasjon.md', 
            // '/fagproven/yrkesfaglig.md'

            { text: 'KOMPETANSEMÅL',
            children: [
              {
                text: 'Helsefremmende arbeid',
                link: '/fagproven/helsefremmende.md',
              },
              {
                text: 'Kommunikasjon og samhandling',
                link: '/fagproven/kommunikasjon.md',
              },
              {
                text: 'Yrkesutøvelse',
                link: '/fagproven/yrkesfaglig.md',
              },
          
            ],
          
          },
          

          // { text: 'LEGEMIDLER',
          //   children: [
          //     {
          //       text: 'Felleskatalogen',
          //       link: 'https://www.felleskatalogen.no/medisin/',
          //     },
          //     {
          //       text: 'Norsk legemiddelhåndbok',
          //       link: 'https://www.legemiddelhandboka.no/',
          //     },
          //   ],
          // },  
          ],
         },


         {
          text: 'Helselinker', 
          children: [
            { text: 'LÆRING',
            children: [
              {
                text: 'Nasjonal digital læringsarena',
                link: 'https://ndla.no/utdanning/helse-og-oppvekstfag/',
              },
              {
                text: 'Kompetansebroen',
                link: 'https://www.kompetansebroen.no/e-laering?o=ahus/',
              },
              {
                text: 'Norsk Helseinformatikk',
                link: 'https://nhi.no/for-helsepersonell/',
              },
              {
                text: 'Aldring og helse',
                link: 'https://www.aldringoghelse.no/',
              },
            ],
          },
          { text: 'HELSEINFO',
          children: [
            {
              text: 'Helsedirektoratet',
              link: 'https://www.helsedirektoratet.no/',
            },
            {
              text: 'Store medisinske leksikon',
              link: 'https://sml.snl.no/',
            },
            {
              text: 'Folkehelseinstituttet',
              link: 'https://www.fhi.no/',
            },
            {
              text: 'Helsebiblioteket',
              link: 'https://www.helsebiblioteket.no/',
            },
            {
              text: 'Helsenett',
              link: 'https://www.helsenett.no/',
            },
          ],
        
        },
        

        { text: 'LEGEMIDLER',
          children: [
            {
              text: 'Felleskatalogen',
              link: 'https://www.felleskatalogen.no/medisin/',
            },
            {
              text: 'Norsk legemiddelhåndbok',
              link: 'https://www.legemiddelhandboka.no/',
            },
          ],
        },  
        ],
       },



         { text: 'Helseapper', link: '/helseapper/helseapp.md'},
 
 
         { text: 'NDLA', link: 'https://ndla.no/utdanning/helse-og-oppvekstfag' },
       ],
      //  lastUpdated: 'Last updated',
      //  sidebarDepth: 2,
      contributors: true,
      contributorsText: 'Sprintify.app',



 // sidebar object
    // pages under different sub paths will use different sidebar
    sidebar: {
      '/helseguide/': [
        {
          text: 'Helseguide',
        },
        {
          children: [
            '/helseguide/sykdommer.md',
            '/helseguide/observasjon.md'
        ],
        },
        // {
        //   children: ['/helseguide/observasjon.md'],
        // },
        {
          text: ' ',
        },
        {
          text: 'Pleieplan',
        },
        {
          children: ['/helseguide/pleieplan.md']
        },
      ],
      '/fagproven/': [
        {
          text: 'Fagprøve guide',
        },
        {
          children: [
            '/fagproven/fagprov.md',
            '/fagproven/gjennomforing.md',
            '/fagproven/oppgavelosning.md',
            '/fagproven/dag1.md',
            '/fagproven/dag2.md',
            '/fagproven/dag3.md',
            '/fagproven/karakter.md'
          ],
        },
        {
          text: ' ',
        },
        {
          text: 'Kompetansemål',
        },
        {
          children: [
            '/fagproven/helsefremmende.md', 
            '/fagproven/kommunikasjon.md', 
            '/fagproven/yrkesfaglig.md',
          ]
        },
        {
          text: ' ',
        },

      ],
      
      '/helselinker/': [
        {
          text: 'Helselinker',
        },
        {
          children: [
            '/helselinker/helseinformasjon.md',
          ],
        },
        {
          text: ' ',
        },
        {
          text: 'Læring og kurs',
        },
        {
          children: [
            {
              text: 'Nasjonal digital læring',
              link: 'https://ndla.no/utdanning/helse-og-oppvekstfag/',
            },
            {
              text: 'Kompetansebroen',
              link: 'https://www.kompetansebroen.no/e-laering?o=ahus',
            },
            {
              text: 'NHI',
              link: 'https://nhi.no/',
            },
            {
              text: 'Aldring og helse',
              link: 'https://www.aldringoghelse.no/',
            },
            {
              text: 'Mestring',
              link: 'https://mestring.no/',
            },
            {
              text: 'KS Læring (krever innlogging)',
              link: 'https://www.kslaring.no/local/catalogue/index.php',
            },
          ],
        },
        // {
        //   text: ' ',
        // },
        {
          text: 'Helseinformasjon',
        },
        {
          children: [
            {
              text: 'FHI',
              link: 'https://ndla.no/utdanning/helse-og-oppvekstfag/',
            },
            {
              text: 'Helsebiblioteket',
              link: 'https://www.helsebiblioteket.no/',
            },
            {
              text: 'Store medisinske leksikon',
              link: 'https://sml.snl.no/',
            },
            {
              text: 'Aldring og helse',
              link: 'https://www.aldringoghelse.no/',
            },
            {
              text: 'Mestring',
              link: 'https://mestring.no/',
            },
            {
              text: 'KS Læring (krever innlogging)',
              link: 'https://www.kslaring.no/local/catalogue/index.php',
            },
          ],
        },
      ],



      '/reference/': [
        {
          text: 'Reference',
          children: ['/reference/cli.md', '/reference/config.md'],
        },
      ],
    },




     }, 
    
  }

 