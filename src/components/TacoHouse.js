import { Route, Routes } from "react-router-dom"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./nav/NavBar"


export const TacoHouse = () => {
    return (
        <Routes>
            <Route path="*" element={
                <>
                <NavBar />
                <ApplicationViews />
                </>
            } />
        </Routes>
    )
}