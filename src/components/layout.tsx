import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import blue from '@material-ui/core/colors/blue';

import Nav from "./nav"
import Seo from "./seo"
import Content from "./content"
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import "../assets/css/main.scss"

interface IProps {
  children: React.ReactNode;
}

const theme = createMuiTheme({
  //テーマの定義
  palette: {
    type: 'light' // 'light'(default) or 'dark'
  },
  typography: {
    button: {
      textTransform: "none"
    },
    fontFamily: [
      'Noto Sans Japanese',
      "游ゴシック体",
      "Yu Gothic",
      "YuGothic",
      "ヒラギノ角ゴシック Pro",
      "Hiragino Kaku Gothic Pro",
      'メイリオ',
      "Meiryo",
      "Osaka",
      "ＭＳ Ｐゴシック",
      "MS PGothic",
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

const Layout = ({ children }: IProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Seo lang="ja" />
      <Content children={children} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
