function prepararPanqueques (callback){
console.log("preparando panqueques...");
 setTimeout ( () => {callback("Panqueques listos para servir")}, 3000);
}

function servirDesayuno (mensaje){
    console.log(mensaje);
}
prepararPanqueques (servirDesayuno)