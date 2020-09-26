/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import SearchContext from "../../context/search"
import Header from "../header/"
import style from "./layout.module.scss"

import "../../styles/main.scss"



const Layout = ({ children, title, post, search }) => {
	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
	return (
		<div className={style.layout}>
			<div className={style.page}>
				<main>		
					<Header title={title} siteTitle={data.site.siteMetadata.title} />
					<header className={style.navigation}>
						<Link to="/blog">Blog</Link>
						<Link to="/">Home</Link>
						<Link to="/tags">Tags</Link>
						{  search != null ? <input tabIndex="10" type="text" onChange={(e) => { search(e.target.value) }} autoComplete="off" size="18" placeholder="search"/> : <></> }
					</header>
				{children}
				</main>
				{/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
			</div>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
