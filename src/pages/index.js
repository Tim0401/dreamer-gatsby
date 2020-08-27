import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import ArticlesComponent from "../components/articles"

import "../assets/css/main.css"

const IndexPage = () => (
    <Layout>
        <StaticQuery
            query={graphql`
        query {
          allArticle {
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
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      `}
            render={data => (
                <div className="uk-section">
                    <div className="uk-container uk-container-large">
                        <h1>Dreamer</h1>
                        <ArticlesComponent articles={data.allArticle.edges} />
                    </div>
                </div>
            )}
        />
    </Layout>
)

export default IndexPage