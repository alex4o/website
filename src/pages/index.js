import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from "../components/button/"

import Logo from "../assets/logo_animated.svg"

import style from "./index.module.scss"

console.log(style)

const IndexPage = () => {

  return (
    <main className={style.main}>
      <SEO title="Home" />
      <Logo className={style.logo}/>
      <h1>Aleksandar Bonin</h1>
      <div className={style.navigation}>
        <Button to="/resume">
          Resume
        </Button>
        <Button to="/blog">
          Blog
        </Button>
      </div>
    </main>
  )
}

export default IndexPage
