import { faCheckCircle, faListCheck, faPenToSquare, faSave, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import "./newform.css"


export default function NewForm({ categories }) {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        description: "",
        ingridients: [],
        instructions: [],
        preparation: 0,
        cooking: 0,
        serves: 2,
        picture: ""
    })
    const [ingredient, setIngredient] = useState({
        ingName: "",
        amount: 0,
        amountdesc: "",
        edit: false
    })
    const [activeIng, setActiveIng] = useState("")

    const [instruction, setInstruction] = useState({ inst: "", edit: false })
    const [activeInst, setActiveInst] = useState("")
    const [test, setTest] = useState("")

    function handleIngredient(e) {
        setIngredient(ing => ({ ...ing, [e.target.name]: e.target.value }))
    }

    function handleIngSubmit(e) {
        e.preventDefault()
        if (ingredient.ingName === "") return
        if (ingredient.amount === 0 && ingredient.amountdesc === "") return
        if (ingredient.edit) {
            setFormData(data => ({
                ...data, ingridients: [...data.ingridients.map(ing => {
                    if (ing.ingName === activeIng) return ingredient
                    else return ing
                })]
            }))
        } else {
            setFormData(data => ({ ...data, ingridients: [...data.ingridients, ingredient] }))
        }


        setIngredient(ing => ({
            ...ing,
            ingName: "",
            amount: 0,
            amountdesc: "",
            edit: false
        }))
    }
    function handleInstructionSubmit(e) {
        e.preventDefault()
        if (instruction.inst === "") return
        if (instruction.edit) {
            setFormData(data => ({
                ...data, instructions: [...data.instructions.map(instr => {
                    console.log(instr);
                    if (instr === activeInst) { return instruction.inst }
                    else { return instr }
                })]
            }))
        } else {
            setFormData(data => ({ ...data, instructions: [...data.instructions, instruction.inst] }))
        }
        setInstruction({ inst: "", edit: false })
    }

    function handleTimesOnChange(e) {
        setFormData(data => ({ ...data, [e.target.name]: e.target.value }))
    }
    function handleSave(){
        console.log(formData);
    }
    // jsx starts here
    return (
    <div className="newform">
        <h2>Add your custom recipe</h2>
        <form style={{ width: "200px" }} className="for-new">
            <input value={formData.name} onChange={(e) => setFormData(data => ({ ...data, name: e.target.value }))} type={"text"} placeholder="Recipe name" />
        </form>
        <form>

            <label htmlFor="category">Category </label>
            <select 
            onChange={(e)=>setFormData(data=>({...data,category:e.target.value}))} id="category"
            >
                {categories.map(cat => {
                    return <option value={cat}>{cat}</option>
                })}
            </select>
            <h4>Description</h4>
            <textarea id="descr" 
            value={formData.description}
            onChange={(e)=>setFormData(data=>({...data,description:e.target.value}))}
             placeholder="Tell us more about your recipe"></textarea>
            <div>
                <ul>
                </ul>
            </div>
        </form>
        <div>
            <div style={{ display: "flex" }}>
                <FontAwesomeIcon style={{ margin: "8px 2px" }} icon={faListCheck} />
                <h4>Ingredients</h4>

            </div>

            {/* display new ingridients */}
            <ol>
                {formData.ingridients.map((ing, index) => {
                    function handleIngEdit() {
                        setActiveIng(ing.ingName)
                        setIngredient({ ...ing, edit: true })
                    }
                    return (<li key={index}>{ing.ingName} | {ing.amount === 0 ? "" : ing.amount + "g"} {ing.amountdesc ? "| " + ing.amountdesc : ""}
                        <FontAwesomeIcon onClick={handleIngEdit} className="m-icon" icon={faPenToSquare} />
                        <FontAwesomeIcon
                            onClick={() => setFormData(data => ({ ...data, ingridients: [...data.ingridients.filter(ingr => ingr.ingName !== ing.ingName)] }))}
                            className="m-icon" icon={faTrashCan} />
                    </li>)
                })}
            </ol>
        </div>
        {/* new ingridients */}
        <form onSubmit={handleIngSubmit} className="for-new">
            <button><FontAwesomeIcon icon={faCheckCircle} /></button>
            {ingredient.edit ? <FontAwesomeIcon icon={faPenToSquare} /> : null}
            <input name="ingName" onChange={handleIngredient}
                value={ingredient.ingName} style={{ width: "150px" }}
                id="ingredient" type={"text"}
                placeholder="Add ingredient" />
            <label>Grams:</label>
            <input name="amount" min={"0"} onChange={handleIngredient} value={ingredient.amount} type={"number"} max="3000" />
            <input name="amountdesc" onChange={handleIngredient} value={ingredient.amountdesc} type={"text"} placeholder="e.g 3 cups" />
        </form>
        <div>
            <h4>How to cook?</h4>
            {/* display new instructions */}
            <ol>
                {formData.instructions.map((instr, index) => {
                    function handleInstEditOnClick() {
                        setInstruction(instruct => ({ ...instruct, inst: instr, edit: true }))
                        setActiveInst(instr)
                    }
                    return (<li key={index}>{instr}
                        <FontAwesomeIcon onClick={handleInstEditOnClick} className="m-icon" icon={faPenToSquare} />
                        <FontAwesomeIcon
                            onClick={() => setFormData(data => ({ ...data, instructions: [...data.instructions.filter(inst => inst !== instr)] }))}
                            className="m-icon" icon={faTrashCan} />
                    </li>)
                })}
            </ol>
            {/* new instruction */}
            <form onSubmit={handleInstructionSubmit} className="for-new">
                <button><FontAwesomeIcon icon={faCheckCircle} /></button>
                {instruction.edit ? <FontAwesomeIcon icon={faPenToSquare} /> : null}
                <input value={instruction.inst}
                    onChange={(e) => setInstruction(instruct => ({ ...instruct, inst: e.target.value }))}
                    type={"text"} placeholder="New instruction" />
            </form>
            <h4>Time taken in minutes</h4>
            <form style={{ display: "flex" }}>
                <label >Preparation </label>
                <input name="preparation"
                    onChange={handleTimesOnChange}
                    type={"number"} value={formData.preparation} />
                <label >Cooking </label>
                <input name="cooking"
                    onChange={handleTimesOnChange}
                    type={"number"} value={formData.cooking} />
                <label>Servings </label>
                <input name="serves"
                    onChange={handleTimesOnChange}
                    type={"number"} min="1" value={formData.serves} />
            </form>
            <form onSubmit={(e) => e.preventDefault()} className="for-new">
                <input type={"text"}
                    placeholder={"Paste picture url"}
                    value={formData.picture}
                    onChange={(e) => setFormData(data => ({ ...data, picture:e.target.value}))} />
            </form>

            <div onClick={handleSave} className="save">
                <h3>Save</h3>
                <FontAwesomeIcon icon={faSave} />
            </div>
        </div>
    </div>)
}