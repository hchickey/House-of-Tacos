import { useEffect, useState } from "react"


export const SaucesList = () => {
    const [sauces, setSauces] = useState([])

    useEffect(() => {
        fetch("http://localhost:8088/sauces")
        .then(data => data.json())
        .then(sauces => setSauces(sauces))
    }, [])
}