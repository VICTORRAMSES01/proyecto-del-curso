import { useState, useEffect } from "react";
import Dog from "./Dog";
import axios from "axios";

function DogsGrid() {

    const ApiUrl = import.meta.env.VITE_API_URL
    const [razaPerro, setRazaPerro] = useState()

    useEffect(() => {
        axios.get(`${ApiUrl}breeds/list/all`)
            .then((data) => { setRazaPerro(data.data.message); })
            .catch(() => { console.error("Error al consultar el API."); });
    }, []);

    if (!razaPerro) return (
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
                <div className="row justify-content-center p-1">
                    {Object.entries(razaPerro).map(([raza, subrazas]) => (
                        <Dog raza={raza} />
                    ))}
                </div>
            </>
        )
    }
}

export default DogsGrid
