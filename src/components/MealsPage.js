import "./meal.css"
import MealCard from "./MealCard";

export default function MealsPage({ recipes, categories }) {
    const cats = ["All", ...categories]
    return (<div className="meal-page">
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 25px" }}>
                <form>
                    <img alt="search" id="search" src="search.svg" />
                    <input type={"text"} placeholder="Search a recipe"
                    />
                </form>
                <button id="switch"><img alt="slider" src="sliders.svg" /></button>
            </div>
        </div>
        <div className="categories">
            {/* Categories */}
            {cats.map(cat => (
                <div className="cat">
                    {cat}
                </div>
            ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {recipes.map(recipe => {
                return <MealCard recipe={recipe}/>
            })}

        </div>
    </div>)
}