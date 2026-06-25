let jugador = "";
let indice = 0;
let aciertos = 0;

const imagenes = [

    {
        src: "nivel1.jpg",
        respuesta: "ia",
        nivel: 1
    },

    {
        src: "IA nivel 1.webp.webp",
        respuesta: "ia",
        nivel: 1
    },

    {
        src: "IA nivel 1,.webp.webp",
        respuesta: "ia",
        nivel: 1
    },

    {
        src: "real1.jpg",
        respuesta: "real",
        nivel: 1
    },

    {
        src: "realnive1.jpg",
        respuesta: "real",
        nivel: 1
    },

    {
        src: "nivel2.jpg",
        respuesta: "real",
        nivel: 2
    },

    {
        src: "realnivel2,. JPG.jpg",
        respuesta: "real",
        nivel: 2
    },

    {
        src: "realnivel2,,. JPG.jpg",
        respuesta: "real",
        nivel: 2
    },

    {
        src: "IAnivel2.PNG.png",
        respuesta: "ia",
        nivel: 2
    },

    {
        src: "Nivel 2,.. PNG.png",
        respuesta: "ia",
        nivel: 2
    }

];

function iniciarJuego() {

    jugador = document.getElementById("nombre").value;

    if (jugador.trim() === "") {
        alert("Ingresá tu nombre");
        return;
    }

    document.getElementById("inicio").style.display = "none";
    document.getElementById("juego").style.display = "block";

    cargarImagen();
}

function cargarImagen() {

    const actual = imagenes[indice];

    document.getElementById("imagenJuego").src = actual.src;

    document.getElementById("contador").innerHTML =
        "Imagen " + (indice + 1) + " de 10";

    document.getElementById("nivelActual").innerHTML =
        actual.nivel === 1
            ? "🟢 Nivel 1 - Fácil"
            : "🔴 Nivel 2 - Difícil";

    document.getElementById("mensajeJugador").innerHTML =
        "¡Vamos " + jugador + "!";
}

function responder(opcion) {

    if (opcion === imagenes[indice].respuesta) {
        aciertos++;
    }

    indice++;

    if (indice === 5) {

        document.getElementById("juego").style.display = "none";
        document.getElementById("nivel2").style.display = "block";
        return;
    }

    if (indice >= imagenes.length) {

        mostrarResultados();
        return;
    }

    cargarImagen();
}

function comenzarNivel2() {

    document.getElementById("nivel2").style.display = "none";
    document.getElementById("juego").style.display = "block";

    cargarImagen();
}

function mostrarResultados() {

    document.getElementById("juego").style.display = "none";
    document.getElementById("resultado").style.display = "block";

    let porcentaje =
        Math.round((aciertos / 10) * 100);

    document.getElementById("nombreFinal").innerHTML =
        jugador;

    document.getElementById("estadisticas").innerHTML =

        "<p>Aciertos: <b>" +
        aciertos +
        "/10</b></p>" +

        "<p>Precisión: <b>" +
        porcentaje +
        "%</b></p>";

    document.getElementById("conclusion").innerHTML =

        porcentaje >= 70
            ? "🏆 Excelente desempeño detectando imágenes generadas por IA."
            : "💡 La IA puede engañarnos. Observá más detalles la próxima vez.";

    document.getElementById("certificado").innerHTML =

        "<h2>🏆 CERTIFICADO</h2>" +
        "<h3>" + jugador + "</h3>" +
        "<h1>" + porcentaje + "%</h1>" +
        "<p>ISFT N°244</p>";
}

function reiniciar() {

    location.reload();
}
