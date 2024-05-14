// 🚩 Antes de empezar, vinculemos el HTML solo con el script de clase 4.

const listadoNoticias = [
    {
        titulo: "¡SOMOS CAMPEONES DEL MUNDO!",
        epigrafe: "Argentina le ganó por penales a Francia y la Copa la levanta Messi, el mejor. ¡Vamos!",
        foto: "./img/futbol.jpeg"
    },
    {
        titulo: "Instituciones ejemplares: por qué tres escuelas de América Latina quedaron entre las 15 mejores del mundo",
        epigrafe: "Son dos establecimientos brasileños y uno colombiano.",
        foto: "./img/escuela.jpeg"
    },
    {
        titulo: "Xi Jinping llega a París para reunirse con Macron y Von der Leyen",
        epigrafe: "El presidente de China, Xi Jinping, llegó al Palacio del Elíseo de París, en Francia, para una reunión trilateral con el presidente de Francia.",
        foto: "./img/europa.jpeg"
    }
]

// Vamos a trabajar con nodos de manera dinámica, sobre todo crearlos desde JS en vez de que estén estáticos en el HTML
// Para eso vamos a valernos de array listadoNoticias que tenemos más arriba
// ¿Cual es la idea? utilizar la información que nos llega del listado para presentarla en pantalla.

// Primero, mantengamos el HTML vinculado solo con clase4 👌

/* -------------------------- PRACTICANDO ATRIBUTOS ------------------------- */
// Completemos correctamente el 'alt' de cada imagen con la frase "miniatura de noticia"
// const imagen = document.querySelector(".noticias article img")

// console.log(imagen);

// console.log(imagen.getAttribute("alt")); // buscar un atributo

// imagen.setAttribute("alt", "Orgullo argentino Campeon del mundo") // poner atributo
// imagen.removeAttribute("alt", "Orgullo argentino Campeon del mundo") // quitarlo

// console.log(imagen.getAttribute("alt"));
// console.log(imagen);


// Hagamoslo más dinámico y recorramos todas las imagenes👇


/* ---------------------- PRACTICANDO CREACION DE NODOS --------------------- */
// 1- Ahora vamos a ir al HTML y eliminar los 3 Article que se encuentran en el main.
// 2- Comentamos la parte de este código de "Practicando atributos"
// 3- Vamos a crear de a uno e insertarlos en el HTML usando un bucle👇

// const main = document.querySelector("main")
// // const main = document.querySelector(".noticias")
// main.innerHTML = "" // con esto lo que quiero hacer es borrar toooodo contenido previo que tenga esa etiqueta

// listadoNoticias.forEach( noticia => {
//     // Crear los elementos
//     const article = document.createElement("article")
//     const h2 = document.createElement("h2")
//     const img = document.createElement("img")
//     const p = document.createElement("p")

//     // console.log(p);


//     // Agregamos contenido a cada una de las etiquetas creadas
//     h2.textContent = noticia.titulo
//     img.setAttribute("src", noticia.foto)
//     img.setAttribute("alt", `miniatura de ${noticia.titulo}`)
//     p.innerText = noticia.epigrafe
//     // p.setAttribute("class", "hola mundo") // esto no se hace, no se agrega clases con el setAttribute, porque borra todo contenido previo, entonces eliminaría las clases

//     // Ahora nos toca insertar las etiquetas con su contenido a un elemento contendeor(recuerden que esto no esta en el dom todavía)
//     article.appendChild(h2)
//     article.appendChild(img)
//     article.appendChild(p)

//     // Ahora debo argregar el article al "abuelo" que vive en el dom, que es donde queremos insertarlo
//     main.appendChild(article)
// })

// const ultimoMomento = {
//     titulo: "A nueve años de la muerte de Gustavo Cerati",
//     epigrafe: "actitud rockera, sensibilidad pop y el sonido universal de un artista único/nEl paso del tiempo agiganta la relevancia de la obra del músico argentino./nSu legado ilumina el panorama de la escena actual con indiscutible vigencia.",
//     foto: "https://www.clarin.com/img/2021/03/30/JB6p137T2_360x240__1.jpg"
// }

// main.innerHTML += `
//     <article>
//         <h2>${ultimoMomento.titulo}</h2>
//         <img src="${ultimoMomento.foto}" alt="">
//         <p>${ultimoMomento.epigrafe}</p>
//     </article>
// `



/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// Antes de comenzar vamos a comentar la parte de PRACTICANDO ATRIBUTOS y PRACTICANDO CREACION DE NODOS.
// Una vez que solo tenemos el código comentado podemos empezar la practica.
// 1- Debemos reutilizar el "listadoNoticias" para lograr el mismo resultado de crear los nodos dinamicamente.
// 2- La diferencia ahora radica en utilizar un bucle y dentro del mismo utilizar la notación de Plantillas Literales (con comillas invertidas -> ``)
// 3- El resultado debe ser el mismo que en el caso anterior pero vamos a implementar el método innerHTML para insertar la plantilla creada.
// Ejemplo: si quiero insertar un titulo en el body, haría los siguiente:
// document.querySelector('body').innerHTML += `<h1>Nuevo Título</h1>`;

function renderizandoElementos() {
    // desarrollar la consigna aquí
    console.log(listadoNoticias);
    const mainElement = document.querySelector("main")
    mainElement.innerHTML = ""
    for (let index = 0; index < listadoNoticias.length; index++) {
        mainElement.innerHTML += `
            <article>
                <h2>${listadoNoticias[index].titulo}</h2>
                <img src="${listadoNoticias[index].foto}" alt="">
                <p>${listadoNoticias[index].epigrafe}</p>
            </article>
            `
        
    }

}
renderizandoElementos();