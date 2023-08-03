document.addEventListener('DOMContentLoaded', function () {
  let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });

  // Para escanear el código de barras
  scanner.addListener('scan', function (content) {
    alert('Código de barras escaneado: ' + content);
    // Aquí puedes manejar el contenido del código de barras como desees.
  });

  // Para escanear el código QR
  scanner.addListener('content', function (content) {
    alert('Código QR escaneado: ' + content);
    // Aquí puedes manejar el contenido del código QR como desees.
  });

  // Comenzar a la escucha de la cámara
  Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
      scanner.start(cameras[0]);
    } else {
      console.error('No se encontró cámara en el dispositivo.');
    }
  }).catch(function (e) {
    console.error(e);
  });
});
