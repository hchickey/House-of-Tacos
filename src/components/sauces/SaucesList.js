import { useEffect, useState } from "react"
import "./Sauces.css"

export const SaucesList = ({selectOrderSauce, selectedSauces}) => {
    const [sauces, setSauces] = useState([])

    useEffect(() => {
        fetch("http://localhost:8088/sauces")
        .then(data => data.json())
        .then(sauces => setSauces(sauces))
    }, [])

    return (
        <div className="menu--list sauces">
            <h2>Sauces</h2>
            <div className="sauces--items">
                {sauces.map(sauce =>
                    <label htmlFor={`sauce--${sauce.id}`} key={sauce.id}>
                        <input type="checkbox" id={`sauce--${sauce.id}`}
                        onChange={() => selectOrderSauce(sauce.id)}
                            checked={selectedSauces.includes(sauce.id) ? true : false} />
                            {sauce.sauce}
                    </label>
                )}
            </div>
        </div>
    )
}