/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {
    
}

function normalizarTexto(texto) {
    
}

/* ---------------------------------- email --------------------------------- */
function validarEmail(e) { 
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    const field  = e.target
    const fieldValue = field.value.trim().toLowerCase()
    console.log(fieldValue);

    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    // console.log(regex.test(fieldValue));

    if (fieldValue.length > 4 && !regex.test(fieldValue)) {
        // console.log("pasa la validacion");
        setErrors(`🚨 Por favor ingrese un ${field.name} válido`, field)
    } else {
        // console.log("no pasa la validacion");
        setErrors(``, field, false)        
    }
}


function normalizarEmail(email) {
    
}    

/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {
    // console.log(contrasenia);
    console.log(contrasenia.target);
    console.log(contrasenia.target.value);

    const field = contrasenia.target
    const fieldValue = field.value

    if (fieldValue.length < 6) {
        // console.log("pasa la validacion");
        setErrors(`🚩 Por favor ingrese una ${field.name} válida, de almenos 6 caracteres`, field)
    } else {
        // console.log("no pasa la validacion");
        setErrors(``, field, false)
    }
    
}    

function compararContrasenias(contrasenia_1, contrasenia_2) {
    
}    

 // Creamos un metodo para verificar si el input esta vacio
const isEmpty = (message, e) => { 
    // console.log(e);
    // console.log(e.target);
    const field = e.target
    const fieldValue = field.value

    if (fieldValue.length == 0) {
        setErrors(message, field)
    }    
}    

const setErrors = (message, field, isError = true) => { 
    if (isError) {
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error")
        field.nextElementSibling.textContent = message
    } else {
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error")
        field.nextElementSibling.textContent = message      
    }    
}    
