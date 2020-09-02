import React, { FC } from "react"
import ReactMarkdown from "react-markdown"

import Img from "gatsby-image"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import style from "react-syntax-highlighter/dist/esm/styles/prism/solarizedlight"

export const CodeBlock: FC<{ value: string, language: string }>  = ({ value, language }) => {
	return (
		<SyntaxHighlighter language={language} style={style}>
			{value}
		</SyntaxHighlighter>
	)
}

export const FluidImage: FC<{ src: string, alt: string, fluidImages: any[] }> = ({ src, alt, fluidImages }) => {
	const image = fluidImages.find(element => element.base === src);
	console.log(image)
	return <Img fluid={image.childImageSharp.fluid} alt={alt} style={{ maxWidth: image.childImageSharp.fluid.presentationWidth, maxHeight: image.childImageSharp.fluid.presentationHeight }} />
}

export const FixedImage: FC< { src: string, alt: string, fixedImages: any[] } >   = ({ src, alt, fixedImages }) => {
	const image = fixedImages.find(element => element.base === src);
	console.log(image)
	return <Img fixed={image.childImageSharp.fixed} alt={alt} />
}

export const BlankLink: FC<{ href: string, children: string }> = ({ href, children }) => {
	if (href.match('http')) {
		return <a href={href} target="_blank" rel="nofollow noreferrer noopener">{children}</a>
	}
	return <a href={href}>{children}</a>
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
				image: ({ src, alt }) => {
					if (fixedImages != null) {
						return FixedImage({ src, alt, fixedImages })
					} else {
						return FluidImage({ src, alt, fluidImages })
					}
				},
				link: BlankLink
			}}
		/>
	)
}