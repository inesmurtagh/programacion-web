    // botones
    const facebook = document.getElementById('youtube-button');
    const wpp = document.getElementById('whatsapp-button');
    const instagram = document.getElementById('instagram-button');

    // Agrega eventos de clic a los botones
    facebook.addEventListener('click', compartirYoutube);
    wpp.addEventListener('click', compartirWPP);
    instagram.addEventListener('click', compartirInstagram);
    
    // Función para compartir en las distintas redes sociales
    function compartirYoutube() {
      const url = 'https://youtube.com/@inesmurtagh9804';
      window.open(url, '_blank');
    }

    function compartirWPP() {
      const url = 'https://api.whatsapp.com/send?phone=5491155664961';
      window.open(url, '_blank');
    }

    function compartirInstagram() {
      const url = 'https://www.instagram.com/departedeine/';
      window.open(url, '_blank');
    }

