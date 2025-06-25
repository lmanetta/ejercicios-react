//Ejercicio 1: cambiar el color de fondo. 
//Crear un componente que tenga un botón para cambiar el color de fondo del componente a un color aleatorio.

import { useState } from "react"

export const Ejercicio1 = () => {
    const [color, setColor] = useState("")
    const colores = ["red", "blue", "yellow", "pink", "green", "grey"]
    
    
    function cambiarColor () {
    const aleatorio = Math.floor(Math.random() * colores.length)
    setColor(colores[aleatorio]);
}
  
    return (
        <div style={{backgroundColor: color, height: "3em", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "1em"}}>
        <button onClick={cambiarColor} style={{padding:"0.4em", borderRadius: "0.4em"}}>Aleatorio</button>
    </div>
  )
}