import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import houkago from '../images/banner/houkago.jpg';

const useStyles = makeStyles({});

export default function SideBar() {
  const classes = useStyles();

  return (
    <Box m={1}>
      <Box>
        <a href='http://www.hook-net.jp/houkago/' target='_blank'><img src={houkago} alt='『放課後シンデレラ』を応援しています！' border='0' /></a>
      </Box>
    </Box>
  )
}