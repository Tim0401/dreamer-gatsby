import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link, StaticQuery, graphql } from "gatsby"
import { StrapiCategoryEdge } from "../../types/graphql-types"

const useStyles = makeStyles({});

export default function CategoryContent() {
  const classes = useStyles();

  return (
    <StaticQuery
      query={graphql`
      query {
        categories: allStrapiCategory {
          edges {
            node {
              strapiId
              name
            }
          }
        }
      }
    `}
      render={data =>
        <List>
          {data.categories.edges.map((category: StrapiCategoryEdge, i: Number) => {
            return (
              <Link to={`/categories/${category.node.strapiId}`}>
                <ListItem button>
                  <ListItemIcon>{i % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={category.node.name} />
                </ListItem>
              </Link>
            )
          })}
        </List>
      }
    />
  );
}
