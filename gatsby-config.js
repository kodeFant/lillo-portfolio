module.exports = {
  siteMetadata: {
    siteTitle: "Lars Lillo Ulvestad - JavaScript og WordPress",
    siteUrl: "https://lillo.tech"
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-yaml",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/sites/`,
        name: "sites"
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-129270701-1",
        anonymize: true
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Lars Lillo Ulvestads webutvikler-portefølje",
        short_name: "Lillos utviklerportefølje",
        description:
          "Jeg er en frilans webutvikler som bygger nettsteder i JavaScript og PHP.",
        start_url: "/",
        background_color: "#191e38",
        theme_color: "#6574cd",
        display: "standalone",
        icon: "src/favicon.png"
      }
    },
    /* Must be placed at the end */
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify"
  ]
};
