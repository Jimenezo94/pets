import { url1 , url2 } from "./url.js";


document.addEventListener('DOMContentLoaded', async ()=> {
    let mostrarElementos = document.querySelector('.listafav')

    let resp = await fetch("http://localhost:5000/usuarios")
  let dataUser = await resp.json()
  console.log(dataUser);

  const { favoritos } = dataUser[0]
  console.log(favoritos)

  let showFavoritos =[]
  favoritos.forEach(async (animal) => {

    if(animal.tipo == 'perro'){

        let respPerros = await fetch(url1+'/'+animal.id)
        let data = await respPerros.json()
        console.log(data);
        const {imagen,nombre,raza,id} = data
        mostrarElementos.innerHTML+= `
        <div class="col elementos style="background-color">
            <a href="#" class="enlace-detalle-elemento">
                <div class="card bg-dark text-white gradiente">                
                    <img src="${imagen}"class="card-img clickdetail" alt="...">
                    <div class="card-img-overlay">
                            <h5 class="card-title body2Bold">${nombre}</h5>
                            <p class="card-text body2Regular">${raza}</p>
                           <button id=${id} class="btn btn-outline-dark gato" style="background-color: #db7;">Detail</button>
    
                    </div>
                </div>
            </a>
        </div>
        `


    }else {
        let resp = await fetch(url2+'/'+animal.id)
        let data = await resp.json()
        console.log(data);
        const {imagen,nombre,raza,id} =data
        mostrarElementos.innerHTML+= `
        <div class="col elementos style="background-color">
            <a href="#" class="enlace-detalle-elemento">
                <div class="card bg-dark text-white gradiente">                
                    <img src="${imagen}"class="card-img clickdetail" alt="...">
                    <div class="card-img-overlay">
                            <h5 class="card-title body2Bold">${nombre}</h5>
                            <p class="card-text body2Regular">${raza}</p>
                           <button id=${id} class="btn btn-outline-dark gato" style="background-color: #db7;">Detail</button>
    
                    </div>
                </div>
            </a>
        </div>
        `

    }

  })


   // const resp = await fetch(url1)
    const data = await resp.json()


    data.forEach(element =>{
        const {imagen,nombre,raza,id} = element
        mostrarElementos.innerHTML+= `
        <div class="col elementos style="background-color">
            <a href="#" class="enlace-detalle-elemento">
                <div class="card bg-dark text-white gradiente">                
                    <img src="${imagen}"class="card-img clickdetail" alt="...">
                    <div class="card-img-overlay">
                            <h5 class="card-title body2Bold">${nombre}</h5>
                            <p class="card-text body2Regular">${raza}</p>
                           <button id=${id} class="btn btn-outline-dark gato" style="background-color: #db7;">Detail</button>
    
                    </div>
                </div>
            </a>
        </div>
        `
    })
})
