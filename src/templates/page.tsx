import React from "react"
import { graphql } from "gatsby"

import noimage from '../images/noimage.png';

import Layout from "../components/layout"
import { StrapiPage } from "../../types/graphql-types"

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box } from "@material-ui/core";

import Divider from '@material-ui/core/Divider';
import SideBar from '../components/sidebar'
import Typography from '@material-ui/core/Typography';

interface IBProps {
  page: StrapiPage
}

interface IProps {
  data: IBProps;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bgBox: { 
      backgroundColor: "rgba(0,0,0,0.6)", 
      height: "100%", 
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
     }
  })
);

export const query = graphql`
  query PageQuery($id: String!) {
    page(strapiId: { eq: $id }) {
      strapiId
      title
      content
      childMarkdownRemark {
        html
      }
      image {
        publicURL
      }
    }
  }
`

const Page = ({ data }: IProps) => {
  const page = data.page
  const classes = useStyles();
  return (
    <Layout title={page.title}>
      <Box m={4}>
        <Box >
          <div
            id="banner"
            className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
            data-src={page.image ? page.image.publicURL : noimage}
            data-srcset={page.image ? page.image.publicURL : noimage}
            data-uk-img
          >
            <Box className={classes.bgBox}>
              <Typography variant="h2">{page.title}</Typography>
            </Box>
          </div>
        </Box>
        <Divider />
        <Box mt={2}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={8} lg={9}>
              <div dangerouslySetInnerHTML={{ __html: page.childMarkdownRemark.html }} />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <SideBar />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
  )
}

export default Page