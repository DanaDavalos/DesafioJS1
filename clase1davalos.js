//Saludo
alert(`Bienvenido a Contabalance, tu gestion es hoy`)


//Opcion de prueba gratis/estructura condicional
let pruebaGratis = prompt("Esta interesado en hacer una prueba gratuita? Responder si o no")
console.log(`La respues ingresada es ${pruebaGratis}`)
if (pruebaGratis.toLowerCase() == `si`){
let pruebaGratis = prompt(`Ingrese su Email`)
    console.log (`El Email ingresado es ${pruebaGratis}`)
alert(`Pronto uno de nuestros supervisores se comunicara con usted`)
}
//Metodo de pago si nuestro sistema es contratado HOY
let cartelDescuento = prompt(`Contratando hoy nuestro sistema de Contabalance el primer mes es gratis. Hasta podes pagar en 3, 6 y hasta 12 cuotas sin interes. Desea contratar nuestros servicios?`)
console.log(`La respues ingresada es ${cartelDescuento}`)
if (cartelDescuento.toLowerCase() == `si`){
}else{
console.log(`Quiere contratar nuestro servicio? ${cartelDescuento}`)
}
//Funcion para ingresar cuotas a pagar
function cuotas3(){
    let cuotas3 = parseInt(prompt("En cuantas cuotas quiere pagar, elija 3, 6 a 12 cuotas(sin interes)"));
    alert("Desea pagar en " + cuotas3 + " cuotas de 6 o 12?")
    return cuotas3
}

function cantidad1(){
    let metodoDePago = parseInt(prompt("Ingrese el metodo de pago"));
    alert("La cantidad es = " + metodoDePago)
}
function cuotas3(){
    let cuotas3 = parseInt(prompt("En cuantas cuotas quiere pagar, elija 3, 6 o 12 cuotas"));
    alert(`Desea pagar en ${cuotas3}? `)
}
let cantidad = console.log(Number(cantidad1()))
let cuotas = console.log(Number(cuotas3()))


