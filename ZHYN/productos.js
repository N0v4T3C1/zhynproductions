// ================= PRODUCTOS.JS - LÓGICA PRINCIPAL =================

let currentImages = [];
let currentIndex = 0;

// ================= DETECTAR PÁGINA =================
function getCurrentPage() {
    const path = window.location.pathname.toLowerCase();
    const filename = path.split('/').pop() || '';

    if (filename.includes('boda')) return 'boda';
    if (filename.includes('xv')) return 'xv';
    if (filename.includes('eventos')) return 'eventos';
    if (filename.includes('sesiones')) return 'sesiones';
    if (filename.includes('portafolio')) return 'portafolio';
    if (filename.includes('parejas')) return 'parejas';

    return 'portafolio'; // Página por defecto
}

// ================= GENERAR COLLAGE =================
function generateCollage(categoria) {
    const images = imageCollections[categoria];
    const grid = document.getElementById('collageGrid');

    if (!grid) {
        console.error('No se encontró el elemento collageGrid');
        return;
    }
    
    if (!images || images.length === 0) {
        grid.innerHTML = '<div class="mensaje-vacio" style="grid-column: 1/-1; text-align: center; padding: 4rem; color: #666;">Próximamente más contenido</div>';
        currentImages = [];
        return;
    }

    grid.innerHTML = '';
    currentImages = images;

    images.forEach((item, index) => {
        const collageItem = document.createElement('div');
        collageItem.className = 'collage-item';
        
        // Asignar clases de tamaño aleatorias para variedad visual
        const randomClass = Math.random();
        if (randomClass < 0.2) {
            collageItem.classList.add('wide');
        } else if (randomClass < 0.35) {
            collageItem.classList.add('tall');
        } else if (randomClass < 0.5) {
            collageItem.classList.add('large');
        }

        if (item.type === 'video') {
            // Crear elemento de video optimizado
            const video = document.createElement('video');
            video.muted = true;
            video.loop = true;
            video.playsInline = true;
            
            // Configurar para carga diferida
            videoOptimizer.setupVideo(video, item.src);
            
            collageItem.appendChild(video);
        } else {
            // Crear elemento de imagen
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.alt || item.caption;
            img.loading = 'lazy';
            collageItem.appendChild(img);
        }

        // Agregar caption
        const caption = document.createElement('div');
        caption.className = 'collage-caption';
        caption.innerHTML = `
            <h3>${item.caption}</h3>
            <p>${item.description}</p>
        `;
        collageItem.appendChild(caption);

        // Agregar evento de clic
        collageItem.addEventListener('click', () => openModal(index));

        grid.appendChild(collageItem);
    });

    // Inicializar optimización de videos después de generar collage
    setTimeout(() => {
        videoOptimizer.initVideoObserver();
    }, 100);
}

// ================= FUNCIONES DEL MODAL =================
function openModal(index) {
    const modal = document.getElementById('imageModal');
    const modalMedia = document.getElementById('modalMedia');
    const modalCaption = document.getElementById('modalCaption');

    if (!modal || !modalMedia || !modalCaption) {
        console.error('No se encontraron elementos del modal');
        return;
    }

    if (!currentImages || currentImages.length === 0) {
        return;
    }

    currentIndex = index;
    modal.style.display = 'flex';
    modalMedia.innerHTML = ''; // Limpiar contenido anterior

    const item = currentImages[index];
    
    if (!item) {
        console.error('No hay item en el índice:', index);
        return;
    }

    console.log('Abriendo modal:', item.type, item.src);

    // Crear contenedor para centrar el contenido
    const mediaContainer = document.createElement('div');
    mediaContainer.style.width = '100%';
    mediaContainer.style.height = '100%';
    mediaContainer.style.display = 'flex';
    mediaContainer.style.justifyContent = 'center';
    mediaContainer.style.alignItems = 'center';
    
    if (item.type === 'video') {
        // Crear video
        const video = document.createElement('video');
        video.src = item.src;
        video.controls = true;
        video.autoplay = true;
        
        // Estilos
        video.style.maxWidth = '95vw';
        video.style.maxHeight = '85vh';
        video.style.width = 'auto';
        video.style.height = 'auto';
        video.style.objectFit = 'contain';
        video.style.borderRadius = '4px';
        
        // Manejar errores
        video.onerror = function() {
            console.error('Error cargando video:', item.src);
            mediaContainer.innerHTML = `
                <div style="color: white; text-align: center; padding: 20px;">
                    <h3>Error al cargar el video</h3>
                    <p>Formato no soportado o archivo no encontrado</p>
                </div>
            `;
        };
        
        mediaContainer.appendChild(video);
        
        // Intentar reproducir
        video.play().catch(e => {
            console.log('Autoplay bloqueado por el navegador');
        });
        
    } else {
        // Crear imagen
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt || item.caption;
        img.className = 'modal-image';
        
        // Manejar error de carga
        img.onerror = function() {
            console.error('Error cargando imagen:', item.src);
            mediaContainer.innerHTML = `
                <div style="color: white; text-align: center; padding: 20px;">
                    <h3>Error al cargar la imagen</h3>
                    <p>Archivo no encontrado</p>
                </div>
            `;
        };
        
        mediaContainer.appendChild(img);
    }
    
    modalMedia.appendChild(mediaContainer);

    // Actualizar caption
    modalCaption.innerHTML = `
        <h3 style="color: white; margin: 0 0 5px 0;">${item.caption}</h3>
        <p style="color: #ccc; margin: 0;">${item.description}</p>
    `;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    const modalMedia = document.getElementById('modalMedia');
    
    if (modal) {
        modal.style.display = 'none';
    }
    
    if (modalMedia) {
        // Pausar todos los videos
        const videos = modalMedia.querySelectorAll('video');
        videos.forEach(video => {
            video.pause();
        });
        modalMedia.innerHTML = '';
    }
}

function showNext() {
    if (currentImages.length > 0) {
        currentIndex = (currentIndex + 1) % currentImages.length;
        openModal(currentIndex);
    }
}

function showPrev() {
    if (currentImages.length > 0) {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        openModal(currentIndex);
    }
}

// ================= INICIALIZACIÓN =================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada, inicializando...');
    
    const currentPage = getCurrentPage();
    console.log('Página actual:', currentPage);
    
    // Generar collage
    generateCollage(currentPage);

    // Configurar eventos del modal
    const closeBtn = document.querySelector('.modal-close');
    const nextBtn = document.getElementById('nextImage');
    const prevBtn = document.getElementById('prevImage');
    const modal = document.getElementById('imageModal');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', showNext);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', showPrev);
    }

    if (modal) {
        // Cerrar al hacer clic fuera del contenido
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Eventos de teclado
    document.addEventListener('keydown', (e) => {
        if (modal && modal.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowRight') {
                showNext();
            } else if (e.key === 'ArrowLeft') {
                showPrev();
            }
        }
    });
    
    // Pausar videos al cambiar de página
    window.addEventListener('beforeunload', () => {
        videoOptimizer.pauseAllVideos();
    });
});