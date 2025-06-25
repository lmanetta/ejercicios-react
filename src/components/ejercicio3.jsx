//Ejercicio 3: capturar el texto de un input. 
//Crear un componente con un campo de texto que muestre el valor ingresado dinámicamente.

import { useState } from "react"

export const Ejercicio3 = () => {
const [text, setText] = useState("")

function handleChange(e){
    setText(e.target.value)
}

  return (
    <div style={{display: "flex"}}>
        <input type="text" onChange={handleChange} style={{height:"2em", width:"14em"}}/>
        <p>{text}</p>
    </div>
  )
}