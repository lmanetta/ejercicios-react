//Ejercicio 5: contador de clics
//Crear un botón que cuente cuántas veces fue presionado y mostrar el conteo en pantalla. 

import { useState } from "react"

export const Ejercicio5 = () => {

    const [contador, setContador] = useState(0)

    function handleClick() {
        setContador(contador+1)
    }

  return (
    <div style={{display:"flex"}}>
        <button onClick={handleClick} style={{padding:"0.5em", borderRadius: "0.4em"}}>Click</button>
        {<p>Cantidad de clics: {contador}</p>}
    </div>
  )
}