import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout/"
import SEO from "../components/seo"

const SecondPage = ({ data, navigation }) => {
    
    const posts = data.allMarkdownRemark.edges
    return (
        <Layout>
            <SEO title="Blog" />
            
            {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                    <article key={node.id}>
                        <header>
                            <h3
                                style={{
                                }}
                            >
                                <Link style={{ boxShadow: `none` }} to={"/blog/" + node.id}>
                                    {title}
                                </Link>
                            </h3>
                            <small>{node.frontmatter.date}</small>
                        </header>
                        <section>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: node.frontmatter.description || node.excerpt,
                                }}
                            />
                        </section>
                    </article>
                )
            })}
        </Layout>
    )
}

export default SecondPage

export const pageQuery = graphql`
  query {
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