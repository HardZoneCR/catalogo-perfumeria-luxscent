// Escuchamos cada vez que el cliente escribe una letra en el buscador
document.getElementById('inputBuscador').addEventListener('keyup', function(evento) {
    
    // Guardamos el texto escrito y lo pasamos a minúsculas para evitar errores de mayúsculas
    let textoBusqueda = evento.target.value.toLowerCase();
    
    // Seleccionamos todas las tarjetas de perfumes (.producto) del catálogo
    let productos = document.querySelectorAll('.producto');

    // Recorremos cada perfume uno por uno
    productos.forEach(function(producto) {
        // Buscamos el nombre del perfume dentro de su etiqueta <h3>
        let nombrePerfume = producto.querySelector('h3').textContent.toLowerCase();

        // Si el nombre del perfume contiene las letras que escribió el cliente...
        if (nombrePerfume.includes(textoBusqueda)) {
            producto.style.display = "block"; // Lo dejamos visible
        } else {
            producto.style.display = "none";  // Ocultamos el perfume
        }
    });
});