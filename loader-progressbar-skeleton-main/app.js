/* --------------------------------- spinner -------------------------------- */
// necesitamos clickear el boton y que desaparezca el texto y se vea el gif unos segundos
const btn = document.querySelector('button');
const btnImg = document.querySelector('button img');
const btnTexto = document.querySelector('button span');

btn.addEventListener("click", () => { 
    // console.log("Hiciste click");

    // instancio a invertir las clases de los elementos que vivien el boton
    invertirClases()

    // btn.setAttribute("disabled","")
    btn.disabled = true

    setTimeout(() => {
        invertirClases()
        btn.removeAttribute("disabled")
    }, 2500);

 })

function invertirClases() {
    btnImg.classList.toggle("oculto")
    btnTexto.classList.toggle("oculto")
}


/* ----------------------------- barra progreso ----------------------------- */
const barra = document.querySelector('#barra');
const relleno = document.querySelector('#relleno');

// definimos un porcentaje de relleno que utilizaremos luego para pintar ese valor
let porcentaje = 0
// inicializamos el selector de relleno
relleno.style.width = `${porcentaje}%`

// creamos un bucle para incrementar el porcentaje
const intervalo = setInterval(() => {
    if (porcentaje < 97) {
        porcentaje++
        relleno.style.width = `${porcentaje}%`
        // console.log(porcentaje);
    } else {
        clearInterval(intervalo) // nos aseguramos que el intervalo no se siga ejecutando, fugando memoria 
    }
}, 25);
/// luego en alguna parte del codigo cuando haya recibido la respuesta del fetch
// relleno.style.width = `100%`

// aplicamos lo mismo pero a la etiqueta <progress>
const progress = document.querySelector("progress")

const intervalo1 = setInterval(() => {
    if (porcentaje < 97) {
        porcentaje++
        progress.value = porcentaje
    } else {
        clearInterval(intervalo1)
    }
}, 25);


/* -------------------------------- skeleton -------------------------------- */

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/pikachu';
const pokemon = document.querySelector('#pokemon')
const skeleton = document.querySelector('.skeleton');

fetch(apiUrl)
    .then(res => res.json())
    .then( data => {
        // console.log(data);
        // console.log(data.name);
        // console.log(data.sprites.front_shiny);
        // console.log(data.types[0].type.name)
        
        // remover el article .skeleton del dom
        skeleton.remove()

        const nombre = data.name
        const imagen = data.sprites.front_shiny
        const tipo = data.types[0].type.name

        pokemon.innerHTML += componenteTarjeta(nombre, imagen, tipo)
    })

const componenteTarjeta = (name, img, type) => { 
  return `
    <article >
        <h2>Nombre</h2>
        <img src="${img}" alt="pokemon">
        <h6>Tipo: especie</h6>
    </article>   
  `  
}
