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
            
    }, [])
}