//objetos literales

let profesor = {
    nombre : "Esteban",
    apellido : "Piazza",
    rol : "Docente",
    Edad : 29,
    enActividad : true,
    // par clave: rol
    //
}
console.log(profesor1.nombre)

let usuarioInstagram ={
    mail:"",
    telefono:"",
    usuario:"",
    contraseña:"",
    nombre:"",
    apellido:"",
    fechaDeNacimiento:"",
    cantidadDeFotos:"",
    usuarioQueSigue:"",
    usuariosSeguidores:"",
}
console.log(usuarioInstagram.id)
usuaruioLinkedin={
    id:"",
    nombre:"",
    apellido:"",
    experienciaProfesional:"",
    formacionAcademica:"",
}

console.table(profesor1)

let usuarioTinder={
    id:"",
    nombre:"",
    apellido:"",
    fechaDeNacimiento:"",
    genero:"",
    gustosMusicales:"",
    facultad:"",
    queBusca:"",

}

//Arrays
//Arrays se hace con const

const NOMBRES=["Esteban","Guadalupe","Valentina","Valentin"]

console.log(NOMBRES)
console.log(NOMBRES[1])
console.log(NOMBRES[0])

const CARRITO=[]
console.log(CARRITO)
CARRITO.push("hola")//agregar un elemento al final
console.log(CARRITO)
CARRITO.push("chau")
console.log(CARRITO)
CARRITO.pop()//elimina el ultimo elemento
console.log(CARRITO) //LAST IN - FIRST OUT (LIFo) (PILA)
CARRITO.unshift("Unshift")//agrega un elemento al principio
console.log(CARRITO)
CARRITO.shift()//elimina el primer elemento
console.log(CARRITO)//FIRST IN - FIRST OUT (FIFO) (COLA)
console.log(CARRITO.length)

const ARRAYDEVARIASCOSAS = ["Esteban",29,true]
console.log(ARRAYDEVARIASCOSAS)

const Indice = [0,1,2]
const NOMBRESUSUARIOS = ["asd" , "dsa" , "wasd"]
const APELLIDOSUSUARIOS = ["Perez", "Dominguez", "gutierrez0"]

console.log(APELLIDOSUSUARIOS.indexOf("Perez"))
console.log(APELLIDOSUSUARIOS.includes("perez")) // true or false, si el carrito tiene tal cosa hace descuento, envio gratis,etc.
console.log(INDICES.LENGHT>2)

let ULTIMOvALOR = NOMBRESUSUARIOS.pop()
console.log(ULTIMOvALOR)

//Si veo un "-1" es que no existe!

let EQUIPOS=["BOKE","RIVER","BOKE"]
console.log(EQUIPOS.indexOf("BOKE")) //Muestra el primer index 
console.log(EQUIPOS.lastIndexOf("BOKE"))// Muestra el ultimo index  

//Lista de los que aprendimos
//push-pop
//shift-unshift
//splice-slice
//join-toString
//indexOf-lastIndexOf-includes