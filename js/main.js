const galleta1= {
    producto:"galleta de triple chocolate",
    precio: 70,
    };
    const galleta2= {
    producto:"galleta de lemon pie",
    precio:65,
    };
    const galleta3= {
    producto:"galleta de macadamia",
    precio:75,
    };
    

let nombreDelPedido = prompt("Bienvenido, por favor ingrese su nombre completo.")

if (nombreDelPedido === null){
    console.log("No agregaste un nombre a tu pedido")
}

let galletaSeleccionada = prompt(nombreDelPedido + ", porfavor ingresa  'galleta1' si deseas la galleta de triple chocolate , 'galleta2' si deseas la galleta de lemon pie  o  'galleta3' si deseas la galleta de macadamia'")

if (galleta1.precio){
    console.log("La galleta de triple chocolate tiene un costo de ${galleta1.precio}"); 
}else if (galleta2.precio){
    console.log("La galleta de lemon pie tiene un costo de ${galleta2.precio}")
}else if (galleta3.precio){
    console.log("La galleta de macadamia tiene un costo de ${galleta3.precio}")
}else{
    console.log("No tenemos esta opcion en nuestro inventario")
}
    
//cantidadGalletas
let cantidadGalletas = parseInt(prompt ("Cuantas galletas deseas ordenar?"))


function calcularTotal (cantidadGalletas){
    return cantidadGalletas * galletaSeleccionada.precio
}
console.log(nombreDelPedido + " el total de tu pedido es de: $ ")


















