import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components";

import Layout from "../components/layout"
import ArticlesComponent from "../components/articles"
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SideBar from '../components/sidebar'
import Grid from '@material-ui/core/Grid';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const CatalogButton = styled(Button)`
  float: right !important;
  margin-top: 16px !important;
  color: white !important;
  background-color: ${props => props.theme.palette.primary.main} !important;
  &:hover {
    color: white !important;
    background-color: ${props => props.theme.palette.primary.dark} !important;
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: { 
      fontFamily: "Staatliches", 
      border: "none",
      [theme.breakpoints.up('xs')]: {
        fontSize: '4rem',
      }, 
      [theme.breakpoints.up('sm')]: {
        fontSize: '9rem',
      }, 
      [theme.breakpoints.up('md')]: {
        fontSize: '16rem',
      },
    }
  })
);

const IndexPage = () => {
  const classes = useStyles();
  return (
    <Layout title="">
      <StaticQuery
        query={graphql`
        query {
          allArticle(
            sort: {fields: published_at, order: DESC},
            limit: 12
            ) {
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
          <Box m={{ xs: 1, sm: 3, md: 5 }} >
            <Box mb={2}>
              <Typography variant="subtitle2" noWrap style={{ fontFamily: "Staatliches" }}>
                {data.site.siteMetadata.concept}
              </Typography>
              <Typography variant="h1" noWrap className={classes.title}>
                {data.site.siteMetadata.title}
              </Typography>
              <Typography variant="body1">
                {data.site.siteMetadata.description}
              </Typography>
            </Box>
            <Divider />
            <Box mt={2}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={8} md={9}>
                  <ArticlesComponent articles={data.allArticle.edges} />
                  <CatalogButton component={Link} to={'/articleLists'}>
                    記事一覧<DoubleArrowIcon></DoubleArrowIcon>
                  </CatalogButton>
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
}

export default IndexPage