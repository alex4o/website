import React, { useState } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { useFlexSearch } from 'react-use-flexsearch'

import Layout from "../components/layout/"
import SEO from "../components/seo"
import SearchContext from "../context/search"

import BlogItem from "../components/blog-item"

const TagTemplate = ({ data, location, pageContext }) => {

    const [query, setQuery] = useState(null)
    console.log(data, location, BlogItem)
    const posts = data.allMarkdownRemark.nodes
    // console.log(results, query, data.localSearchPosts)


    const elements = posts.map((node) => ({
        id: node.id,
        title: node.frontmatter.title || node.fields.slug,
        slug: node.fields.slug,
        description: node.frontmatter.description || node.excerpt,
        date: node.frontmatter.date,
        tags: (node.frontmatter.tags || [])
    }))

    return (
        <Layout title="A blog exploring the magic of wired hardware and software.">
            <SEO title="Blog" />
            {elements.map((element) =>
                <BlogItem {...element}></BlogItem>)}
        </Layout>
    )
}

export default TagTemplate

export const pageQuery = graphql`
  query BlogPostByTag($tag: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { fields: { tags: { in: [$tag] }}}) {
      nodes {
        id
        excerpt(pruneLength: 160)
        fields {
            slug
        }
        html
        frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
            description
        }
      }
    }
  }
`
