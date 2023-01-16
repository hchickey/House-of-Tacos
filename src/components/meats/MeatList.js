import { useEffect, useState } from "react"

// Step 1: MeatList gets called by its parent
export const MeatList = () => {
    // Step 2: We define our component's state (with an intial value of [])
    // and we get a function for changing that state by calling useState()
    const [meats, setMeats] = useState([]);

    // Step 3: We call useEffect() to tell it a function to call once the HTML of the component is in the DOM
    useEffect(
    // Step 5: useEffect calls this function for us to get the meats data from the db and update the meats state.
        () => {
            fetch('http://localhost:8088/meats')
            .then((data) => data.json())
            .then((meatData) => setMeats(meatData))
    }, [])

    // Step 4: The function returns our JSX/HTML and it shows up in the DOM
    // Step 6: The JSX/HTML is rendered again using our updated meats state

    return (
        <div className="menu--list meats">
            <h2>Meats</h2>
            <div className="meats--items">
                {meats.map(
                    (meat) => {
                        return (
                            <label htmlFor={`meat--${meat.id}`} key={meat.id}>
                                <input
                                type="radio"
                                id={`meat--${meat.id}`}
                                onChange={
                                    () => {

                                    }
                                }

                                name="meat"/>
                                {meat.meat}
                            </label>
                        )
                    }
                )}
            </div>
        </div>
    )
}