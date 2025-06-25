//Ejercicio 2: mostrar un mensaje en la consola
// Crear un componente con un botón que, al hacer clic, muestre un mensaje dinámico en pantalla.
//Objetivo: que el mensaje diga "El mejor equipo de Argentina es..." seguida de una respuesta aleatoria

import { useState } from "react"

export const Ejercicio2 = () => {
    const [team, setTeam] = useState("")

    const equipos = ["Boca", "Boca Juniors", "Boca Jrs", "CABJ", "La mitad más 1"]
    
    function handleClick(){
        const aleatorio = Math.floor(Math.random() * equipos.length)
        setTeam(equipos[aleatorio])
    }

  return (
    <div style={{display:"flex"}}>
        <button onClick={handleClick}>Equipo</button>
        {<p>El mejor equipo de Argentina es {team}</p>}
    </div>
  )
}