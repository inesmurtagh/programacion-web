function presupuesto() {

    var pasajes = document.getElementById('pasajes').value;
    var destino = document.getElementById('destino').value;

    var minimo = 0;
    var maximo = 0;
    var js = 0; var fb = 0; var aa = 0;
    var salida = '';

    if (destino.toLowerCase() == 'catamarca') {
        minimo = 23616;
        maximo = 72295;
        js = 25680;
        fb = 23616;
        aa = 30617;
    } else if (destino.toLowerCase() == 'chaco') {
        minimo = 14886;
        maximo = 37162;
        js = 16771;
        fb = 17334;
        aa = 14886;
    } else if (destino.toLowerCase() == 'chubut') {
        minimo = 22468;
        maximo = 44177;
        js = 24578;
        fb = 26910;
        aa = 22468;
    } else if (destino.toLowerCase() == 'córdoba' || destino.toLowerCase() == 'cordoba') {
        minimo = 12284;
        maximo = 15936;
        js = 15593;
        fb = 13793;
        aa = 12284;
    } else if (destino.toLowerCase() == 'corrientes') {
        minimo = 17513;
        maximo = 33731;
        js = 17513;
        fb = 18866;
        aa = 22755;
    } else if (destino.toLowerCase() == 'entre ríos' || destino.toLowerCase() == 'entrerios' || destino.toLowerCase() == 'entre rios') {
        minimo = 25795;
        maximo = 43205;
        js = 26788;
        fb = 25795;
        aa = 41727;
    } else if (destino.toLowerCase() == 'formosa') {
        minimo = 33.416;
        maximo = 52.078;
        js = 33.416;
        fb = 38.273;
        aa = 47.016;
    } else if (destino.toLowerCase() == 'jujuy') {
        minimo = 21691;
        maximo = 62317;
        js = 21691;
        fb = 22914;
        aa = 24531;
    } else if (destino.toLowerCase() == 'la pampa' || destino.toLowerCase() == 'lapampa') {
        minimo = 33567;
        maximo = 38525;
        js = 33567;
        fb = 38525;
        aa = 35728;
    } else if (destino.toLowerCase() == 'la rioja' || destino.toLowerCase() == 'larioja') {
        minimo = 24458;
        maximo = 54534;
        js = 24458;
        fb = 32083;
        aa = 40927;
    } else if (destino.toLowerCase() == 'mendoza') {
        minimo = 15140;
        maximo = 37279;
        js = 16244;
        fb = 15140;
        aa = 15193;
    } else if (destino.toLowerCase() == 'misiones') {
        minimo = 16561;
        maximo = 22941;
        js = 16561;
        fb = 17150;
        aa = 17262;
    } else if (destino.toLowerCase() == 'neuquén' || destino.toLowerCase() == 'neuquen' || destino.toLowerCase() == 'vla' || destino.toLowerCase() == 'villa la angostura') {
        minimo = 16984;
        maximo = 33840;
        js = 18598;
        fb = 16984;
        aa = 21808;
    } else if (destino.toLowerCase() == 'río negro' || destino.toLowerCase() == 'rio negro' || destino.toLowerCase() == 'rionegro' || destino.toLowerCase() == 'bariloche' || destino.toLowerCase() == 'sur') {
        minimo = 24201;
        maximo = 64080;
        js = 24201;
        fb = 25038;
        aa = 29309;
    } else if (destino.toLowerCase() == 'salta') {
        minimo = 16409;
        maximo = 32732;
        js = 22084;
        fb = 26943;
        aa = 20362;
    } else if (destino.toLowerCase() == 'san juan' || destino.toLowerCase() == 'sanjuan') {
        minimo = 15571;
        maximo = 49898;
        js = 30766;
        fb = 28995;
        aa = 15571;
    } else if (destino.toLowerCase() == 'san luis' || destino.toLowerCase() == 'sanluis') {
        salida = pasajes * 180;
    } else if (destino.toLowerCase() == 'santa cruz' || destino.toLowerCase() == 'santacruz') {
        minimo = 30547;
        maximo = 78479;
        js = 38703;
        fb = 30547;
        aa = 32965;
    } else if (destino.toLowerCase() == 'santa fe' || destino.toLowerCase() == 'santafe') {
        minimo = 14369;
        maximo = 49788;
        js = 25795;
        fb = 14369;
        aa = 49788;
    } else if (destino.toLowerCase() == 'santiago del estero' || destino.toLowerCase() == 'santiago' || destino.toLowerCase() == 'sde') {
        minimo = 16166;
        maximo = 28319;
        js = 25127;
        fb = 17346;
        aa = 16166;
    } else if (destino.toLowerCase() == 'tierra del fuego' || destino.toLowerCase() == 'tdf' || destino.toLowerCase() == 'ushuaia' || destino.toLowerCase() == 'usuahia' || destino.toLowerCase() == 'tierradelfuego') {
        minimo = 40169;
        maximo = 119405;
        js = 45121;
        fb = 44042;
        aa = 40169;
    } else if (destino.toLowerCase() == 'tucumán' || destino.toLowerCase() == 'tucuman') {
        minimo = 14482;
        maximo = 21656;
        js = 16794;
        fb = 16526;
        aa = 14482;
    } else {
        alert('No es válido \nVuelve a intentar');
    }

    if (pasajes == 0) {
        alert('Por favor ingresar una cantidad de pasajes');

    }
    else if (minimo != 0) {
        salida = 'En promedio cada pasaje cuesta: $' + js + ' en JetSMART, $' + fb + ' en Flybondi, y $' + aa + ' en Aerolíneas Argentinas';
        alert('\nEntre $' + minimo*pasajes + ' y $' + maximo*pasajes + '\n\n' + salida);
    }

}
