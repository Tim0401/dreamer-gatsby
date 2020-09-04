import React, { FC } from "react"
import ReactMarkdown from "react-markdown"
import { Typography } from "@material-ui/core";
import styled from "styled-components";

import Img from "gatsby-image"
// @ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
// @ts-ignore
import style from "react-syntax-highlighter/dist/esm/styles/prism/solarizedlight"

import AcUnitIcon from '@material-ui/icons/AcUnit'

const Heading = styled(Typography)`
	
		display: flex;
		align-items: center;
		background-color: ${props => props.theme.palette.primary.main};
		color: white;
		padding: 10px;
`;

export const CodeBlock: FC<{ value: string, language: string }> = ({ value, language }) => {
	return (
		<SyntaxHighlighter language={language} style={style}>
			{value}
		</SyntaxHighlighter>
	)
}

export const FluidImage: FC<{ src: string, alt: string, fluidImages: any[] }> = ({ src, alt, fluidImages }) => {
	const image = fluidImages.find(element => element.base === src);
	return <Img fluid={image.childImageSharp.fluid} alt={alt} style={{ maxWidth: image.childImageSharp.fluid.presentationWidth, maxHeight: image.childImageSharp.fluid.presentationHeight }} />
}

export const FixedImage: FC<{ src: string, alt: string, fixedImages: any[] }> = ({ src, alt, fixedImages }) => {
	const image = fixedImages.find(element => element.base === src);
	return <Img fixed={image.childImageSharp.fixed} alt={alt} />
}

export const BlankLink: FC<{ href: string, children: string }> = ({ href, children }) => {
	if (href.match('http')) {
		return <a href={href} target="_blank" rel="nofollow noreferrer noopener">{children}</a>
	}
	return <a href={href}>{children}</a>
}

export const CustomHeading: FC<{ level: number, children: string }> = ({ level, children }) => {
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
			renderers={{
				code: CodeBlock,
				link: BlankLink,
				heading: CustomHeading,
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