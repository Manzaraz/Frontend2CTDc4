let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};
const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];
const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");
profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */
window.addEventListener("keydown", mostrarSobreMi);
function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  alert("Por favor completa tus datos 😊");
  let nombre = validarNombre();
  datosPersona.nombre = nombre;
  datosPersona.anioNacimiento = parseInt(
    prompt("Ingresa tu año de nacimiento: ")
  );
  datosPersona.ciudad = prompt("Ingresa el nombre de tu ciudad 🏙️: ");
  datosPersona.interesPorJs = confirm("¿Te interesa JavaScript?");
  datosPersona.interesPorJs = datosPersona.interesPorJs ? "Sí" : "No";
  const anioActual = new Date().getFullYear();
  datosPersona.edad = anioActual - datosPersona.anioNacimiento;
}
function validarNombre() {
  let ok = false;
  let soloLetras;
 
  do {
    let nombre = prompt("Ingese su nombre por favor:").toLowerCase().trim();
    soloLetras = /[a-zA-ZáÁ]$/;
  
    if (nombre.length <= 3 || !soloLetras.test(nombre)) {
      ok = true;
    } else {
      ok = false;
      return nombre.charAt(0).toUpperCase() + nombre.slice(1);
    }
  } while (ok == true);
}
function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById("nombre").textContent = datosPersona.nombre;
  document.getElementById("edad").textContent = datosPersona.edad;
  document.getElementById("ciudad").textContent = datosPersona.ciudad;
  document.getElementById("javascript").textContent = datosPersona.interesPorJs;
}
function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const container = document.getElementById("fila");
  listado.forEach((materia) => {
    const caja = document.createElement("div");
    caja.classList = "caja";
    const imagen = document.createElement("img");
    imagen.src = materia.imgUrl;
    imagen.alt = materia.lenguajes;
    const lenguajes = document.createElement("p");
    lenguajes.classList = "lenguajes";
    lenguajes.textContent = materia.lenguajes;
    const bimestre = document.createElement("P");
    bimestre.classList = "bimestre";
    bimestre.textContent = materia.bimestre;
    caja.appendChild(imagen);
    caja.appendChild(lenguajes);
    caja.appendChild(bimestre);
    container.appendChild(caja);
  });
  materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas);
}
function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  sitio = document.querySelector("#sitio");
  sitio.classList.toggle("dark");
}
/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
function mostrarSobreMi(event) {
  console.log(event);
  if (event.code == "KeyF") {
    const parrafoSobreMi = document.querySelector(".oculto");
    parrafoSobreMi.classList.remove("oculto");
  }
}