import React from "react"
import { graphql } from "gatsby"

import ArticlesComponent from "../components/articles"
import Layout from "../components/layout"
import { StrapiCategory, StrapiArticleConnection } from "../../types/graphql-types"

interface IBProps {
  articles: StrapiArticleConnection;
  category: StrapiCategory;
}

interface IProps {
  data: IBProps;
}

export const query = graphql`
  query Category($id: String!) {
    articles: allStrapiArticle(filter: { category: { id: { eq: $id } } }) {
      edges {
        node {
          strapiId
          title
          category {
            name
          }
          image {
            publicURL
          }
        }
      }
    }
    category: strapiCategory(strapiId: { eq: $id }) {
      name
    }
  }
`

const Category = ({ data }:IProps) => {
    const articles = data.articles.edges
    const category = data.category.name

    return (
        <Layout>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <h1>{category}</h1>
                    <ArticlesComponent articles={articles} />
                </div>
            </div>
        </Layout>
        )
}

export default Category