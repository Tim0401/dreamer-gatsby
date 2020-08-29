import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({});

export default function SideBar() {
  const classes = useStyles();

  return (
    <Box m={1}>
      <Box>
        <a href='http://www.hook-net.jp/houkago/' target='_blank'><img src='http://www.hook-net.jp/houkago/banner/bnr300x250-B.jpg' alt='『放課後シンデレラ』を応援しています！' border='0' /></a>
      </Box>
    </Box>
  )
}