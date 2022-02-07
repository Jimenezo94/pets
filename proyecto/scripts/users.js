let formulario = document.getElementById('formulario')
let btnCorreo = document.getElementById('btnCorreo')
let btnEditar = document.getElementById('btnEditar')
let favoritosGlobal = []

document.addEventListener('DOMContentLoaded', async () => {
    let resp = await fetch("http://localhost:5000/usuarios")
    let data = await resp.json()
    console.log(data);

    const { nombre, apellido, correo, id,favoritos } = data[0]

    document.getElementById('name').value = nombre
    document.getElementById('lastName').value = apellido
    document.getElementById('email').value = correo
    document.getElementById('id').value = id
    document.getElementById('id').style.display = 'none'
    document.getElementById('label-edit').style.display = 'none'
    favoritosGlobal = favoritos
})
btnEditar.addEventListener('click', async () => {
    
    let idModificar = document.getElementById('id').value
    let nameModificar = document.getElementById('name').value
    let lastNameModificar = document.getElementById('lastName').value
    let emailModificar = document.getElementById('email').value
    console.log(emailModificar, nameModificar, lastNameModificar, idModificar)

    let resp = await fetch(`http://localhost:5000/usuarios/${idModificar}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: idModificar,
            nombre: nameModificar,
            apellido: lastNameModificar,
            correo: emailModificar,
            favoritos:favoritosGlobal,
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    let data = resp.json()
    console.log(data);
})