import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider, createMuiTheme, responsiveFontSizes, ListItemText } from "@material-ui/core";
import blue from '@material-ui/core/colors/blue';

import Seo from "./seo"
import Content from "./content"
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import "../assets/css/main.scss"

interface IProps {
  children: React.ReactNode;
  title: string | undefined | null;
}

let theme = createMuiTheme({
  //テーマの定義
  palette: {
    type: 'light' // 'light'(default) or 'dark'
  },
  typography: {
    fontSize: 16,
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 16,
    },
    h1: {
      fontSize: 48
    },
    h2: {
      fontSize: 36
    },
    h3: {
      fontSize: 24
    },
    h4: {
      fontSize: 22
    },
    h5: {
      fontSize: 20
    },
    h6: {
      fontSize: 18
    },
    button: {
      textTransform: "none"
    },
    fontFamily: [
      '"M PLUS Rounded 1c"',
      '"Noto Sans Japanese"',
      '"游ゴシック体"',
      '"Yu Gothic"',
      'YuGothic',
      '"ヒラギノ角ゴシック Pro"',
      '"Hiragino Kaku Gothic Pro"',
      '"メイリオ"',
      'Meiryo',
      'Osaka',
      '"ＭＳ Ｐゴシック"',
      '"MS PGothic"',
      'sans-serif',
    ].join(','),
  },
  props: {
    MuiTextField: {
      variant: "outlined"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1600,
    },
  },
});

theme = responsiveFontSizes(theme);

const Layout = ({ children, title = "" }: IProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Seo lang="ja" title={title} />
      <Content children={children} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
