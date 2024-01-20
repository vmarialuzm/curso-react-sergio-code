import { useState } from "react"

const Item = ({nombre, visto}) => {
    return(
        <li className="rojito">{nombre} 
            {visto ? '✅' : '⛔'}
        </li>
    )
}

export const ListadoApp = () => {
    const addTask = () => {
        setArreglo([...arreglo, {nombre: 'nuevo', visto: false}])
    }
    let listadoSecciones = [
        {nombre:"Instalaciones necesarias", visto:true},
        {nombre:"Uso de Vite", visto:true},
        {nombre:"Componentes", visto:true},
        {nombre:"Variables en JSX", visto:true},
        {nombre:"Props", visto:true},
        {nombre:"Eventos", visto:true},
        {nombre:"UseState", visto:true},
        {nombre:"Redux", visto:true},
        {nombre:"customHooks", visto:false}
    ]
    const [arreglo, setArreglo] = useState(listadoSecciones)

    return (
        <>
            <h1>Listado de Temas del Curso</h1>
            <ol>
                {arreglo.map(item => <Item key={item.nombre} nombre={item.nombre} visto={item.visto}></Item> )}
            </ol>

            <button onClick={() => addTask()}>Agregar Tarea</button>
        </>
    )
}
