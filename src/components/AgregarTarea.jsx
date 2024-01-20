import { useState } from "react"

export const AgregarTarea = () => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(inputValue)
    }
    return (
        <form onSubmit={onsubmit}>
            <input 
                type="text"
                placeholder="Ingrese tarea nueva"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
