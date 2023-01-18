import { Outlet, Route } from "react-router-dom"
import { Menu } from "../menu/Menu"
import {Orders } from "../orders/Orders"
import { Routes } from "react-router-dom"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>House of Tacos</h1>
                    <div> The best place to get street tacos in town. </div>
                    <Outlet />
                </>
            }>
                <Route path="menu" element={<Menu />} />
                <Route path="orders" element={<Orders />} />
            </Route>
        </Routes>
    )
}