import React from "react"
import { graphql } from "gatsby"

import ArticlesComponent from "../components/articles"
import { PaginateComponent } from "../components/paginate";
import Layout from "../components/layout"
import { StrapiCategory, StrapiArticleConnection } from "../../types/graphql-types"

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SideBar from '../components/sidebar'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

interface IBProps {
  articles: StrapiArticleConnection;
  category: StrapiCategory;
}

interface IProps {
  data: IBProps;
}

export const query = graphql`
  query Category($id: String!, $skip: Int!, $limit: Int!) {
    articles: allArticle(
      filter: { category: { id: { eq: $id } } },
      sort: { fields: published_at, order: DESC },
      skip: $skip,
      limit: $limit
      ) {
      edges {
        node {
          strapiId
          title
          category {
            id
            name
          }
          childMarkdownRemark {
            excerpt(truncate: true)
          }
          image {
            publicURL
          }
          published_at
        }
      }
    }
    category: strapiCategory(strapiId: { eq: $id }) {
      name
    }
  }
`;

const Category = ({ data, pageContext }: IProps) => {
  const articles = data.articles.edges
  const category = data.category.name

  return (
    <Layout title={category}>
      <Box  m={{ xs: 1, sm: 3, md: 5 }} >
        <Box mb={2}>
          <Typography variant="h3" noWrap>{category}</Typography>
        </Box>
        <Divider />
        <Box mt={2}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={8} md={9}>
              <ArticlesComponent articles={articles} />
              <PaginateComponent pageContext={pageContext} />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <SideBar />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
  )
}

export default Category