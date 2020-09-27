import React from "react"

import style from "./ingredients.module.scss"

const Ingredient = ({ name, quontity, unit }) => {
    return <span className={style.item}>{quontity} {unit} - {name}</span>
}

const Ingredients = ({ ingredients }) => {
    console.log(ingredients)
    return ingredients != null ? <div className={style.list}>
        {ingredients.map(ingredient => <Ingredient name={ingredient.name} quontity={ingredient.q} unit={ingredient.unit}/> )}
    </div> : <></>
}

export default Ingredients