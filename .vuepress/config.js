module.exports = {
  title: '🌸 iJackUA\'s Hanami Cookbook',
  description: 'Receipts from real projects',
  themeConfig: {
    sidebar: [
      '/',
      '/pages/intro',
      {
        title: 'DB',
        collapsable: false,
        children: [
          '/pages/db/entity',
          '/pages/db/pagination',
          '/pages/db/rom',
          '/pages/db/sequel',
        ]
      },
      '/pages/dependencies',
      '/pages/cache',
      '/pages/sidekiq',
      '/pages/misconceptions'
    ],
    nav: [
      { text: 'About', link: 'about' },
      { text: 'Hanami', link: 'http://hanamirb.org/' },
      // {
      //   text: 'Languages',
      //   items: [
      //     { text: 'English', link: '/' },
      //     { text: 'Ukrainian', link: '/uk-UA' }
      //   ]
      // }
    ],
    lastUpdated: 'Last Updated',
    repo: 'iJackUA/hanami-cookbook',
    editLinks: true,
    editLinkText: 'Edit this page (help us to improve it!)',
    ga: 'UA-120541194-1',
    algolia: {
      apiKey: 'e2af62df119e15ab1ca2a432805d43c1',
      indexName: 'hanami_cookbook'
    }
  }
}
