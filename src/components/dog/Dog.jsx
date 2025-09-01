import "./Dog.css"

function Dog({ raza }) {
    return (
        <div className="col-12 col-lg-2 m-1 CardDog">
            <div className="row">
                <div className="col-12">
                    <i class="fa-solid fa-paw"></i>
                </div>
                <div className="col-12">
                    <h7>{raza.toUpperCase()}</h7>
                </div>
            </div>
        </div>
    )
}

export default Dog
