import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import style from "./header.module.scss"

const Title = ({ title }) => {
		return (	
			<h2 style={{ margin: 0, fontWeight: 300 }}>
				{title}
			</h2>
		)
}

const Header = ({ title }) => (
	<Link to="/blog" style={{ textDecoration: "none" }}>
		<header className={style.header}>
			<div className={style.subHeader}>
				<Title title={title} />
			</div>
		</header>
		<div className={style.loader} style={{ width: `${0}%` }}></div>
	</Link>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
