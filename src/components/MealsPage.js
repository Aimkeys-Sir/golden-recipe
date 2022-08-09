import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons"
import "./meal.css"

export default function MealsPage({ recipes, categories }) {
    const cats = ["All", ...categories]
    return (<div className="meal-page">
        {/* <h3>Find your best recipe</h3> */}
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
                let time=recipe.cooking +recipe.preparation
                time= time>59?`${Math.floor(time/60)} ${Math.floor(time/60)>1?"hrs":"hr"} ${time%60} min`:time + "min"
                return (<div className="recipe-item" style={{ backgroundImage: `url(${recipe.picture})` }}>
                    <button id="fav-button"><FontAwesomeIcon icon={faBookmark}/></button>
                    <div className="item-text">
                    <h3>{recipe.name}</h3>
                    <p>{`${recipe.ingredients.length} Ingredients`} | {time}</p>
                    </div>
                    
                </div>)
            })}

        </div>
    </div>)
}