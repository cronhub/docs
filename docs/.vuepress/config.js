module.exports = {
  title: "Cronhub Docs",
  description: "Cron Jobs, With X-Ray Vision",
  //   base: "/docs/",
  themeConfig: {
    lastUpdated: "Last Updated",
    editLinks: true,
    docsDir: "docs",
    head: [
      ['link', { rel: 'icon', 'sizes': '32x32', href: `/favicon-32x32.png` }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    serviceWorker: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "cronhub.io", link: "https://cronhub.io" }
    ],
    sidebar: {
      "/": genSidebarConfig("Guide")
    },
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // }
    // Assumes GitHub. Can also be a full GitLab url.
    repo: "cronhub-app/docs",
    repoLabel: "Contribute on Github",
    docsRepo: "cronhub-app/docs",
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Help us improve this page!"
  },
  ga: "UA-120470331-1",
};

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        "",
        "getting-started",
        "how-to-ping",
        "monitor-states",
      ]
    }
  ];
}
