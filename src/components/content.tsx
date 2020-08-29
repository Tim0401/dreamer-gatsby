import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import Hidden from '@material-ui/core/Hidden';
import { Link, StaticQuery, graphql } from "gatsby"
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import noimage from '../images/noimage.png';
import PageContent from './page-content';
import CategoryContent from './category-content';
import SideBar from './sidebar'
import Container from '@material-ui/core/Container';

const drawerWidth = 240;

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: "column",
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      '& a': {
        color: 'White',
        '&:hover': {
          color: 'White',
        }
      },
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
      height: "100%"
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      '& a': {
        color: 'black',
        '&:hover': {
          color: 'black',
        }
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
    content: {
      flexGrow: 1,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      // [theme.breakpoints.up('md')]: {
      //   marginRight: drawerWidth,
      // },
    },
  }),
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactNode;
}


export default function Content(props: Props) {
  const { children } = props
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawer = (
    <div>
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />

      <Typography variant="subtitle2" noWrap style={{ fontFamily: "Staatliches", margin: "1em" }}>PAGE</Typography>
      <PageContent />
      <Divider />
      <Typography variant="subtitle2" noWrap style={{ fontFamily: "Staatliches", margin: "1em" }}>CATEGORY</Typography>
      <CategoryContent />
      <Divider />

    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          position="sticky"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <StaticQuery
              query={graphql`
                query {
                  site {
                    siteMetadata {
                      title
                      description
                    }
                  }
                }
              `}
              render={data =>
                <List style={{ height: "64px", paddingTop: "0", paddingBottom: "0" }}>
                  <Link to="/">
                    <ListItem button className={classes.title} key={"title"}>
                      <Typography variant="h6" noWrap style={{ color: "white", fontFamily: "Staatliches" }}>
                        {data.site.siteMetadata.title}
                      </Typography>
                    </ListItem>
                  </Link>
                </List>
              }
            />
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              style={{ marginLeft: "auto" }}
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Container maxWidth="xl">
          {children}
        </Container>
      </main>
      <Hidden mdUp>
        <Drawer
          className={classes.drawer}
          variant="temporary"
          anchor="right"
          open={open}
          onClick={handleDrawerClose}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </div >
  );
}
