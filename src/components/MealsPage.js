import { useState } from "react";
import "./meal.css"
import MealCard from "./MealCard";

export default function MealsPage({ recipes, categories,onRecipeClick }) {
    const [selected,setSelected]=useState("All")
    const cats = ["All", ...categories]

    function handleCatOnClick(e){
        setSelected(e.target.textContent)
    }
    const filterRecipes=recipes.filter(recipe=>selected==="All"?true:recipe.category.toLowerCase()===selected.toLowerCase())
    return (<div className="meal-page">
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 25px" }}>
                <form>
                    <img alt="search" id="search" src="search.svg" />
                    <input id="search-input" type={"text"} placeholder="Search a recipe"
                    />
                </form>
                <button id="switch"><img alt="slider" src="sliders.svg" /></button>
            </div>
        </div>
        <div className="categories">
            {/* Categories */}
            {cats.map((cat,index) => (
                <div key={index} onClick={handleCatOnClick} className={cat===selected?"cat cat-active":"cat"}>
                    {cat}
                </div>
            ))}
        </div>
        <div className="cards">
            {filterRecipes.map(recipe => {
                return <MealCard key={recipe.id} onRecipeClick={onRecipeClick} recipe={recipe}/>
            })}

        </div>
    </div>)
}