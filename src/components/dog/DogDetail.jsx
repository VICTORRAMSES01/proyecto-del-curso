import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function DogDetail() {

    const UrlDetail = import.meta.env.VITE_API_URL_DETAIL
    const [img, setImg] = useState()
    const params = useParams()

    useEffect(() => {
        //const fullUrl = `${UrlDetail}`+`${params.raza}/images`
        console.log("https://dog.ceo/api/breed/hound/images/random")
        axios.get("https://dog.ceo/api/breed/hound/images/random")
            .then((data) => { setImg(message.data.message) })
            .catch(() => { console.error("Error al consultar el API.") })
    }, []);

    if (!img) return (
        <>
            <div className="row p-1">
                <div className="col-12 bg-dark">
                    <span>Cargando, espera un momento.</span>
                </div>
            </div>
        </>
    )
    else {
        return (
            <>
            <div className="row">
                <div className="col-12">
                    <img src={img} alt={params.raza} />
                </div>
            </div>
                <h1>Soy el perrito {params.raza}</h1>
            </>

        )
    }
}

export default DogDetail