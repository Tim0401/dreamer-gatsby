import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import Box from '@material-ui/core/Box';
import { useStaticQuery, graphql } from "gatsby"
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Typography } from "@material-ui/core";

const Footer = styled(Box)`
	margin-top: auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	height: 36px;
	color: white;
	background-color: ${props => props.theme.palette.primary.main} !important;
`;

const ProfileLink = styled.a`
	margin-right: 10px;
	color: white;
	&:hover {
		color: white;
	}
`;

const Copyright = styled(Typography)`
	margin-right: 10px;
	color: white;
`;

export default function FooterComponent() {
	const { site } = useStaticQuery(
		graphql`
      query {
        site {
          siteMetadata {
						title
						github
						twitter
          }
        }
      }
    `
	);
	return (
		<Footer>
			<ProfileLink href={site.siteMetadata.github} target="_blank" rel="noopener noreferrer">
				<GitHubIcon />
			</ProfileLink>
			<ProfileLink href={site.siteMetadata.twitter} target="_blank" rel="noopener noreferrer">
				<TwitterIcon />
			</ProfileLink>
			<Copyright variant="subtitle2">Copyright© 2020 akeno</Copyright> 
		</Footer>
	);
}