
export const ContadorApp = ({ value }) => {

    const handleClick = () => {
        value += 1
        console.log(value)
    }
    
    return (
        <>
            <div>Contador: </div>
            <p>{value}</p>
            <button onClick={handleClick}>
                Soy un botón
            </button>
        </>
    )
    }
