// Obtener el elemento de video y el lienzo
let video = document.getElementById('video');
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

// Crear un escáner
let scanner = new Instascan.Scanner({ video: video });

// Escanear el código de barras o QR
scanner.addListener('scan', function(content) {
  alert('Código escaneado: ' + content);
});

// Iniciar la cámara
Instascan.Camera.getCameras().then(function(cameras) {
  if (cameras.length > 0) {
    scanner.start(cameras[0]);
  } else {
    console.error('No se encontraron cámaras en el dispositivo.');
  }
}).catch(function(error) {
  console.error(error);
});
