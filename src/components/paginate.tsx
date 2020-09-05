import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const PaginateButton = styled(Button)`
  color: white;
  background-color: ${props => props.theme.palette.primary.main};
  &:hover {
    color: white;
    background-color: ${props => props.theme.palette.primary.dark};
  }
`;

export const PaginateComponent = ({ pageContext }) => {
	const { previousPagePath, nextPagePath, previousItem, nextItem } = pageContext;
	return (
		<Box mt={2}>
			{previousPagePath &&
				<PaginateButton component={Link} to={previousPagePath} style={{float:"left"}}>
					<ArrowBackIosIcon />Prev
				</PaginateButton>
			}
			{nextPagePath &&
				<PaginateButton component={Link} to={nextPagePath} style={{float:"right"}}>
					Next<ArrowForwardIosIcon />
				</PaginateButton>
			}
		</Box>
	)
}