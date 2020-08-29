import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import ArticlesComponent from "../components/articles"
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import SideBar from '../components/sidebar'
import Grid from '@material-ui/core/Grid';

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
                  id
                  name
                }
                image {
                  publicURL
                }
                childMarkdownRemark {
                  html
                  excerpt(truncate: true)
                }
                published_at
              }
            }
          }
          site {
            siteMetadata {
              title
              description
              concept
            }
          }
        }
      `}
      render={data => (
        <Box m={5}>
          <Box mb={2}>
            <Typography variant="subtitle2" noWrap style={{ fontFamily: "Staatliches" }}>
              {data.site.siteMetadata.concept}
            </Typography>
            <Typography variant="h1" noWrap style={{ fontFamily: "Staatliches", border: "none" }}>
              {data.site.siteMetadata.title}
            </Typography>
            <Typography variant="" noWrap>
              {data.site.siteMetadata.description}
            </Typography>
          </Box>
          <Divider />
          <Box mt={2}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={8} md={9}>
                <ArticlesComponent articles={data.allArticle.edges} />
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <SideBar />
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    />
  </Layout>
)

export default IndexPage