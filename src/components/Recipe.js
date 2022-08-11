import { faArrowLeft, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./recipe.css"


export default function Recipe({ recipes }) {
    return (<div className="recipe-page">
        <div className="top-bar">
            <FontAwesomeIcon className="icons" icon={faArrowLeft} />
            <h3>{recipes[0].name}</h3>
            <FontAwesomeIcon className="icons" icon={faEllipsis} />
        </div>
        <div className="recipe-pic" style={{ background: `url(${recipes[0].picture})` }}>
        </div>
        <div className="ingredients">
            <h4>Ingredients ({recipes[0].ingredients.length})</h4>
            <div style={{ background: "#52BF6C" }}>
                <p>{recipes[0].serves} servings</p>
            </div>

        </div>
        <table>
            <tbody>
                {recipes[0].ingredients.map(item=>{
                    const ing=Object.keys(item)[0]
                    return (<tr style={{backgroundColor:"${}"}}>
                        <td>{ing}</td>
                        <td>{item[ing][1]}  |  {item[ing][0]}g</td>
                    </tr>)
                })}
            </tbody>
        </table>
        <button>Let's cook! {"arrow"}</button>
    </div>)
}