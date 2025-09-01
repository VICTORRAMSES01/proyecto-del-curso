import { Link } from "react-router-dom"
import "./Dog.css"

function Dog({ raza }) {
    return (
        <>
            <Link className="col-12 col-lg-2 m-1 CardDog" to={`/${raza}`}>
                <div className="row">
                    <div className="col-12">
                        <i className="fa-solid fa-paw"></i>
                    </div>
                    <div className="col-12">
                        <h5>{raza.toUpperCase()}</h5>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Dog
