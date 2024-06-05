// en un mundo ideal la api me trae la info casi al instante
// const getData = () => { 
//     return listadoComentarios
//  }

//  console.log(getData());
// Qué son las promesas? Son un objeto de javascript que me permite evaluar la promesa de recibir algo y que puede tardar en el tiempo,
// en un mundo real la api puede tardar en traerme la info incluso por mas de un segundo
// const getData = () => { 
//     setTimeout(() => {
//         console.log("Resuelvo peticion!");
//         return listadoComentarios
//     }, 3500);
//  }

//  console.log(getData());

 
// const getData = () => { 
//     console.log("Inicio de peticion!");

//     return new Promise((resolve, reject) => { 
//         setTimeout(() => {
//             console.log("Inicio de peticion!");
//             return listadoComentarios
//         }, 3500);
        
//      })
//  }

//  console.log(getData());

listadoComentarios = []

const getData = () => { 
    console.log("Inicio de peticion!");

    return new Promise((resolve, reject) => { 

        if (listadoComentarios.length > 0) { // diferentes funciones para ir a buscar ese recurso a la API, e inclusive trasformar esa data
            setTimeout(() => {
                console.log("Peticion cumplida💍!");
                resolve( listadoComentarios )
            }, 3500);
        } else { // indicar que el recurso no tiene contenido y tengo que manejar el rechazo de la respuesta
            console.log("Peticion Rechazada🙅🏻!");
            reject( { 
                message: "Recurso no encontrado",
                status: 404
             } )            
        }        
     })
 }

getData()
.then( (datos) => { 
    console.log("Desde el .then()");
    console.log(datos);
 })
 .catch( error => console.log(error.message))

