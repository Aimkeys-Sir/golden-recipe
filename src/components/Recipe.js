import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
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
        <div>
            {/* picture/video */}
            <img />
        </div>
        <div>
            <h4>Ingridients</h4>
            <select>servings</select>
        </div>
        <div>
            {/* Ingridients.map */}
        </div>
        <button>Let's cook! {"arrow"}</button>
    </div>)
}