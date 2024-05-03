/* -------------------------------------------------------------------------- */
/*                                  FUNCION 2                                 */
/* -------------------------------------------------------------------------- */
// 👇 Esta funcion nos devuelve 1, 2 o 3 según la elección del usuario.
// Hasta que el usuario ingrese un dato válido le seguimos pidiendo que elija.

function pedirJugada() {
    // inicializamos la variable eleccion en 0
    let eleccion = 0

    do {
        // Pedir que el usuario elija uan opcion valida 1,2,3
        // Convertir el texto del prompt a un numero para evaluar la jugada
        // reemplazamos el valor guardado en la variable
        eleccion = parseInt(prompt("Ingrese para jugar 1(🗿Piedra) 2(🧻 Papel) o 3(✂️Tijera)"))
    } while (isNaN(eleccion) || eleccion < 1 || eleccion > 3);
    // } while (true);

    // para mostrar por consola
    // console.log("----------------------------");
    // console.log("La elección del jugador es:")
    // console.log(eleccion);
    // console.log("----------------------------");  

    return eleccion
}

// let jugadaUsuario = pedirJugada() // Probar la jugada del usuario

/* -------------------------------------------------------------------------- */
/*                                  FUNCION 3                       */
/* -------------------------------------------------------------------------- */
function jugadaRandom() {
    // Math.random()👉🏻 https://www.w3schools.com/js/js_random.asp
    let min = 1
    let max = 4
    
    // cualquiera de estas dos opciones son aceptables de redondeo del numero, ya que redondean para abajo
    let numeroRandom = parseInt(Math.random() * (max - min) + min )
    // let numeroRandom = Math.floor(Math.random() * (max - min) + min )
    
    // no seria lo ideal
    // let numeroRandom = Math.round(Math.random() * (max - min) + min )
    // let numeroRandom = Math.ceil(Math.random() * (max - min) + min )

    // mostramos los datos por consola
    // console.log("----------------------------");
    // console.log("La computadora saca:")
    // console.log(numeroRandom);
    // console.log("----------------------------");

    return numeroRandom
}

// let jugadaPc = jugadaRandom()




/* -------------------------------------------------------------------------- */
/*                                  FUNCION4                              */
/* -------------------------------------------------------------------------- */
// 👇 Esta funcion nos devuelve el resultado de la partida según las elecciones.
// Comparamos la eleccion de cada uno para saber quien pierde y quien gana.

function compararJugadas() {
    const RESULTADOS_POSIBLES = ['¡Genial, ganaste!', 'Esto fue un empate.', 'Una lástima, perdiste.'];
    const OPCIONES = ['piedra', 'papel.', 'tijera'];

    const JUGADOR_ELIGE = pedirJugada()
    const COMPUTADORA_ELIGE = jugadaRandom()

    // El resultado por defecto seria que el Humano Gana!
    let resultadoDeLaRonda = RESULTADOS_POSIBLES[0]
    
    // Evaluamos el empate
    if (JUGADOR_ELIGE == COMPUTADORA_ELIGE) {
        resultadoDeLaRonda = RESULTADOS_POSIBLES[1]        
        
        // Evaluamos el caso en el que perdemos
    } else if(
        (JUGADOR_ELIGE == 1 && COMPUTADORA_ELIGE == 2) ||
        (JUGADOR_ELIGE == 2 && COMPUTADORA_ELIGE == 3) ||
        (JUGADOR_ELIGE == 3 && COMPUTADORA_ELIGE == 1) 
    ){
        resultadoDeLaRonda = RESULTADOS_POSIBLES[2]              
    }

    return `${resultadoDeLaRonda}\n La computadora eligió: ${OPCIONES[COMPUTADORA_ELIGE - 1]}\n El Jugador eligió: ${OPCIONES[JUGADOR_ELIGE - 1]}`
}

// let resultadoPartida = compararJugadas()
// console.log(resultadoPartida);
// alert(resultadoPartida);