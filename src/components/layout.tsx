import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider, createMuiTheme, responsiveFontSizes, ListItemText, Box } from "@material-ui/core";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import blue from '@material-ui/core/colors/blue';

import Seo from "./seo"
import Content from "./content"
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import "../assets/css/main.scss"
import FooterComponent from "./footer";

interface IProps {
  children: React.ReactNode;
  title: string | undefined | null;
}
const fonts = [
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
];

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
      fontSize: 48,
      fontFamily: [
        '"M PLUS Rounded 1c"',
      ].concat(fonts).join(','),
    },
    h2: {
      fontSize: 36,
      fontFamily: [
        '"M PLUS Rounded 1c"',
      ].concat(fonts).join(','),
    },
    h3: {
      fontSize: 24,
      fontFamily: [
        '"M PLUS Rounded 1c"',
      ].concat(fonts).join(','),
    },
    h4: {
      fontSize: 22,
      fontFamily: [
        '"M PLUS Rounded 1c"',
      ].concat(fonts).join(','),
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
    fontFamily: fonts.join(','),
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
      <StyledThemeProvider theme={theme}>
        <Box style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
          <Seo lang="ja" title={title} />
          <Content children={children} />
          <FooterComponent />
        </Box>
      </StyledThemeProvider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
