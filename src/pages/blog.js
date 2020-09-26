import React, {useState} from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { useFlexSearch } from 'react-use-flexsearch'

import Layout from "../components/layout/"
import SEO from "../components/seo"
import SearchContext from "../context/search"

import style from "./blog.module.scss"

const Element = ({ id, title, slug, description, date }) => {
	return (
		<article className={`${style.article} ${style.container}`} key={id}>
			<header className={style.header}>
				<h2>
					<Link style={{ boxShadow: `none` }} to={"/blog/" + slug}>
						{title}
					</Link>
				</h2>
				<hr/>
				{ date != null ? <small>Who else but me, on {date}</small> : <></> }
			</header>
			<section>
				<p
					dangerouslySetInnerHTML={{
						__html: description
					}}
				/>
			</section>
		</article>
	)
}

const BlogArticlePage = ({ data, navigation }) => {
	const [query, setQuery] = useState(null)
	const results = useFlexSearch(query, data.localSearchPosts.index, data.localSearchPosts.store) 
    const posts = data.allMarkdownRemark.edges
	console.log(results, query, data.localSearchPosts)


	const elements = posts.map(({ node }) => ({
		id: node.id,
		title: node.frontmatter.title || node.fields.slug,
		slug: node.fields.slug,
		description: node.frontmatter.description || node.excerpt,
		date: node.frontmatter.date
	}))

    return (
        <Layout title="A blog exploring the magic of wired hardware and software." search={setQuery}>
            <SEO title="Blog" />
			{(results.length == 0 ? elements : results).map((element) => 
				<Element {...element}></Element> )}
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
          }
        }
      }
    }
  }
`
