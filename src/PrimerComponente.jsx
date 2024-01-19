import './styles/PrimerComponente.css'

const string = 'Esto es un texto'
const number = 123456
const array = ['Curso de React', 'Youtube', 4, 100000]
const boolean = false
const funcion = () => 'String desde funcion'
const objeto = { nombre: 'Curso de Javascript', duracion: 4 }
const fecha = new Date()

export const PrimerComponente = () => {
  return (
    <>  
        <h1>Variables en JSX</h1>
        <h4>Variables tipo String</h4> <p>{string}</p>
        <h4>Variables tipo number</h4> <p>{number}</p>
        <h4>Variables tipo array</h4> <p>{array}</p>
        <h4>Variables tipo boolean</h4> <p>{boolean}</p>
        <h4>Variables tipo funcion</h4> <p>{funcion()}</p>
        <h4>Variables tipo objeto</h4> <p>{ JSON.stringify(objeto) }</p>
        <h4>Variables tipo fecha</h4> <p>{ JSON.stringify(fecha) }</p>
    </>
  )
}
