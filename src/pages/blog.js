import React, { useState } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { useFlexSearch } from 'react-use-flexsearch'

import Layout from "../components/layout/"
import SEO from "../components/seo"
import SearchContext from "../context/search"
import BlogItem from "../components/blog-item/"
import Fuse from 'fuse.js'



let fuse = null
const BlogArticlePage = ({ data, navigation }) => {
	const [query, setQuery] = useState(null)
	const results = useFlexSearch(query, data.localSearchPosts.index, data.localSearchPosts.store)
	console.log(data)

	let articles = Object.values(data.localSearchPosts.store)

	if (fuse == null){
		fuse = new Fuse(articles, {   includeMatches: true, isCaseSensitive: false, includeScore: true, keys: ["tags", "title"] })
	}

	const posts = data.allMarkdownRemark.edges
	console.log(results, fuse, fuse.search(query || ""), query)


	const elements = posts.filter(({ node }) => !node.frontmatter.hidden).map(({ node }) => ({
		id: node.id,
		title: node.frontmatter.title || node.fields.slug,
		slug: node.fields.slug,
		description: node.frontmatter.description || node.excerpt,
		date: node.frontmatter.date,
		tags: (node.frontmatter.tags || [])
	}))

	return (
		<Layout title="A blog exploring the magic of wired hardware and software." search={setQuery}>
			<SEO title="Blog" />
			{(results.length == 0 ? elements : results).map((element) =>
				<BlogItem {...element}></BlogItem>)}
		</Layout>
	)
}

export default BlogArticlePage

export const pageQuery = graphql`
  query {
	localSearchPosts {
	  index
	  store
	}
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
			tags
			hidden
          }
        }
      }
    }
  }
`
