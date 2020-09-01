import React, { FC } from "react"
import ReactMarkdown from "react-markdown"

import Img from "gatsby-image"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import style from "react-syntax-highlighter/dist/esm/styles/prism/solarizedlight"

export const CodeBlock = ({ value, language }) => {
	return (
		<SyntaxHighlighter language={language} style={style}>
			{value}
		</SyntaxHighlighter>
	)
}

export const RawMarkdown: FC<{ source, contentImages }> = ({ source, contentImages }) => {
	return (
		<ReactMarkdown
			source={source}
			escapeHtml={false}
			renderers={{ 
				code: CodeBlock,
				image: ({ src, alt }) => {
					const image = contentImages.find(element => element.base === src);
					console.log(image)
					return <Img fluid={image.childImageSharp.fluid} alt={alt} />
				},
			 }}
		/>
	)
}