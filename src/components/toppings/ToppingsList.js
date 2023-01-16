import { useEffect, useState } from "react"


export const ToppingsList = () => {
    const [toppings, setToppings] = useState([])
    //return an array with an initial state value and a function for changing that state

    //this is like an event listener
    useEffect(() => {
        fetch("http://localhost:8088/toppings")
        .then(data => data.json())
        .then(toppings => setToppings(toppings))
    }, [])

    return (
        
    )
}