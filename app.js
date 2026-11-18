function saludarDespuesDe (nombre, callback){
    setTimeout ( () => {callback(nombre)}, 2000);
    
}
function mostrarSaludo (nombre){
    console.log('Hola, ' + nombre + ' ¿como estas?')
}

saludarDespuesDe( "ana", mostrarSaludo);

console.log('Esto se imprime primero');