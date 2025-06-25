//Ejercicio 4: selección de color preferido
//Crear un componente con un select que cambie el color del fondo al elegir una opción.

import { useState } from "react"

export const Ejercicio4 = () => {
    const [fondo, setFondo] = useState("")

function handleFondo(e){
    setFondo(e.target.value)
}

  return (
    <div style={{backgroundColor: fondo, height: "3em", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "1em"}}>
        <select onChange={handleFondo} style={{padding:"0.4em", textAlign:"center", borderRadius: "0.4em"}}>
            <option value="" selected>-Elija color-</option>
            <option value="blue">Azul</option>
            <option value="red">Rojo</option>
            <option value="yellow">Amarillo</option>
            <option value="pink">Rosa</option>
            <option value="black">Negro</option>
            <option value="violet">Violeta</option>
        </select>
    </div>
  )
}