import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/"
import SEO from "../components/seo"

import style from "./about.module.scss"

const SecondPage = () => (
	<Layout title="About me">
		<article className={style.container}>
			<SEO title="Resume" />
			<p>
				I am a Software Hacker working on magical things. Welcome to my website.
			</p>
		</article>
	</Layout>
)

export default SecondPage
