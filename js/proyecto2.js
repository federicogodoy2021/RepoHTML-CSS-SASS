//Traigo mis tags mediante sus IDs
const divReservas = document.getElementById("reservas")
const miForm = document.getElementById("miForm")
const miDeporte = document.getElementById("miSelectDeporte")
const miCiudad = document.getElementById("miSelectCiudad")
const miFecha = document.getElementById("miInputFecha")
const miHora = document.getElementById("miInputHora")
const listaUl = document.getElementById("miListaUl")
const btnEnviar = document.getElementById("btn-enviar")
const btnBorrar = document.getElementById("btn-borrar")


//Creo un contrusctor de reservas
class Reservas{
    constructor(deporte, ciudad, fecha, hora){
        this.deporte = deporte
        this.ciudad = ciudad
        this.fecha = fecha
        this.hora = hora
    }

}

//Pido las reservas almacenadas en el LocalStorage
let listaReservas = JSON.parse(localStorage.getItem('Lista de reservas'))

//Si no hay ninguna reserva en el storage se inicializa la lista de array vacía
if (!listaReservas) {
    listaReservas = []
}

//Funcion con la que voy a guardar la info de mis reservas en el LocalStorage
const almacenarReserva = (nuevaReserva) => {
    listaReservas.push(nuevaReserva)
    localStorage.setItem('Lista de reservas', JSON.stringify(listaReservas))
}

//Funcion para mostrar en el html las reservas realizadas
const mostrarReservas = (listaReservas) => {
    for (let i = 0; i < listaReservas.length; i++) {
        let itemReservas = document.createElement('li')
        itemReservas.textContent = `Ud. acaba de reservar un complejo para jugar un encuentro de ${listaReservas[i].deporte} a disputarse el día ${ listaReservas[i].fecha} a las ${ listaReservas[i].hora} en la ciudad de ${ listaReservas[i].ciudad}`


        itemReservas.deporte = listaReservas[i].deporte
        itemReservas.fecha = listaReservas[i].fecha
        itemReservas.ciudad = listaReservas[i].ciudad
        itemReservas.hora = listaReservas[i].hora

        divReservas.appendChild(listaUl)
        listaUl.appendChild(itemReservas)
        
    }
}

//Recibo los datos de mi reserva desde mi formulario
miForm.addEventListener('submit', (event) => {

    //recibe los valores de los inputs y selects
    
    const deporte = miDeporte.value
    const ciudad = miCiudad.value
    const fecha = miFecha.value
    const hora = miHora.value

//Evito el refresh de la pagina
//event.preventDefault()

const reserva1 = new Reservas(deporte, ciudad, fecha, hora)
almacenarReserva(reserva1)
})

//H1 para el titulo donde se veran mis reservas 
const tituloLista = document.createElement('h1')
tituloLista.textContent = ('RESERVAS REALIZADAS')
divReservas.appendChild(tituloLista)

//console.log(tituloLista)


mostrarReservas(listaReservas)
