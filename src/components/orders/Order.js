import { useState } from "react"
import { useEffect } from "react"
import "./Orders.css"

export const Order = ({order, deleteOrder}) => {
    const [orderToppings, setOrderToppings] = useState([])

    useEffect( () => {
        if (order?.id) {
          fetch(`http://localhost:8088/orders?_expand=topping&orderId=${order.id}`)
          .then( (orderToppingsData) => orderToppingsData.json())
          .then( (oT) => setOrderToppings(oT))
        }
      }, [])

      return (
        <li className="orders__item">
            <p>
                Order #{order?.id} is a {order?.tortilla?.type} with {order?.meat?.meat} topped with {orderToppings.map((orderTopping) => orderTopping?.topping?.topping).join(" and ")}
            </p>
            <button className="btn--orderDelete" onClick={() => {deleteOrder(order?.id)}}>delete</button>
        </li>
      )
}