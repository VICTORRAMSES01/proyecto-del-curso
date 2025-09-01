import { Outlet } from "react-router-dom"
import Menu from "./components/menu/Menu"

function SiteMaster() {
    return (
        <>
            <Menu />
            <Outlet />
        </>
    )
}

export default SiteMaster
