export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d453e75e9a66640f00fefad',
                  title: 'Sanity Studio',
                  name: 'Outlook-vs-Excel-studio',
                  apiId: 'ed7d81cd-6ba0-4e71-9ab4-7f0f167f01b9'
                },
                {
                  buildHookId: '5d453e754cf6e417acc12109',
                  title: 'Landing pages Website',
                  name: 'fleetster at Bits and Pretzels 2018',
                  apiId: 'c761c41a-1653-4e57-8dbc-512c84e80ba8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RicardoASantos/Bits-and-Pretzels',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://bits-and-pretzels.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
