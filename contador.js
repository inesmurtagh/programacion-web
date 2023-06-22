
// Función para calcular el tiempo restante hasta una fecha específica
function contador() {
    
    // Fecha de inicio de las vacaciones (20 de julio de 2023)
    const fechaInicio = new Date('2023-07-20');
      
    // Fecha actual
    const fechaActual = new Date();

    // Calcula la diferencia en milisegundos entre las dos fechas
    const diferencia = fechaInicio.getTime() - fechaActual.getTime();

    // Calcula los meses, días, horas y segundos restantes
    let dias = Math.floor((diferencia / (1000 * 60 * 60 * 24)) % 30.4375);
    let horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    let minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    let segundos = Math.floor((diferencia / 1000) % 60);

    // Muestra el contador en el elemento con el ID "contador"
    const contadorElemento = document.getElementById('contador');
    contadorElemento.innerHTML = `Faltan ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos para las vacaciones.`;
}

// Llama a la función contador cada segundo para mantener el contador actualizado
setInterval(contador, 1000);
