function presupuesto() {

    var pasajes = document.getElementById('pasajes').value;
    var destino = document.getElementById('destino').value;

    var salida = 0;

    if (destino.toLowerCase() === 'buenos aires') {
        salida = pasajes * 100;
    } else if (destino.toLowerCase() === 'catamarca') {
        salida = pasajes * 200;
    } else if (destino.toLowerCase() === 'chaco') {
        salida = pasajes * 150;
    } else if (destino.toLowerCase() === 'chubut') {
        salida = pasajes * 250;
    } else if (destino.toLowerCase() === 'córdoba') {
        salida = pasajes * 120;
    } else if (destino.toLowerCase() === 'corrientes') {
        salida = pasajes * 180;
    } else if (destino.toLowerCase() === 'entre ríos') {
        salida = pasajes * 160;
    } else if (destino.toLowerCase() === 'formosa') {
        salida = pasajes * 220;
    } else if (destino.toLowerCase() === 'jujuy') {
        salida = pasajes * 130;
    } else if (destino.toLowerCase() === 'la pampa') {
        salida = pasajes * 170;
    } else if (destino.toLowerCase() === 'la rioja') {
        salida = pasajes * 190;
    } else if (destino.toLowerCase() === 'mendoza') {
        salida = pasajes * 140;
    } else if (destino.toLowerCase() === 'misiones') {
        salida = pasajes * 210;
    } else if (destino.toLowerCase() === 'neuquén') {
        salida = pasajes * 230;
    } else if (destino.toLowerCase() === 'río negro') {
        salida = pasajes * 240;
    } else if (destino.toLowerCase() === 'salta') {
        salida = pasajes * 150;
    } else if (destino.toLowerCase() === 'san juan') {
        salida = pasajes * 200;
    } else if (destino.toLowerCase() === 'san luis') {
        salida = pasajes * 180;
    } else if (destino.toLowerCase() === 'santa cruz') {
        salida = pasajes * 250;
    } else if (destino.toLowerCase() === 'santa fe') {
        salida = pasajes * 130;
    } else if (destino.toLowerCase() === 'santiago del estero') {
        salida = pasajes * 170;
    } else if (destino.toLowerCase() === 'tierra del fuego') {
        salida = pasajes * 260;
    } else if (destino.toLowerCase() === 'tucumán') {
        salida = pasajes * 140;
    } else {
        salida = 0;
    }

    alert(salida);
}
