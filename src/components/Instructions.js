import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft,faEllipsis} from "@fortawesome/free-solid-svg-icons"


export default function Instructions({recipe}){
    return (<div className="recipe-page">
        <div className="top-bar">
                <FontAwesomeIcon className="icons" icon={faArrowLeft} />
                <h3>{recipe.name}</h3>
                <FontAwesomeIcon className="icons" icon={faEllipsis} />
            </div>
        <div className="recipe-pic" style={{ background: `url(${recipe.picture})` }}>
            </div>
            <div>
                <ol>
                    {recipe.instructions.map(inst=><li>{inst}</li>)}
                </ol>
            </div>
    </div>)
}