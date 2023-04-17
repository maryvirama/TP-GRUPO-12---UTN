

const Usuario = JSON.parse(localStorage.getItem('login_success')) || false
if(!Usuario){// si la variable Usuario es False - lo mandamos al Login.html
    window.location.href = 'login.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto! Le agradecemos su visita')
    // despues de salir removemos el usuario del  del localStorage 
    //del navegador
  localStorage.removeItem('login_success')
    window.location.href = 'login.html'
})