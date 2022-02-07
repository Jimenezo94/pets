import { url1 , url2 } from "./url.js";

let btnCategoria1 = document.getElementById('btnCategory1')
let btnCategoria2 = document.getElementById('btnCategory2')

 const getElementos =  async(url, tipo) =>{
    let mostrarElementos = document.querySelector('.grid-elementos')

    mostrarElementos.innerHTML = ''
    const resp = await fetch(url)
    const data = await resp.json()

 
    if(tipo == "perros"){
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
                               <button id=${id} class="btn btn-outline-dark perros" style="background-color: #db7;">Detail</button>
    
                        </div>
                    </div>
                </a>
            </div>
            `
        })
      

    }
    else {
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
    }
    return data

}
getElementos(url1, "perros")

btnCategoria1.addEventListener('click',() =>{
    getElementos(url1,"perros")
})
btnCategoria2.addEventListener('click',() =>{
    getElementos(url2,"gatos")
    
})
let element = document.querySelector('.grid-elementos')
console.log(element)

element.addEventListener('click', async(e) => {

    const btnDetail = e.target.classList.contains('btn-outline-dark');
    const id = e.target.id;


    let lista=""

    if(btnDetail)
    {
        if(e.target.classList.contains('gato')){
             lista = await getElementos(url2,"gatos");
             console.log(url2) 

        }else{
          lista = await getElementos(url1,"perros");
         console.log(url1) 
        }
        
         const objeto = lista.find(list => list.id === Number(id))
         localStorage.setItem("Detail",JSON.stringify(objeto));
         console.log(objeto)
         window.location.href = "details.html"
    
    }

 })

