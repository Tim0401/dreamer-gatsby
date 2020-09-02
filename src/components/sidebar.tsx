import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import houkago from '../images/banner/houkago.jpg';
import { Link, StaticQuery, graphql } from "gatsby"
import { RawMarkdown } from "../components/raw-markdown";
import { StrapiSidebarEdge } from "../../types/graphql-types"

const useStyles = makeStyles({});

export default function SideBar() {
  const classes = useStyles();
  return (
    <StaticQuery
      query={graphql`
                query {
                  sidebars: allStrapiSidebar {
                    edges {
                      node {
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
                              presentationWidth
                              presentationHeight
                            } 
                          } 
                          base
                        }
                      }
                    }
                  }
                }
              `}
      render={data =>
        <Box m={1}>
          {data.sidebars.edges.map((sidebar: StrapiSidebarEdge, i: Number) => {
            return (
              <RawMarkdown source={sidebar.node.content} fluidImages={sidebar.node.content_images} />
            )
          })}
        </Box>
      }
    />
  )
}