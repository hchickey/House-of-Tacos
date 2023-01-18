import { useEffect, useState } from "react"


export const ToppingsList = ({selectOrderTopping, selectedToppings}) => {
    const [toppings, setToppings] = useState([])
    //return an array with an initial state value and a function for changing that state

    //this is like an event listener
    useEffect(() => {
        fetch("http://localhost:8088/toppings")
        .then(data => data.json())
        .then(toppings => setToppings(toppings))
    }, [])

    return (
        <div className="menu--list toppings">
            <h2>Toppings</h2>
            <div className="toppings--item">
                {toppings.map( topping =>
                    <label htmlFor={`topping--${topping.id}`} key={topping.id}>
                    <input type="checkbox" id={`topping--${topping.id}`}
                    onChange={() => selectOrderTopping(topping.id)}
                    checked={selectedToppings.includes(topping.id) ? true : false} />
                    {topping.topping}
                    </label>
                    )}
            </div>
        </div>
    )
}