/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { paginate } = require(`gatsby-awesome-pagination`);
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
        {
          articles: allStrapiArticle (sort: {fields: published_at, order: DESC}) {
            edges {
              node {
                strapiId
              }
            }
          }
          categories: allStrapiCategory {
            edges {
              node {
                strapiId
                articles {
                  id
                }
              }
            }
          }
          pages: allStrapiPage {
            edges {
              node {
                strapiId
              }
            }
          }
        }
      `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog articles pages.
  const articles = result.data.articles.edges
  const categories = result.data.categories.edges
  const pages = result.data.pages.edges
  const itemsPerPage = 12

  // 記事個別ページ
  articles.forEach((article, index) => {
    createPage({
      path: `/articles/${article.node.strapiId}`,
      component: require.resolve("./src/templates/article.tsx"),
      context: {
        id: article.node.strapiId,
      },
    })
  })

  // 記事一覧ページネーション
  paginate({
    createPage,
    items: articles,
    itemsPerPage: itemsPerPage,
    component: require.resolve("./src/templates/index.tsx"),
    pathPrefix: "/articleLists",
  });

  // カテゴリの記事一覧ページ
  categories.forEach((category, index) => {
    // カテゴリ記事一覧ページネーション
    paginate({
      createPage,
      items: category.node.articles,
      itemsPerPage: itemsPerPage,
      component: require.resolve("./src/templates/category.tsx"),
      pathPrefix: `/categories/${category.node.strapiId}`,
      context: {
        id: category.node.strapiId,
      },
    });
  })

  // 単体ページ
  pages.forEach((page, index) => {
    createPage({
      path: `/pages/${page.node.strapiId}`,
      component: require.resolve("./src/templates/page.tsx"),
      context: {
        id: page.node.strapiId,
      },
    })
  })
}

const crypto = require(`crypto`);

const digest = data => {
  return crypto
    .createHash(`md5`)
    .update(JSON.stringify(data))
    .digest(`hex`);
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNode, createNodeField } = boundActionCreators;

  if (node.internal.type === "StrapiArticle") {
    createNode({
      ...node,
      id: node.id + "-markdown",
      parent: node.id,
      children: [],
      internal: {
        type: "Article",
        mediaType: "text/markdown",
        content: node.content,
        contentDigest: digest(node)
      }
    });
  }
};