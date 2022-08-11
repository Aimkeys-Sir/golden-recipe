import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import "./home.css"

export default function HomePage() {
    const [anim,setAnim]=useState(false)
    const history=useHistory()
    function handleGoclick(){
        setAnim(true)
        setTimeout(()=>{
            setAnim(false)
            history.push("/recipes")
        },500)
    }
    return (<div className="home">
        <div  className="home-text">
            <h1>The cooking experience</h1>
            <p>Let's make your favorite dish golden and delicious!</p>
        </div>
        <div onClick={handleGoclick} 
        onMouseOver={()=>setAnim(true)} 
        onMouseLeave={()=>setAnim(false)} className="go">
            <div  className={`go-circle ${anim?"anim":""}`}>
                <FontAwesomeIcon className="angles" icon={faAnglesRight}/>
            </div>
            <h3 style={{transition:"1s"}} className={anim?"anim-h3":""}>Let's cook!</h3>
        </div>
    </div>)
}