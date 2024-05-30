/* -------------------------- estado por defecto ------------------------- */
const estadoUsuario = {
    email: "",
    password: "",
    rol: "",
    terminos: false,
};

// ponemos en true solo cuando estén correctos
const estadoErroresOK = {
    email: false,
    password: false,
    rol: false,
    terminos: false
};

/* ---------------------------------- nodos --------------------------------- */

// capturamos todos los elementos que necesitamos
const formulario = document.forms[0];

const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const inputRol = document.querySelector('#rol');
const inputTerminos = document.querySelector('#terminos');

const emailError = document.querySelector('#emailError')
const passwordError = document.querySelector('#passwordError');
const rolError = document.querySelector('#rolError');
const terminosError = document.querySelector('#terminosError');


/* -------------------------------------------------------------------------- */
/*                   [1] FUNCION: mostrar errores al usuario                  */
/* -------------------------------------------------------------------------- */
function mostrarErrores() {
    estadoErroresOK.email 
        ? emailError.classList.remove("visible")
        : emailError.classList.add("visible")
    
    estadoErroresOK.password 
        ? passwordError.classList.remove("visible")
        : passwordError.classList.add("visible")

        
    estadoErroresOK.rol 
        ? rolError.classList.remove("visible")
        : rolError.classList.add("visible")

    estadoErroresOK.terminos
        ? terminosError.classList.remove("visible")
        : terminosError.classList.add("visible")
}


/* -------------------------------------------------------------------------- */
/*               [2] FUNCION: actulizamos los estados de la app               */
/* -------------------------------------------------------------------------- */
// 👇 por cada cambio en el formulario actualizamos\
formulario.addEventListener("change", () => { 
    // 👇 actualizo el estado de la pantalla con los datos
    estadoUsuario.email = inputEmail.value
    estadoUsuario.password = inputPassword.value
    estadoUsuario.rol = inputRol.value
    estadoUsuario.terminos = inputTerminos.checked
    console.log(estadoUsuario);

    estadoErroresOK.email = validarEmail(estadoUsuario.email)
    estadoErroresOK.password = validarPassword(estadoUsuario.password)
    estadoErroresOK.rol = validarRol(estadoUsuario.rol)
    estadoErroresOK.terminos = validarTerminos(estadoUsuario.terminos)

    mostrarErrores()
 })


/* -------------------------------------------------------------------------- */
/*                        [3] FUNCIONES: validar campos                       */
/* -------------------------------------------------------------------------- */
function validarEmail(email) {
    console.log(email);
    let resultado = false

    // validamos al viejo y popular estilo js
    // if (
    //     email.includes("@") &&
    //     email.includes(".") &&
    //     !email.includes(" ") 
    // ) {
    //     resultado = true
    // }

    // ahora vemos de validar con expresiones regulares
    // let regEx = new RegExp("[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}")
    let regEx = new RegExp(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/)
        // cualquiera de las dos expresiones regulares son validas

    if (regEx.test(email)) {
        resultado = true
    }

    return resultado
}

function validarPassword(password) {
    let resultado = false

    // let regExp = /^(?=.*\d)(?=.*[a-z]).{6,20}$/ // acepta minúsculas, caracteres especiales y números
    let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/ // acepta minúsculas, mayúsculas, caracteres especiales y números


    if (password.match(regExp)) {
        resultado = true
    }    
    
    return resultado    
}

function validarRol(rol) {
    let resultado = false

    if (rol == "frontend" || rol == "backtend" || rol != "") {
        resultado = true
    }    
    
    return resultado    
}

function validarTerminos(verificacion) {
    console.log(verificacion);
    let resultado = false

    if (verificacion) {
        resultado = true
    }   
    
    return resultado    
}



/* -------------------------------------------------------------------------- */
/*                      [4] FUNCION: escuchamos el submit                     */
/* -------------------------------------------------------------------------- */
// en el evento submit nos remitimos a chequear nuestro estado de errores
formulario.addEventListener("submit", (evento) => { 
    // Primero que todo prevenimos el comportamiento por defecto del navegadcor
    evento.preventDefault()

    if (
        estadoErroresOK.email &&
        estadoErroresOK.password &&
        estadoErroresOK.rol &&
        estadoErroresOK.terminos
    ) {
        // alert("Completaste el la carga del formulario con éxito")
        console.log("Completaste el la carga del formulario con éxito")
        navegarPaginaExito()
    }
    
 })




/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */
// Esta funcion se va a encargar de realizar la redirección cuando el formulario se complete correctamente.
// Para eso debera cumplir con los siguientes requerimientos.
// 1 - Deshabilitar el boton del formulario.✅
// 2 - Esperar 3 segundos para redireccionar a la página de ✅
// 3 - Durante ese tiempo el boton deshabilitado debe mostrar el texto: "Cargando..."
// 4 - Cuando vaya a la página de 'usuario.html' NO se debe permitir que mediante el botón de "Atrás"(la flechita del navegador) el usuario vuelva a index.

function navegarPaginaExito() {
    //  desarrollar la funcion aqui
    


}
    