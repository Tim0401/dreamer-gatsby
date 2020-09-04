require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})

$siteTitle = "Dreamer"
$siteUrl = `https://dreamer.cyou`
$googleTrackingId = "UA-150121658-1"
$facebookAppId = "768221287330161"

module.exports = {
	siteMetadata: {
		title: $siteTitle,
		description: "良いことも悪いことも吐き出してリセットするブログ。",
		concept: "We can draw freely!",
		author: "akeno",
		siteUrl: $siteUrl,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: $googleTrackingId,
				head: true,
			},
		},
		"gatsby-plugin-react-helmet",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
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
					"page",
					"sidebar",
				],
				queryLimit: 1000,
				markdownImages: {
					typesToParse: {
						article: ['content'],
						page: ['content'],
						sidebar: ['content']
					}
				}
			},
		},
		"gatsby-plugin-typescript",
		"gatsby-plugin-sass",
		{
			resolve: 'gatsby-plugin-graphql-codegen',
			options: {
				fileName: `types/graphql-types.d.ts`
			}
		},
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: $siteUrl,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: $siteTitle,
				short_name: $siteTitle,
				start_url: `/`,
				background_color: `#f7f0eb`,
				theme_color: `#a2466c`,
				display: `standalone`,
				icon: `src/images/icon.png`
			},
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				sitemapSize: 5000
			}
		},
		"gatsby-plugin-material-ui",
		"gatsby-plugin-styled-components",
		"gatsby-plugin-catch-links",
		'gatsby-plugin-robots-txt',
		"gatsby-plugin-offline",
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: `#444`,
				showSpinner: false,
			},
		},
		{
			resolve: `gatsby-plugin-facebook-analytics`,
			options: {
				appId: $facebookAppId,
				// 開発時も解析対象とするか
				// デフォルトはfalseでプロダクションのみ解析対象とします
				includeInDevelopment: false,
				// SDKのデバックバージョンを含めるか
				// デフォルトはfalseでライブラリはsdk.jsをロードします。
				debug: false,
				xfbml: false,
				// 言語を指定。デフォルトはenglish
				language: "ja-jp",
			},
		},
		`gatsby-plugin-twitter`,
		`gatsby-transformer-remark`
	],
}