import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./home.css"

export default function HomePage() {
    return (<div className="home">
        <div className="home-text">
            <h1>The cooking experience</h1>
            <p>Let's make your favorite dish golden and delicious!</p>
        </div>
        <div className="go">
            <div className="go-circle">
                <FontAwesomeIcon className="angles" icon={faAnglesRight}/>
            </div>
            <h3>Let's cook!</h3>
        </div>
    </div>)
}