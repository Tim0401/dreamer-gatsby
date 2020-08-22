require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: "Dreamer",
        description: "We can draw freely!",
        author: "akeno",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: "gatsby-source-strapi",
            options: {
                apiURL: process.env.API_URL || "http://localhost:1337",
                contentTypes: [
                    // List of the Content Types you want to be able to request from Gatsby.
                    "article",
                    "category",
                ],
                queryLimit: 1000,
            },
        },
        "gatsby-plugin-typescript",
        {
            resolve: 'gatsby-plugin-graphql-codegen',
            options: {
                fileName: `types/graphql-types.d.ts`
            }
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "gatsby-starter-default",
                short_name: "starter",
                start_url: "/",
                background_color: "#663399",
                theme_color: "#663399",
                display: "minimal-ui",
            },
        },
        "gatsby-plugin-offline",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                sitemapSize: 5000
            }
        },
        "gatsby-plugin-google-analytics",
    ],
}