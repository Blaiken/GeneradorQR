function GenerarCodigoQR() {
    const direccionURL = document.getElementById("direccionURL").value.trim();
    const codigoQR = document.getElementById("codigoQR");

    if (direccionURL === "") {
        mostrarNotificacion();
        return;
    }

    // Usa una api llamada "GoQR"
    const apiURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(direccionURL)}`;

    codigoQR.src = apiURL;

    document.getElementById("contenedor-qr").style.display = "flex";
}

function mostrarNotificacion() {
    document.getElementById("notificacion-msg").style.display = "flex";
}

function cerrarNotificacion() {
    document.getElementById("notificacion-msg").style.display = "none";
}