import { faArrowLeft, faArrowRight, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import "./recipe.css"


export default function Recipe({ recipe }) {
    const history=useHistory()
    function handleInstructionsClick(){
        history.push(`/recipes/${recipe.name.split(" ")[0]}/instructions`)
    }
    return (
        <div className="recipe-page">
            <div className="top-bar">
                <FontAwesomeIcon className="icons" icon={faArrowLeft} />
                <h3>{recipe.name}</h3>
                <FontAwesomeIcon className="icons" icon={faEllipsis} />
            </div>
            <div className="recipe-pic" style={{ background: `url(${recipe.picture})` }}>
            </div>
            <div className="ingredients">
                {/* <h4>Ingredients ({recipe.ingredients.length})</h4> */}
                {/* <form className="servings">
                    <label htmlFor="serves"> Servings:</label>
                    <input min="1" max="10" value={recipe.serves} id="serves" type={"number"} />
                </form> */}

            </div>
            <table id="ing-table">
                <thead>
                    <tr>
                        <th style={{borderRadius:"15px 0 0"}}>Serial</th>
                        <th>Ingredients</th>
                        <th>Amount</th>
                        <th>Grams</th>
                        <th style={{borderRadius:"0 15px 0 0"}}>Check</th>
                    </tr>
                </thead>
                <tbody>
                    {recipe.ingredients.map((item, index) => {
                        const isEven = index % 2 === 0 ? true : false
                        return (<tr style={{ backgroundColor: `${isEven ? "#dEdEdE" : "fffff"}` }}>
                            <td>{index + 1}</td>
                            <td>{item.ingName}</td>
                            <td>{item.amount[1]}</td>
                            <td>{item.amount[0]}g</td>
                            <input value={true} className="check" type="checkbox" />
                        </tr>)
                    })}
                </tbody>
            </table>
            <div onClick={handleInstructionsClick} className="cook-button">
                <h3>Let's cook!</h3>
                <FontAwesomeIcon id="right" icon={faArrowRight}/>
            </div>
        </div>
    )
}