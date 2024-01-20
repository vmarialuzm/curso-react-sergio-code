import { useState } from "react"

export const ContadorApp = ({ value }) => {

    const [contador, setContador] = useState(value)

    const handleClick = () => {
        setContador(contador + 1)
    }

    return (
        <>
            <div>Contador: </div>
            <p>{contador}</p>
            <button onClick={handleClick}>
                Soy un botón
            </button>
        </>
    )
    }
