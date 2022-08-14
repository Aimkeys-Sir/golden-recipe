import { faAdd, faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import "./newform.css"


export default function ({ categories }) {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        description: "",
        ingridients: [],
        instructions: [],
        preparation:0,
        cooking:0,
        serves:2
    })
    return (<div className="newform">
        <h2>Add your custom recipe</h2>
        <form style={{width:"200px"}} className="for-new">
            <input type={"text"} placeholder="Recipe name" />
        </form>
        <form>
            
            <label htmlFor="category">Category </label>
            <select id="category">
                {categories.map(cat => {
                    return <option value={cat}>{cat}</option>
                })}
            </select>
            <h4>Description</h4>
            <textarea id="descr" placeholder="Tell us more about your recipe"> </textarea>
            <div>
                <ul>
                </ul>
            </div>
        </form>
        <div>
            <h4>Ingredients</h4>
            <ul>
              {formData.ingridients.map(ing=>{
                return <li>{ing}</li>
              })}
            </ul>
        </div>
        <form className="for-new">
            <button><FontAwesomeIcon icon={faCheckCircle} /></button>
            <input style={{width:"150px"}} id="ingredient" type={"text"} placeholder="Add ingredient" />
            <label>Grams:</label>
            <input type={"number"} max="200" value="4"/>
            <input type={"text"} placeholder="e.g 3 cups"/>
        </form>
        <div>
            <h4>How to cook?</h4>
            <ul>
        
            </ul>
            <form className="for-new">
                <button><FontAwesomeIcon icon={faCheckCircle}/></button>
                <input type={"text"} placeholder="New instruction" />
            </form>
            <h4>Time taken</h4>
            <form style={{display:"flex"}}>
                <label htmlFor="prep">Preparation </label>
               <input type={"number"} value={"0"}/> 
               <label htmlFor="prep">Cooking </label>
               <input type={"number"} value={"0"}/> 
               <label htmlFor="prep">Servings </label>
               <input type={"number"} value={"0"} /> 
            </form>
            <form className="for-new">
                <input type={"text"} placeholder={"paste picture url"} />
            </form>
        </div>
    </div>)
}