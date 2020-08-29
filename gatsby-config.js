require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})

$siteTitle = "Dreamer"
$siteUrl = `https://www.example.com`
$googleTrackingId = ""
$facebookAppId = ""

module.exports = {
	siteMetadata: {
		title: $siteTitle,
		description: "良いことも悪いことも吐き出してリセットするブログ。",
		concept: "We can draw freely!",
		author: "akeno",
		siteUrl: $siteUrl,
	},
	plugins: [
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
				],
				queryLimit: 1000,
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
		`gatsby-plugin-sharp`,
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
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: $googleTrackingId,
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
				// 言語を指定。デフォルトはenglish
				language: "ja-jp",
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				// CommonMark mode (default: true)
				commonmark: true,
				// Footnotes mode (default: true)
				footnotes: true,
				// Pedantic mode (default: true)
				pedantic: true,
				// GitHub Flavored Markdown mode (default: true)
				gfm: true,
				// Plugins configs
				plugins: [
					`gatsby-remark-code-titles`,
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: "language-",
							inlineCodeMarker: null,
							aliases: {},
							showLineNumbers: false,
							noInlineHighlight: false,
						},
					},
					{
						resolve: `gatsby-remark-autolink-headers`,
						options: {
							offsetY: `100`,
							icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
							className: `custom-class`,
						},
					},
					{
						resolve: 'gatsby-remark-emojis',
						options: {
							// falseにすると絵文字機能をオフにできます
							active: true,
							// サイズは16, 24, 32, 64から選べます
							size: 64,
							// 独自クラスを追加できます
							class: 'emoji-icon',
							// 独自スタイルを追加できます
							styles: {
								display: 'inline',
								margin: '0',
								'margin-top': '1px',
								position: 'relative',
								top: '5px',
								width: '25px'
							}
						}
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
					{
						resolve: "gatsby-remark-embed-youtube",
						options: {
							width: 800,
							height: 400
						}
					},
					`gatsby-remark-responsive-iframe`,
					`gatsby-plugin-twitter`
				],
			},
		}
	],
}