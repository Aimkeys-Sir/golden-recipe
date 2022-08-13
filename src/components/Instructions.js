import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"


export default function Instructions({ recipe }) {
    const [select,setSelect]=useState(0)
    return (<div className="recipe-page">
        <div className="top-bar">
            <FontAwesomeIcon className="icons" icon={faArrowLeft} />
            <h3>{recipe.name}</h3>
            <FontAwesomeIcon className="icons" icon={faEllipsis} />
        </div>
        <div className="recipe-pic" style={{ background: `url(${recipe.picture})` }}>
        </div>
        <div>
            <ol className="list">
                {recipe.instructions.map((inst, index) => {
                    return <li onClick={()=>setSelect(index)} className={`${select===index?"selected":""}`}>{inst}</li>
                })}
            </ol>
        </div>
    </div>)
}