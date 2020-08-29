import React from "react"
import ArticleCard from "./card"
import { StrapiArticleEdge } from "../../types/graphql-types"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

interface IProps {
  articles: StrapiArticleEdge[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
  }),
);

const Articles = ({ articles }: IProps) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}  alignItems="stretch">
      {articles.map((article: StrapiArticleEdge, i: Number) => {
        return (
          <Grid item xs={12} md={6} xl={4} style={{display: 'flex'}} key={article.node.id}>
              <ArticleCard article={article} key={"article__${article.node.id}"} />
          </Grid>
        )
      })}
    </Grid>

  )
}

export default Articles