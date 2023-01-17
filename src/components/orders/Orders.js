import { useEffect, useState } from "react"
import { Order } from "./Order"


export const Orders = () => {
    const [orders, setOrders] = useState([])
    //fetch all the orders
    //display all the orders

    useEffect(() => {
        fetch("http://localhost:8088/orders")
        .then((ordersData) => ordersData.json())
        .then((ordersArr) => setOrders(ordersArr))
    }, [])

    const deleteOrder = (orderId) => {
        fetch(`http://localhost:8088/orders/${orderId}`, {
            method: "DELETE"
        })
        .then(() => {
            fetch("http://localhost:8088/orders")
            .then((ordersData) => ordersData.json())
            .then((ordersArr) => setOrders(ordersArr))
        })
    }

    return (
        <>
        <h2>These are the Orders</h2>
        <section className="orders__list">
            <ul>
                {orders.map((orderObj) => <Order key={orderObj.id}
                order={orderObj} deleteOrder={deleteOrder} />)}
            </ul>
        </section>
        </>
    )
}