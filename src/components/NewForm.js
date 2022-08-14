import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import "./newform.css"


export default function NewForm ({ categories }) {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        description: "",
        ingridients: [],
        instructions: [],
        preparation: 0,
        cooking: 0,
        serves: 2
    })
    const [ingredient, setIngredient] = useState({
        ingName: "",
        amount: 0,
        amountdesc: ""
    })

    const [instruction, setInstruction] = useState("")

    const [test, setTest] = useState("")

    function handleIngredient(e) {
        setIngredient(ing => ({ ...ing, [e.target.name]: e.target.value }))
    }

    function handleIngSubmit(e) {
        e.preventDefault()
        setFormData(data => ({ ...data, ingridients: [ingredient] }))

        setIngredient(ing => ({
            ...ing,
            ingName: "",
            amount: 0,
            amountdesc: ""
        }))
    }
    function handleInstructionSubmit(e) {
        e.preventDefault()
        setFormData(data => ({ ...data, instructions: [instruction] }))
    }
    function handleTest(e) {
        setTest(e.target.value)
    }
    console.log(formData);
    return (<div className="newform">
        <h2>Add your custom recipe</h2>
        <form style={{ width: "200px" }} className="for-new">
            <input value={test} onChange={handleTest} type={"text"} placeholder="Recipe name" />
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
                {formData.ingridients.map(ing => {
                    return <li>{ing.ingName} | {ing.amount}g | {ing.amountdesc}</li>
                })}
            </ul>
        </div>
        <form onSubmit={handleIngSubmit} className="for-new">
            <button><FontAwesomeIcon icon={faCheckCircle} /></button>
            <input name="ingName" onChange={handleIngredient}
                value={ingredient.ingName} style={{ width: "150px" }}
                id="ingredient" type={"text"}
                placeholder="Add ingredient" />
            <label>Grams:</label>
            <input name="amount" onChange={handleIngredient} value={ingredient.amount} type={"number"} max="3000" />
            <input name="amountdesc" onChange={handleIngredient} value={ingredient.amountdesc} type={"text"} placeholder="e.g 3 cups" />
        </form>
        <div>
            <h4>How to cook?</h4>
            <ul>
                {formData.instructions.map((instr, index) => <li key={index}>{instr}</li>)}
            </ul>
            <form onSubmit={handleInstructionSubmit} className="for-new">
                <button><FontAwesomeIcon icon={faCheckCircle} /></button>
                <input value={instruction} onChange={(e) => setInstruction(e.target.value)} type={"text"} placeholder="New instruction" />
            </form>
            <h4>Time taken in minutes</h4>
            <form style={{ display: "flex" }}>
                <label >Preparation </label>
                <input
                    OnChange={(e) => setFormData(data => ({ ...data, [e.target.name]: e.target.value }))} type={"number"} value={formData.preparation} />
                <label >Cooking </label>
                <input
                    OnChange={(e) => setFormData(data => ({ ...data, [e.target.name]: e.target.value }))} type={"number"} value={formData.cooking} />
                <label>Servings </label>
                <input
                    OnChange={(e) => setFormData(data => ({ ...data, [e.target.name]: e.target.value }))} type={"number"} min="0" value={formData.serves} />
            </form>
            <form className="for-new">
                <input type={"text"}
                    placeholder={"Paste picture url"} />
            </form>
        </div>
    </div>)
}