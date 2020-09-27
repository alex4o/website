import React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import Ingredients from "../components/ingredients"
import SEO from "../components/seo"
import style from "./post.module.scss"

const BlogPostTemplate = ({ data, pageContext, location }) => {
	const post = data.markdownRemark
	const siteTitle = data.site.siteMetadata.title
	const { previous, next } = pageContext



	return (
		<Layout location={location} title={post.frontmatter.title} post={true}>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<article className={style.article}>
				<Ingredients ingredients={post.frontmatter.ingredients}></Ingredients>
				<section dangerouslySetInnerHTML={{ __html: post.html }} />
				<hr
					style={{
						// marginBottom: rhythm(1),
					}}
				/>
				<footer>
					{/* <Bio /> */}
				</footer>
				<header>
					<p
						style={{
							//   ...scale(-1 / 5),
							display: `block`,
							//   marginBottom: rhythm(1),
						}}
					>
						Posted on: {post.frontmatter.date}
					</p>
				</header>

				<nav>
					<ul
						style={{
							display: `flex`,
							flexWrap: `wrap`,
							justifyContent: `space-between`,
							listStyle: `none`,
							padding: 0,
						}}
					>
						<li>
							{previous && (
								<Link to={"/blog" + previous.fields.slug} rel="prev">
									← {previous.frontmatter.title}
								</Link>
							)}
						</li>
						<li>
							{next && (
								<Link to={"/blog" + next.fields.slug} rel="next">
									{next.frontmatter.title} →
								</Link>
							)}
						</li>
					</ul>
				</nav>
			</article>
		</Layout>
	)
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug }}) {
      id
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
		ingredients {
			name
			q
			unit
		}
      }
    }
  }
`
