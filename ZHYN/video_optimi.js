// ================= OPTIMIZACIÓN DE VIDEOS =================

class VideoOptimizer {
    constructor() {
        this.observer = null;
        this.initialized = false;
    }

    // Inicializar observador de videos
    initVideoObserver() {
        if (this.initialized) return;
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const video = entry.target;
                
                if (entry.isIntersecting) {
                    // Video visible - cargar
                    if (video.dataset.src && !video.src) {
                        video.src = video.dataset.src;
                        video.load();
                        
                        // Reproducir si está en vista (muted para autoplay)
                        if (video.muted) {
                            video.play().catch(e => console.log('Autoplay bloqueado'));
                        }
                    }
                } else {
                    // Video no visible - pausar
                    video.pause();
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '100px'
        });

        // Observar todos los videos
        document.querySelectorAll('video[data-src]').forEach(video => {
            this.observer.observe(video);
        });

        this.initialized = true;
    }

    // Configurar un video para optimización
    setupVideo(video, src) {
        video.dataset.src = src;
        video.preload = 'metadata'; // Solo cargar metadatos
        video.muted = true; // Importante para autoplay
        video.playsInline = true;
        
        // Quitar src inicial para evitar carga automática
        video.removeAttribute('src');
        video.load();
        
        return video;
    }

    // Limpiar videos al cerrar modal
    cleanupVideos() {
        document.querySelectorAll('.modal video').forEach(video => {
            video.pause();
        });
    }

    // Pausar todos los videos (útil al cambiar de página)
    pauseAllVideos() {
        document.querySelectorAll('video').forEach(video => {
            video.pause();
        });
    }
}

// Crear instancia global
const videoOptimizer = new VideoOptimizer();