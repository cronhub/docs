module.exports = {
  title: "Cronhub Docs",
  description: "Welcome to Cronhub Docs 👋",
  //   base: "/docs/",
  themeConfig: {
    lastUpdated: "Last Updated",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Cronhub.io", link: "https://cronhub.io" }
    ],
    sidebar: [
      {
        title: "Group 1",
        children: ["/"]
      },
      {
        title: "Group 2",
        children: []
      }
    ]
  }
};
