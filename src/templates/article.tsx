import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"
import { QueryStrapiArticleArgs, StrapiArticle } from "../../types/graphql-types"

interface IBProps{
  article: StrapiArticle
}

interface IProps {
  data: IBProps;
}

export const query = graphql`
  query ArticleQuery($id: String!) {
    article(strapiId: { eq: $id }) {
      strapiId
      title
      content
      childMarkdownRemark {
        html
        excerpt
      }
      published_at
      image {
        publicURL
      }
    }
  }
`

const Article = ({ data }:IProps) => {
  const article = data.article
  return (
    <Layout>
      <div>
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          data-src={article.image ? article.image.publicURL : ""}
          data-srcset={article.image ? article.image.publicURL : ""}
          data-uk-img
        >
          <h1>{article.title}</h1>
        </div>

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <div dangerouslySetInnerHTML={{ __html: article.childMarkdownRemark.html }} />
            <p>
              <Moment format="MMM Do YYYY">{article.published_at}</Moment>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article