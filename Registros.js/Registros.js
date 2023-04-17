//localstorage para simular una base de datos
const FormRegistro = document.querySelector("#FormRegistro")
FormRegistro.addEventListener("submit", (evento)=>{  //evento submit y funcion de callBack
    evento.preventDefault()//para que no se recargue la página
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    //chequear que el mail no esté registrado y sino lo está- que lo registre
    //en nuestro array de objetos (USERS)
    // En caso de que localStorage tenga datos, lo guarda en Users y sino que 
    // permanezca el array vacio
    const users = JSON.parse(localStorage.getItem("users")) || []
    //Realizamos una variable que compare los mails de los Usuarios
    const isUserRegistered =users.find(users => users.email === email)
    //Realizamos la Validación de la variable
    if(isUserRegistered){
        return alert("El Usuario ya se encuentra Registrado")
    }
    // Si no está registrado
    //agregamos los datos del objeto nuevo al array Users
    users.push({name: name, email: email, password: password})
    //Se guarda en el LocalStorage como cadena JSON
    localStorage.setItem("users",JSON.stringify(users))
    alert("Su Registro fue ¡Exitoso!")
      //Redireccionamos a Login
      window.location.href = "login.html"

}) 
