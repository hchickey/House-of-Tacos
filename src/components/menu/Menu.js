import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { TortillaList } from "../tortillas/TortillaList"



export const Menu = () => {
    const [selectedTortilla, setSelectedTortilla] = useState(0)
    const [chosenMeat, setChosenMeat] = useState(0)
    const [selectedToppings, setSelectedToppings] = useState([])
    const [selectedSauces, setSelectedSauces] = useState([])

    const navigate = useNavigate()

    const selectOrderTopping = (selectedToppingId) => {
        // Because we are using checkboxes for toppings we need to 
        // decide whether to add or remove a topping id from our selectedToppings state
        // Add it if the user is selecting it, remove it if the user is deselecting it.
        // If the id is already there, then remove it. If it's not there, add it.

        let selectedToppingsCopy = [...selectedToppings]
        if (selectedToppings.includes(selectedToppingId)) {
            selectedToppingsCopy = selectedToppingsCopy.filter((toppingId) =>
            toppingId !== selectedToppingId)
                setSelectedToppings(selectedToppingsCopy)
        } else {
            selectedToppingsCopy.push(selectedToppingId)
            setSelectedToppings(selectedToppingsCopy)
        }
    }

    const selectOrderSauce = (selectedSauceId) => {
        // Because we are using checkboxes for sauces we need to 
        // decide whether to add or remove a sauce id from our selectedSauces state
        // Add it if the user is selecting it, remove it if the user is deselecting it.
        // If the id is already there, then remove it. If it's not there, add it.

        let selectedSaucesCopy = [...selectedSauces]
        if (selectedSauces.includes(selectedSauceId)) {
            selectedSaucesCopy = selectedSaucesCopy.filter((sauceId) =>
            sauceId !== selectedSauceId)
                setSelectedSauces(selectedSaucesCopy)
        } else {
            selectedSaucesCopy.push(selectedSauceId)
            setSelectedSauces(selectedSaucesCopy)
        }
    }

    const submitOrder = () => {
        const newOrder = {
            meatId: chosenMeat,
            tortillaId: selectedTortilla,
            timestamp: Date.now()
        }

        // Add the order obj to the db.
        fetch(
            "http://localhost:8088/orders",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify( newOrder )
            }
        )
        .then((newOrderData) => newOrderData.json())
        .then((newOrder) => {
            // POST X number of orderToppings to the db
            const orderToppingsPromises = selectedToppings.map((toppingId) => {
                return fetch("http://localhost:8088/orderToppings", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        toppingId: toppingId,
                        orderId: newOrder.id
                    })
                })
            })

            //Promise.all(): give it an array of promise objects and you can follow it with s single .then()
            // That .then will not call its callback func until ALL the Promises have resolved.
            return Promise.all(orderToppingsPromises)
        })
        .then((newOrder) => {
            // POST X number of orderSauces to the db
            const orderSaucesPromises = selectedSauces.map((sauceId) => {
                return fetch("http://localhost:8088/orderSauces", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        sauceId: sauceId,
                        orderId: newOrder.id
                    })
                })
            })

            //Promise.all(): give it an array of promise objects and you can follow it with s single .then()
            // That .then will not call its callback func until ALL the Promises have resolved.
            return Promise.all(orderSaucesPromises)
        })
        .then(
            /* reset the form to empty if we are staying on this page.
            In this version of the app we are not, so no need to do this.
            Might come in handy for you at some point, though!
            () => {
                setSelectedTortilla(0)
                setChosenMeat(0)
                setSelectedToppings([])
            }

            Instead, once an order is placed re-route to a different view
        
            */
           navigate("/orders")
        )
    }

    return (
        <>
            <h1 className="menuHead">Our Menu. Build the Perfect Taco for You!</h1>
            <section className="menu">
                <TortillaList selectedTortilla={selectedTortilla} setSelectedTortilla={setSelectedTortilla} />
                
            </section>
        </>
    )
}