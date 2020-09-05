import React from "react"
import { Link } from "gatsby"
import { StrapiArticleEdge } from "../../types/graphql-types"
import noimage from '../images/noimage.png';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Moment from "react-moment"
import Typography from '@material-ui/core/Typography';

interface IProps {
  article: StrapiArticleEdge;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    height: "100%",
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  cardActionArea: {
    height: "100%",
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  cardaMedia: {
    margin: "auto 0",
    maxHeight: "300px"
  },
  cardLink:{
    height: "100%"
  },
  cardAction: {
    marginLeft: "auto"
  },
  title: {
    textAlign: "center"
  }
});

export default function ArticleCard({ article }: IProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/articles/${article.node.strapiId}`} className={classes.cardLink}>
        <CardActionArea className={classes.cardActionArea}>
          <CardMedia className={classes.cardaMedia}
            component="img"
            alt={article.node.image ? article.node.image.publicURL ? article.node.image.publicURL : noimage : noimage}
            height="140"
            image={article.node.image ? article.node.image.publicURL ? article.node.image.publicURL : noimage : noimage}
            title={article.node.title}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2" className={classes.title}>
              {article.node.category ?
                (
                  <Link to={`/categories/${article.node.category.id}`}>
                    {article.node.category.name}
                  </Link>
                )
                : ("")}
            </Typography>
            <Typography gutterBottom variant="h3" component="h2" className={classes.title}>
              {article.node.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {article.node.childMarkdownRemark.excerpt}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions className={classes.cardAction}>
        <Moment format="YYYY-MM-DD">{article.node.published_at}</Moment>
      </CardActions>
    </Card>
  );
}
