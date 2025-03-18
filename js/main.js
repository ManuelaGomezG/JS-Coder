
const productos = [
    { id: 1, nombre: "Galleta perro", precio: 35 },
    { id: 2, nombre: "Galleta gato", precio: 25 },
    { id: 3, nombre: "Galleta decorada", precio: 75 },
    { id: 4, nombre: "Recetario", precio: 235 }
];

let carrito = [];

document.addEventListener("DOMContentLoaded", () => {
    let subtitulo = document.getElementById("subtitulo");
    subtitulo.innerText = "Nuestra misión";

    let pedidoContainer = document.createElement("section");
    pedidoContainer.id = "pedido";
    pedidoContainer.innerHTML = `
        <h2>Bienvenido, por favor ingresa tu nombre completo:</h2>
        <input type="text" id="nombre" placeholder="Tu nombre">
        <h3>Selecciona un producto:</h3>
        <select id="seleccionProducto">
            ${productos.map(p => `<option value="${p.id}">${p.nombre} - $${p.precio}</option>`).join("")}
        </select>
        <h3>¿Cuántos deseas ordenar? (1-30)</h3>
        <input type="number" id="cantidad" min="1" max="30">
        <button onclick="agregarAlCarrito()">Agregar al carrito</button>
        <h3>Carrito de compras:</h3>
        <ul id="carrito"></ul>
        <button onclick="finalizarPedido()">Finalizar Pedido</button>
        <h2 id="resultado"></h2>
    `;
    
    document.querySelector("main").appendChild(pedidoContainer);
});

let cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("click", () => {
        let nombreProducto = card.querySelector("p").innerText;
        alert(`Has seleccionado: ${nombreProducto}`);
    });
});

function agregarAlCarrito() {
    let nombre = document.getElementById("nombre").value;
    let productoId = parseInt(document.getElementById("seleccionProducto").value);
    let cantidad = parseInt(document.getElementById("cantidad").value);

    if (!nombre) {
        document.getElementById("resultado").innerText = "Por favor, ingresa tu nombre.";
        return;
    }
    
    let productoSeleccionado = productos.find(p => p.id === productoId);
    
    if (!productoSeleccionado) {
        document.getElementById("resultado").innerText = "Selección de producto inválida.";
        return;
    }

    if (isNaN(cantidad) || cantidad < 1 || cantidad > 30) {
        document.getElementById("resultado").innerText = "Cantidad inválida. Elige entre 1 y 30 unidades.";
        return;
    }
    
    carrito.push({ producto: productoSeleccionado, cantidad });
    actualizarCarrito();
}

function actualizarCarrito() {
    let carritoElemento = document.getElementById("carrito");
    carritoElemento.innerHTML = "";
    carrito.forEach(item => {
        let li = document.createElement("li");
        li.innerText = `${item.cantidad}x ${item.producto.nombre} - $${item.cantidad * item.producto.precio}`;
        carritoElemento.appendChild(li);
    });
}

function finalizarPedido() {
    let nombre = document.getElementById("nombre").value;
    let total = carrito.reduce((sum, item) => sum + (item.cantidad * item.producto.precio), 0);

    
    if (!nombre.trim() || nombre.split(' ').length < 2) {
        document.getElementById("resultado").innerText = "Por favor, ingresa tu nombre completo (nombre y apellido).";
        return;
    }

    if (total < 100) {
        document.getElementById("resultado").innerText = "El total del carrito debe ser al menos $100 para finalizar el pedido.";
        return;
    }

    document.getElementById("resultado").innerText = `${nombre}, el total de tu pedido es de $${total}.`;

    let mensajeFinal = document.createElement("div");
    mensajeFinal.innerHTML = `<h2>¡Gracias por tu compra, ${nombre}!</h2><p>Tu pedido se ha registrado correctamente.</p>`;
    document.body.appendChild(mensajeFinal);
    carrito = [];
    actualizarCarrito();
}