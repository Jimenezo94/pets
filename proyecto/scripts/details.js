const listGroup = document.querySelector('.list-group');

const getDetails = async () => {
   const informacion = JSON.parse(localStorage.getItem("Detail"));
   const {nombre,raza,imagen,id,tipo} = informacion;
   console.log(id,tipo)
   listGroup.innerHTML += `
   <div class="card" style="width: 8px;">
    <img src=${imagen} class="card-img-top" alt="..." style="width: 1300px;>
     <h1 class="card-title">${nombre}</h1>
     <h3 class="card-text">${raza}</h3>
 </div>
   `
let favoritoInicial = false
let imagenIcono = document.getElementById('icon-like')
let resp = await fetch("http://localhost:5000/usuarios")
let dataUser = await resp.json()

const { favoritos } = dataUser[0]
console.log("favoritos  ")
console.log(favoritos)
  favoritos.forEach(function(animal){
    if(animal.id==id && animal.tipo==tipo){
      console.log("animal")
      favoritoInicial=true
    }
  })

  if(favoritoInicial){
    imagenIcono.src="./assests/Guardado.png"
  }
  else{
    imagenIcono.src="./assests/Property 1=No guardado.png"
  }

}

document.addEventListener('DOMContentLoaded',getDetails)

listGroup.addEventListener('click', (e) => {

    if(e.target.classList.contains('btn-outline-dark')){
        window.location.href = "index.html";
    }
 
})

let addfavoritos = document.getElementById('icon-like')

addfavoritos.addEventListener('click', async (e) => {

  const informacion = JSON.parse(localStorage.getItem("Detail"));
  console.log(informacion)
  
  let resp = await fetch("http://localhost:5000/usuarios")
  let dataUser = await resp.json()
  console.log(dataUser);

  const { nombre, apellido, correo, id, favoritos } = dataUser[0]

  favoritos.push({
    "id": informacion.id,
    "tipo": informacion.tipo,
  })

  console.log('addfavoritos', informacion )
  
  let respuestaUser = await fetch(`http://localhost:5000/usuarios/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
        id: id,
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        favoritos:favoritos,
    }),
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    }
})
let data = respuestaUser.json()
console.log(data);

})
/* when a user clicks, toggle the 'is-animating' class */
