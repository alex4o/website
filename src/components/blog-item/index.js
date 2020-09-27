import React, { useState } from "react"
import style from "./blog-item.module.scss"
import { Link } from "gatsby"

const BlogItem = ({ id, title, slug, description, date, tags }) => {
    return (
        <article className={`${style.article} ${style.container}`} key={id}>
            <Link style={{ boxShadow: `none` }} to={"/blog/" + slug}>
                <header className={style.header}>
                    <h2>
                        {title}
                    </h2>
                </header>
            </Link>
            <hr />
            <section>
                <p
                    dangerouslySetInnerHTML={{
                        __html: description
                    }}
                />
            </section>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between"}}>
                {date ? <small>Who else but me, on {date}</small> : <></>}
                {tags.length != 0 ? <small>Tags: {tags.join(", ")}</small> : <></>}
            </div>
        </article>
    )
}

export default BlogItem