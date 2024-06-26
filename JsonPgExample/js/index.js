const jsonData = `
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
`;

//Recorrer el JSON e insertar en el listado del html los nombres de los miembros
function recorrerMiembros() {
  //escribe la lógica
  // console.log(jsonData); // jsData es un string para nuestro JS

  let objetoJs = JSON.parse(jsonData)
  console.log(objetoJs);
  console.log(objetoJs.members);

  let heroes = objetoJs.members
  // console.log(heroes);

  const miembros = document.querySelector("#miembros")

  heroes.forEach(hero => {
    console.log(hero);
    console.log(hero.name);
    console.log(hero.age);
    console.log(hero.secretIdentity);

    miembros.innerHTML += `
      <li>
        <h3>Heroe: ${hero.name}</h3>
        <h5>Identidad Secreta: ${hero.secretIdentity}</h5>
        <p>Edad: ${hero.age}</p>
      </li>
    `    
  });
  
};
recorrerMiembros();