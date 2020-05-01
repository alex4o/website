import React from "react"
import { Link } from "gatsby"

import style from "./button.module.scss"

console.log(style)

const Button = ({ children, ...other }) => (
	<section className={style.linkButton}>
		<Link {...other}>
			<span className={style.text}>{children}</span>
			<span className={style.line + " " + style.Right}></span>
			<span className={style.line + " " + style.Top}></span>
			<span className={style.line + " " + style.Left}></span>
			<span className={style.line + " " + style.Bottom}></span>
		</Link>
	</section>
)

export default Button
