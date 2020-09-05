import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components";

// @ts-ignore
import noimage from '../images/noimage.png';

import Layout from "../components/layout"
import { StrapiPage } from "../../types/graphql-types"

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box } from "@material-ui/core";

import Divider from '@material-ui/core/Divider';
import SideBar from '../components/sidebar'
import Typography from '@material-ui/core/Typography';

import { RawMarkdown } from "../components/raw-markdown";

interface IBProps {
  strapiPage: StrapiPage
}

interface IProps {
  data: IBProps;
}

const Content = styled.div`

h1, h2, h3, h4, h5, h6 {
	margin: 0 0 20px 0 !important;
}

*+h1, *+h2, *+h3, *+h4, *+h5, *+h6 {
    margin: 40px 0 20px 0 !important;
}

`;

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
    strapiPage(strapiId: { eq: $id }) {
      strapiId
      title
      content
      content_images { 
        childImageSharp { 
          original { 
            src 
          } 
          fluid { 
            base64
            aspectRatio
            src
            srcSet
            sizes
          } 
        } 
        base
      }
      image {
        publicURL
      }
    }
  }
`

const Page = ({ data }: IProps) => {
  const page = data.strapiPage
  const classes = useStyles();
  return (
    <Layout title={page.title}>
      <Box m={{ xs: 1, sm: 3, md: 5 }}>
        <Box >
          <div
            id="banner"
            className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
            data-src={page.image ? page.image.publicURL : noimage}
            data-srcset={page.image ? page.image.publicURL : noimage}
            data-uk-img
          >
            <Box className={classes.bgBox}>
              <Typography variant="h1">{page.title}</Typography>
            </Box>
          </div>
        </Box>
        <Divider />
        <Box mt={2}>
          <Content>
            <Grid container spacing={1}>
              <Grid item xs={12} md={8} lg={9}>
                <RawMarkdown source={page.content} fluidImages={page.content_images} />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <SideBar />
              </Grid>
            </Grid>
          </Content>
        </Box>
      </Box>
    </Layout>
  )
}

export default Page