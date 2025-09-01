import { createRoot } from 'react-dom/client'
import "./main.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pagina404 from './404.jsx'
import Contacto from './Contacto.jsx'
import Home from './Home.jsx'
import SiteMaster from './SiteMaster.jsx'
import DogDetail from './components/dog/DogDetail.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            {/* GRUPOS DE RUTAS */}
            <Route path='/' element={<SiteMaster />}>
                <Route index element={<Home />} />
                <Route path='contacto' element={<Contacto />} />
                <Route path=':raza' element={<DogDetail/>}/>
            </Route>
            <Route path='*' element={<Pagina404 />} />
        </Routes>
    </BrowserRouter>
)
