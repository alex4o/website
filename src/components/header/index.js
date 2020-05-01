import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import style from "./header.module.scss"

const Header = ({ siteTitle }) => (
	<header className={style.header}>
		<div className={style.subHeader}>
			<h1 style={{ margin: 0 }}>
				<Link to="/blog" className={style.link}>
					{siteTitle}
				</Link>
			</h1>
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
