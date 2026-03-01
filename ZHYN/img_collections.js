// ================= CONFIGURACIÓN DE IMÁGENES =================

const imageCollections = {
    // Boda
    boda: [
        {
            type: 'image',
            src: 'img/BODA/anillos.JPG',
            caption: 'El símbolo del compromiso',
            description: 'Detalles que marcan el inicio de una historia.',
            alt: 'Anillos de boda sobre superficie elegante'
        },
        {
            type: 'video',
            src: 'img/BODA_V/Trailer Boda Valentina & Felipe Quindio Colombia Wedding Cinematic Video - Matrimonios Colombia Andres Ocampo Wedding (1080p, h264).mp4',
            caption: 'Trailer de la boda',
            description: 'La magia de su día en un formato cinematográfico.',
            alt: 'Video trailer de boda'
        },
        {
            type: 'image',
            src: 'img/BODA/juntos.JPG',
            caption: 'Cómplices de por vida',
            description: 'La conexión genuina de los recién casados.',
            alt: 'Pareja de recién casados abrazados'
        },
        {
            type: 'image',
            src: 'img/BODA/ramo.JPG',
            caption: 'El ramo perfecto',
            description: 'Texturas y sentimientos en un solo elemento.',
            alt: 'Ramo de novia con flores blancas'
        },
        {
            type: 'video',
            src: 'img/BODA_V/RECOB1.mp4',
            caption: 'Lo mejor del día',
            description: 'Un resumen lleno de emociones y alegría.',
            alt: 'Video resumen de boda'
        },
        {
            type: 'image',
            src: 'img/BODA/vestido.JPG',
            caption: 'Elegancia nupcial',
            description: 'Cada pliegue del vestido cuenta una historia.',
            alt: 'Vestido de novia colgado'
        },
        {
            type: 'image',
            src: 'img/BODA/juntosm.JPG',
            caption: 'Miradas que lo dicen todo',
            description: 'Amor en su estado más puro y natural.',
            alt: 'Pareja mirándose a los ojos'
        },
        {
            type: 'image',
            src: 'img/BODA/juntof.JPG',
            caption: 'Un amor sin filtros',
            description: 'La belleza de lo auténtico y espontáneo.',
            alt: 'Pareja riendo juntos'
        },
    ],
    
    // XV años
    xv: [
        {
            type: 'image',
            src: 'img/XV/familiar.JPG',
            caption: 'El lazo familiar',
            description: 'El apoyo incondicional en un gran día.',
            alt: 'Quinceañera con sus padres'
        },
        {
            type: 'video',
            src: 'img/XV_V/AZUL SAM.mp4',
            caption: 'Sueños en movimiento',
            description: 'Un vistazo etéreo a la celebración.',
            alt: 'Video de quinceañera en su fiesta'
        },
        {
            type: 'image',
            src: 'img/XV/lado.JPG',
            caption: 'Elegancia de perfil',
            description: 'La suavidad de la luz natural realza su belleza.',
            alt: 'Quinceañera de perfil'
        },
        {
            type: 'image',
            src: 'img/XV/frente.JPG',
            caption: 'La protagonista',
            description: 'Su mirada refleja la ilusión de sus 15 años.',
            alt: 'Quinceañera mirando a la cámara'
        },
        {
            type: 'video',
            src: 'img/XV_V/RECO1.mp4',
            caption: 'Resumen de ensueño',
            description: 'Los momentos más mágicos de la fiesta.',
            alt: 'Video resumen de XV años'
        },
        {
            type: 'image',
            src: 'img/XV/misa.JPG',
            caption: 'Un momento de fe',
            description: 'La ceremonia, un acto lleno de significado.',
            alt: 'Ceremonia religiosa de XV años'
        },
        {
            type: 'image',
            src: 'img/XV/ncue.JPG',
            caption: 'Magia dorada',
            description: 'La quinceañera bañada por la luz del atardecer.',
            alt: 'Quinceañera con luz dorada'
        },
        {
            type: 'image',
            src: 'img/XV/sola.JPG',
            caption: 'Su gran día',
            description: 'Un retrato íntimo y lleno de ternura.',
            alt: 'Retrato de quinceañera'
        },
        {
            type: 'image',
            src: 'img/XV/familiaa.JPG',
            caption: 'Unión familiar',
            description: 'El amor que siempre la acompañará.',
            alt: 'Familia con quinceañera'
        },
        {
            type: 'image',
            src: 'img/XV/feliz.JPG',
            caption: 'Felicidad desbordante',
            description: 'La alegría de una noche inolvidable.',
            alt: 'Quinceañera sonriendo'
        },
    ],
    
    // Eventos (vacío por ahora)
    eventos: [],
    
    // Sesiones (vacío por ahora)
    sesiones: [],
    
    // Portafolio
    portafolio: [
        {
            type: 'image',
            src: 'img/porfaimg/FB_IMG_1685163955262.jpg',
            caption: 'Nuestra esencia',
            description: 'Calidad visual premium',
            alt: 'Fotografía artística en blanco y negro'
        },
        {
            type: 'video',
            src: 'img/video_portafolio/AQNmgkQnnipEXhVYylXTjVpK_uJujL7uZb4j3PIeN-RUFyyl5d5fKYCWAM1_eu64WwAtpBGux22-MgkdaSDnhRnUWJ7sfjbL-D0Ebk0OPAc1lw.mp4',
            caption: 'Trailer cinematográfico',
            description: 'Momentos en movimiento',
            alt: 'Video trailer cinematográfico'
        },
        {
            type: 'image',
            src: 'img/porfaimg/IMG_4013.JPG',
            caption: 'Luz natural perfecta',
            description: 'Fotografía con alma',
            alt: 'Retrato con luz natural'
        },
        {
            type: 'image',
            src: 'img/porfaimg/IMG_4021.JPG',
            caption: 'Miradas eternas',
            description: 'Capturando emociones reales',
            alt: 'Primer plano de mirada'
        },
        {
            type: 'video',
            src: 'img/video_portafolio/VN20250714_220600.mp4',
            caption: 'Highlights de boda',
            description: 'Resumen cinematográfico',
            alt: 'Video highlights de boda'
        },
        {
            type: 'image',
            src: 'img/porfaimg/IMG_4017.JPG',
            caption: 'Detalles únicos',
            description: 'Cada instante cuenta',
            alt: 'Detalle de decoración'
        },
        {
            type: 'image',
            src: 'img/porfaimg/IMG_20241018_003002_506.jpg',
            caption: 'Magia al atardecer',
            description: 'Colores que enamoran',
            alt: 'Pareja al atardecer'
        },
        {
            type: 'video',
            src: 'img/video_portafolio/ssstik.io_1752793383270.mp4',
            caption: 'Entrada inolvidable',
            description: 'Emoción en cada paso',
            alt: 'Video de entrada a evento'
        },
        {
            type: 'image',
            src: 'img/porfaimg/IMG_20250401_145102915.jpg',
            caption: 'Amor auténtico',
            description: 'Momentos espontáneos',
            alt: 'Pareja en momento espontáneo'
        },
        {
            type: 'image',
            src: 'img/porfaimg/IMG_4041.JPG',
            caption: 'Elegancia clásica',
            description: 'Estilo atemporal',
            alt: 'Retrato elegante'
        },
        {
            type: 'video',
            src: 'img/video_portafolio/AQMwKaPSisjuMxRsQIhZkkdGZwr4hshLZsuaEqQIqQV4eYBzKlyIazl3ajMMfvFQ54lao1qsEVnPmnzaI9Y0xVsV_vUkfojSCTewWLw.mp4',
            caption: 'Primer baile',
            description: 'Recuerdos en movimiento',
            alt: 'Video del primer baile'
        },
        {
            type: 'image',
            src: 'img/porfaimg/IMG_20241018_141914_361.jpg',
            caption: 'Producción y animación',
            description: 'La ceremonia, un acto lleno de significado.',
            alt: 'Momento de ceremonia'
        },
        {
            type: 'image',
            src: 'img/porfaimg/FB_IMG_1685164494787.jpg',
            caption: 'Retrato artístico',
            description: 'Composición cinematográfica',
            alt: 'Retrato artístico con iluminación dramática'
        },
        {
            type: 'video',
            src: 'img/video_portafolio/ssstik.io_@steadiivan_1746985840449.mp4',
            caption: 'Momentos familiares',
            description: 'Unión y alegría',
            alt: 'Video de momentos familiares'
        },
        {
            type: 'image',
            src: 'img/porfaimg/IMG_1827.JPG',
            caption: 'Calidad visual premium',
            description: 'Fotografía con alma',
            alt: 'Toma artística con calidad premium'
        },
        {
            type: 'image',
            src: 'img/porfaimg/ADV2.jpeg',
            caption: 'Lazos de amistad',
            description: 'El apoyo incondicional en un gran día.',
            alt: 'Grupo de amigos celebrando'
        },
        {
            type: 'image',
            src: 'img/porfaimg/ANTO_DA.jpeg',
            caption: 'Noche de fiesta',
            description: 'La alegría de una noche inolvidable.',
            alt: 'Fiesta nocturna con luces'
        },
        {
            type: 'image',
            src: 'img/porfaimg/ANTO.jpeg',
            caption: 'Final perfecto',
            description: 'Historias que trascienden',
            alt: 'Toma final artística'
        },
    ],
    
    // Parejas (vacío por ahora)
    parejas: []
};