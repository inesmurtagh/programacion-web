function presupuesto() {

    var pasajes = document.getElementById('pasajes').value;
    var destino = document.getElementById('destino').value;

    var salida = 0;

    if (destino.toLowerCase() == 'buenos aires' || destino.toLowerCase() == 'bsas' || destino.toLowerCase() == 'caba' || destino.toLowerCase() == 'bs as') {
        salida = pasajes * 100;
    } else if (destino.toLowerCase() == 'catamarca') {
        salida = pasajes * 200;
    } else if (destino.toLowerCase() == 'chaco') {
        salida = pasajes * 150;
    } else if (destino.toLowerCase() == 'chubut') {
        salida = pasajes * 250;
    } else if (destino.toLowerCase() == 'córdoba' || destino.toLowerCase() == 'cordoba') {
        salida = pasajes * 120;
    } else if (destino.toLowerCase() == 'corrientes') {
        salida = pasajes * 180;
    } else if (destino.toLowerCase() == 'entre ríos' || destino.toLowerCase() == 'entrerios' || destino.toLowerCase() == 'entre rios') {
        salida = pasajes * 160;
    } else if (destino.toLowerCase() == 'formosa') {
        salida = pasajes * 220;
    } else if (destino.toLowerCase() == 'jujuy') {
        salida = pasajes * 130;
    } else if (destino.toLowerCase() == 'la pampa' || destino.toLowerCase() == 'lapampa') {
        salida = pasajes * 170;
    } else if (destino.toLowerCase() == 'la rioja' || destino.toLowerCase() == 'larioja') {
        salida = pasajes * 190;
    } else if (destino.toLowerCase() == 'mendoza') {
        salida = pasajes * 140;
    } else if (destino.toLowerCase() == 'misiones') {
        salida = pasajes * 210;
    } else if (destino.toLowerCase() == 'neuquén' || destino.toLowerCase() == 'neuquen' || destino.toLowerCase() == 'vla' || destino.toLowerCase() == 'villa la angostura') {
        salida = pasajes * 230;
    } else if (destino.toLowerCase() == 'río negro' || destino.toLowerCase() == 'rio negro' || destino.toLowerCase() == 'rionegro' || destino.toLowerCase() == 'bariloche' || destino.toLowerCase() == 'sur') {
        salida = pasajes * 240;
    } else if (destino.toLowerCase() == 'salta') {
        salida = pasajes * 150;
    } else if (destino.toLowerCase() == 'san juan' || destino.toLowerCase() == 'sanjuan') {
        salida = pasajes * 200;
    } else if (destino.toLowerCase() == 'san luis' || destino.toLowerCase() == 'sanluis') {
        salida = pasajes * 180;
    } else if (destino.toLowerCase() == 'santa cruz' || destino.toLowerCase() == 'santacruz') {
        salida = pasajes * 250;
    } else if (destino.toLowerCase() == 'santa fe' || destino.toLowerCase() == 'santafe') {
        salida = pasajes * 130;
    } else if (destino.toLowerCase() == 'santiago del estero' || destino.toLowerCase() == 'santiago' || destino.toLowerCase() == 'sde') {
        salida = pasajes * 170;
    } else if (destino.toLowerCase() == 'tierra del fuego' || destino.toLowerCase() == 'tdf' || destino.toLowerCase() == 'ushuaia' || destino.toLowerCase() == 'usuahia' || destino.toLowerCase() == 'tierradelfuego') {
        salida = pasajes * 260;
    } else if (destino.toLowerCase() == 'tucumán' || destino.toLowerCase() == 'tucuman') {
        salida = pasajes * 140;
    } else {
        salida = 0;
    }

    alert(salida);
}
