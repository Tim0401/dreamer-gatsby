import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link, StaticQuery, graphql } from "gatsby"
import { StrapiPageEdge } from "../../types/graphql-types"

const useStyles = makeStyles({});

export default function PageContent() {
  const classes = useStyles();

  return (
    <StaticQuery
      query={graphql`
      query {
        pages: allStrapiPage {
          edges {
            node {
              strapiId
              title
            }
          }
        }
      }
    `}
      render={data =>
        <List>
          {data.pages.edges.map((page: StrapiPageEdge, i: Number) => {
            return (
              <Link to={`/pages/${page.node.strapiId}`} key={page.node.strapiId}>
                <ListItem button>
                  <ListItemIcon>{i % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={page.node.title} />
                </ListItem>
              </Link>
            )
          })}
        </List>
      }
    />
  );
}
