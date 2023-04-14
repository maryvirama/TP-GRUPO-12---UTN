

function registrodeEstadia(){
    let NombreCliente = document.getElementById("nombres").value
    let ApellidoCliente = document.getElementById("apellido").value
    let CorreoCliente = document.getElementById("correo").value
    let CantidadHabitacion = document.getElementById("habitaciones").value
    let EstadiaCliente = document.getElementById("díasestadia").value

    document.getElementById("imprimirReserva").value =   NombreCliente +" "+ ApellidoCliente +" ha reservado: " +  CantidadHabitacion + " Habitaciones, por el período de " + EstadiaCliente + " días. Ante cualquier inconveniente nos comunicaremos vía email a : "+ CorreoCliente +" el cual fue proporcionado por 'Usted'. "
}


function BorrarFormularioReserva(){
    document.getElementById("nombres").value = "";
    document.getElementById("apellido").value = ""
    document.getElementById("correo").value = "";
    document.getElementById("habitaciones").value = ""
    document.getElementById("díasestadia").value = ""
    document.getElementById("imprimirReserva").value = ""


}