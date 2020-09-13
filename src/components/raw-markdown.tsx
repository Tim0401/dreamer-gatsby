import React, { FC } from "react"
import ReactMarkdown from "react-markdown"
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Img from "gatsby-image"
// @ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
// @ts-ignore
import style from "react-syntax-highlighter/dist/esm/styles/prism/solarizedlight"

import AcUnitIcon from '@material-ui/icons/AcUnit'

const shortcodes = require('remark-shortcodes')

const Heading = styled(Typography)`
	
		display: flex;
		align-items: center;
		background-color: ${props => props.theme.palette.primary.main};
		color: white;
		padding: 10px;
`;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		wrapper: {
			position: "relative",
			overflow: "hidden",
			width: "100%",
			paddingTop: "56.25%"
		},
		responsiveIframe: {
			position: "absolute",
			top: "0",
			left: "0",
			bottom: "0",
			right: "0",
			width: "100%",
			height: "100%"
		}
	})
);

const CodeBlock: FC<{ value: string, language: string }> = ({ value, language }) => {
	return (
		<SyntaxHighlighter language={language} style={style}>
			{value}
		</SyntaxHighlighter>
	)
}

const FluidImage: FC<{ src: string, alt: string, fluidImages: any[] }> = ({ src, alt, fluidImages }) => {
	const image = fluidImages.find(element => element.base === src);
	return <Img fluid={image.childImageSharp.fluid} alt={alt} style={{ maxWidth: image.childImageSharp.fluid.presentationWidth, maxHeight: image.childImageSharp.fluid.presentationHeight }} />
}

const FixedImage: FC<{ src: string, alt: string, fixedImages: any[] }> = ({ src, alt, fixedImages }) => {
	const image = fixedImages.find(element => element.base === src);
	return <Img fixed={image.childImageSharp.fixed} alt={alt} />
}

const BlankLink: FC<{ href: string, children: string }> = ({ href, children }) => {
	if (href.match('http')) {
		return <a href={href} target="_blank" rel="nofollow noreferrer noopener">{children}</a>
	}
	return <a href={href}>{children}</a>
}

const CustomHeading: FC<{ level: number, children: string }> = ({ level, children }) => {
	const h = "h" + level;
	if (level == 2) {
		return (
			// @ts-ignore
			<Heading variant={h}>
				<AcUnitIcon style={{ marginRight: "0.25em" }} />
				{children}
			</Heading>
		)
	}
	return (
		// @ts-ignore
		<Typography variant={h}>
			{children}
		</Typography>
	)
}
const ShortCodeRenderer = ({ identifier, attributes }) => {
	const classes = useStyles();
	console.log(identifier)
	console.log(attributes)
	if (identifier.toLowerCase() == "youtube") {
		const src = "https://www.youtube.com/embed/" + attributes.id + "?origin=http://dreamer.cyou";
		return (
			<div className={classes.wrapper}>
				<iframe className={classes.responsiveIframe} width="640" height="360"
					src={src}></iframe>
			</div >
		);
	}
};

interface IProps {
	source: any
	fluidImages?: any
	fixedImages?: any
}

export const RawMarkdown = ({ source, fluidImages = null, fixedImages = null }: IProps) => {
	return (
		<ReactMarkdown
			source={source}
			escapeHtml={false}
			plugins={[
				[
					shortcodes,
					{
						startBlock: "[[",
						endBlock: "]]",
						inlineMode: true
					}
				]
			]}
			renderers={{
				code: CodeBlock,
				link: BlankLink,
				heading: CustomHeading,
				shortcode: ShortCodeRenderer,
				image: ({ src, alt }) => {
					if (fixedImages != null) {
						return FixedImage({ src, alt, fixedImages })
					} else {
						return FluidImage({ src, alt, fluidImages })
					}
				},
			}}
		/>
	)
}