import { useEffect, useState } from "react"


export const TortillaList = ({selectedTortilla, setSelectedTortilla}) => {
    const [tortillas, setTortillas] = useState([]) //return an array with an initial state value and a function for changing that state


    //This is like an event listener
    useEffect(() => {
        fetch("http://localhost:8088/tortillas")
        .then( data => data.json())
        .then( tortillas => setTortillas(tortillas))
    }, [])

    return (
        <div className="menu--list tortillas">
            <h2>Tortillas</h2>
            <select
                onChange={
                    (event) => {
                        const intValueOfUserSelection = parseInt(
                            event.target.value
                        )
                        setSelectedTortilla(intValueOfUserSelection)
                    }
                }

                value={selectedTortilla} >

                <option value={0}>select a tortilla</option>
                {tortillas.map(
                    (tortilla) => 
                        <option id={`tortilla--${tortilla.id}`} key={tortilla.id} value={tortilla.id}>
                        {tortilla.type}
                    </option>
            )}
                </select>
        </div>
    )
}