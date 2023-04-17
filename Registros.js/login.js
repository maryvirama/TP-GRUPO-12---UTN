// tomamos el formulario
const loginForm = document.querySelector("#loginForm")
//agragamos el evento
loginForm.addEventListener("submit", (Event)=>{
    //event.preventDefault para que no se cargue la página
    Event.preventDefault()
    //tomar los campos: email y password
    const email= document.querySelector("#email").value
    const password= document.querySelector("#password").value
    //Obtener los datos que posee el LocalStorage del navegador
    const Users =JSON.parse(localStorage.getItem("users")) || [] // SI NO HAY DATOS-array vacio a nuestro users
    // Usamos un find para validar los campos 
    const validarUsuario = Users.find(user=> user.email === email && user.password === password)
    if(!validarUsuario){
        return alert("¡Alguno de los datos son incorrectos!")
    }
    alert(`Bienvenido ${validarUsuario.name}`)
    //esta linea de LocalStorage sirve para ver que usuario está logeado
    localStorage.setItem('login_success', JSON.stringify(validarUsuario))//tambien se puede agragar a la variable el campo .name
    
    window.location.href = 'FinRegistro.html' 

})