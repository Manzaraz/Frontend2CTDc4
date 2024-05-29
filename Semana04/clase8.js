/* -------------------------------------------------------------------------- */
/*               [1] FUNCION: capturar los datos del formulario               */
/* -------------------------------------------------------------------------- */
function capturarDatosFormulario() {
    // 👇🏼 Establecer un objeto vacio para despues rellenarlo con los datos del form, 
    const objetoInformacion = {
        nombre: "",
        password: "",
        telefono: "",
        hobbies: [],
        nacionalidad: "",
    }

    // Capturamos los nodos de nuestro DOM, inputs
    // fieldset datos
    const nom = document.querySelector("#nom")
    const pass = document.querySelector("#pass")
    const tel = document.querySelector("#tel")
    // console.log(nom, pass, tel);     

    // Fieldset Hobbies
    // const hobbies = document.querySelectorAll("[name=hobbies]")
    const hobbies = document.getElementsByName("hobbies")
    // console.log(hobbies);
    
    // Fieldset Nacionalidad
    const nacionalidad = document.querySelectorAll("[name=nacionalidad]")
    // console.log(nacionalidad);   

    // Empezamos a completar el objetoInformacion con la info pertiente
    // vamos a retornar los valores de los inputs en la propiedad objetoInformacion
    objetoInformacion.nombre = nom.value 
    objetoInformacion.password = pass.value
    objetoInformacion.telefono = tel.value 

    hobbies.forEach( hobby => {
        if (hobby.checked) {
            // Para cada iteracion en donde se encuentra checado... lo pusheo al array 
            objetoInformacion.hobbies.push(hobby.id)
        }
    })

    nacionalidad.forEach( pais => {
        if (pais.checked) {
            // para cada país de la iteracion donde esta CHECKEADO el elemento se guarde en la propiedad
            objetoInformacion.nacionalidad = pais.id 
        }
    })

    // console.log(objetoInformacion);
    return objetoInformacion
   
}
// capturarDatosFormulario()

/* -------------------------------------------------------------------------- */
/*                 [2] FUNCION: escuchamos el submit del form                 */
/* -------------------------------------------------------------------------- */
const form = document.querySelector("form")

form.addEventListener("submit", (ev) => { 
    // Prevenimos el comportamiento por defecto del HTML
    ev.preventDefault()
    
    // Utilizamos la funcion para capturarlos datos de inputs y guardarlos en esta constante
    const datos = capturarDatosFormulario()
    // console.log(datos);

    // validamos los "datos" (datos de la constante anterior)
    const errores = validarInformacion(datos)
    // console.log(errores);

    // para luego mostrar un cuadro de dialogo indicando en qué se equivocó
    renderizarErrores(errores)

    mostrarMensajeExito(errores)

})


/* -------------------------------------------------------------------------- */
/*                       [3] FUNCION: renderizar errores                      */
/* -------------------------------------------------------------------------- */
// Desarrollamos esta funcion para llamarla en el submit
function renderizarErrores(listado) {
    // console.log(listado);
    // Si checkeo tener ese div #errores... debo hacer algo para que no me lo pitne inicialmente..
    const cajaDeErrores = document.querySelector("#errores") // si no existiera esto me da un null
    console.log(cajaDeErrores);

    // Si ya existe entonce debemos elimiar la cajaDeErroes del dom
    if (cajaDeErrores) { // si cajaDeErrorres me da null... no pasa nada.. pero si existiere con esto evito👇🏼
        cajaDeErrores.remove() // evito la duplicidad de del mensaje de error borrandolo del dom
    }

    if (listado.length > 0) {
        const divTemplate = document.createElement("div")
        divTemplate.setAttribute("id","errores")
        divTemplate.style = "background:rgba(255, 0, 0, 0.2);padding: 0.5em 1em; color: red; margin: 0.5em 0"
    
        listado.forEach( error => {
            divTemplate.innerHTML += `<p><span>${error}</span></p>`
        })
    
        form.appendChild(divTemplate)    
    }
}


/* -------------------------------------------------------------------------- */
/*                         [4] FUNCION: validar datos                         */
/* -------------------------------------------------------------------------- */
// Desarrollar la funcion 3 de validar los datos.
// Esta funcion va a recibir un objeto con la misma estructura de objetoInformacion
// Entonces dentro de esta función vamos a chequear ciertas validaciones.
// 1- La funcion devuelve un listado de errores según las comprobaciones que hace sobre el objeto.
// 2- Si el nombre no es un texto y tiene menos de 3 caracteres sumar el error: "El nombre debe tener al menos 3 caracteres."
// 3- Si la contraseña tiene menos de 6 caracteres, sin contar espacios al principio, en el medio o final, sumar el error: "La contraseña debe tener al menos 6 caracteres, entre letras y símbolos."
// 4- Si el telefono tiene menos de 10 números, sumar el error: "No es un teléfono válido."
// 5- Si la lista de hobbies tiene más de 4 items, sumar el error: "Sólo es posible seleccionar 4 hobbies."
// 5- Si no hay una nacionalidad definida, sumar el error: "Debe seleccionar una nacionalidad."
function validarInformacion(usuario) {
    // console.log(usuario);
    let errores = []

    if (!isNaN(usuario.nombre) || usuario.nombre.trim().length < 3) {
        errores.push("🚨 El nombre debe tener al menos 3 caracteres.")
    }
    if (usuario.password.trim().length < 6) {
        errores.push("🚨 La contraseña debe tener al menos 6 caracteres, entre letras y símbolos.")    
    }

    if (usuario.telefono.trim().length < 10) {
        errores.push("El telefono debe tener mas de 10 números")
    }
    
    if (usuario.hobbies.length > 4 || usuario.hobbies.length == 0) {
        errores.push("🚨 Sólo es posible seleccionar 4 hobbies.")
    }
    // if (usuario.nacionalidad == "") {
    if (!usuario.nacionalidad) {
        errores.push("🚨 Debe seleccionar una nacionalidad.")
    }

    // console.log(errores);
    return errores
}

/* -------------------------------------------------------------------------- */
/*     Mesa de Trabajo - [5] FUNCION: Formulario completado con éxito         */
/* -------------------------------------------------------------------------- */
// Esta funcion se va a encargar de mostrar que el formulario se completó correctamente.
// Para eso debera cumplir con los siguientes requerimientos.
// 1 - Recibe el listado de errores, y solo si no hay ninguno debe:✅
// 2 - mostrar al final del formulario un caja con la misma estructura que la caja de errores, pero con la tonalidad verde✅
// 3 - dentro la caja debe mostrar un párrafo con el mensaje: "¡Formulario completado con éxito!"✅
// 4 - a su vez se debe deshabilitar el boton del formulario✅
// 5 - finalmente pasados 4 segundos: se debe eliminar esa caja, habilitar el boton y limpiar el formulario

function mostrarMensajeExito(listado) {

    if (listado.length == 0) {
        const divTemplate = document.createElement("div")
        divTemplate.setAttribute("id","exito")
        divTemplate.style = "background:rgba(0, 255, 0, 0.2);padding: 0.5em 1em; color: green; margin: 0.5em 0"
    
        divTemplate.innerHTML += `<p><span>✅¡Formulario completado con éxito!</span></p>`

        const boton = document.querySelector("button")
        boton.setAttribute("disabled", "")
        
        form.appendChild(divTemplate)    

        // const cajaExito = document.querySelector("#exito")

        setTimeout(() => {
            console.log("Formulario exitoso.");
            boton.removeAttribute("disabled")
            form.reset()
            divTemplate.remove()
        }, 4000);
    }
      
}