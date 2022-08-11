import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faAngleUp, faBookmark } from "@fortawesome/free-solid-svg-icons"

export default function MealCard({ recipe }) {
    const [showInfo, setShowInfo] = useState(false)
    const [showInfop, setShowInfop] = useState(false)

    let time = recipe.cooking + recipe.preparation
    time = time > 59 ? `${Math.floor(time / 60)} ${Math.floor(time / 60) > 1 ? "hrs" : "hr"} ${time % 60} min` : time + " min"


    return (<div className="recipe-item" style={{ backgroundImage: `url(${recipe.picture})` }}>
        <button id="fav-button"><FontAwesomeIcon icon={faBookmark} /></button>
        <div id="anim-button">
            <div className="go-texts">
                <h4>Cook</h4>
                <div id="go-icon">
                    <FontAwesomeIcon style={{margin:"0"}} icon={faAngleDoubleRight} />
                </div>
            </div>
           

            <svg className=".svg">
                <circle className="circle" cx="43" cy="43" r="42"></circle>
            </svg>
        </div>

        <div onMouseOver={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
            className="item-text">
            <h3>{recipe.name}</h3>
            {showInfo || showInfop ? <p className="desc">{recipe.description}</p> : null}
            <div style={{ display: "flex" }}>
                <p>{`${recipe.ingredients.length} Ingredients`} | {time}</p>
                <FontAwesomeIcon onClick={() => setShowInfop(show => !show)} style={{ margin: "5px 20px", fontSize: "26px", cursor: "pointer" }} icon={faAngleUp} />
            </div>

        </div>
    </div>)
}