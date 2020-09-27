import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

import styls from "./tags.module.scss"

const TagListPage = ({ data }) => {

	var tags = [
		...new Set(
			data.allMarkdownRemark.nodes
				.flatMap(node => node.fields.tags)
				.filter(tag => tag != null)
		)
	]

	return (<Layout title="A list of all tags">
		<div style={{ display: "flex", flexWrap: "wrap", marginLeft: "1em" }}>
			{tags.map(tag => <div className={styls.tag}><Link to={`/tags/${tag}`}><large>{tag}</large></Link></div>)}
		</div>
	</Layout>)
}

export default TagListPage

export const pageQuery = graphql`
{
	allMarkdownRemark {
		nodes {
			fields {
				tags
			}
		}
	}

}
`