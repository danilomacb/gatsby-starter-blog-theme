module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `My Blog Title`,
    author: `Danilo Macedo Bakun`,
    description: `Descrição...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/danilomacb`,
      },
      {
        name: `github`,
        url: `https://github.com/danilomacb`,
      },
    ],
  },
}
