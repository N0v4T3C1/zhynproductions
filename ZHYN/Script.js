// script.js - Efectos dinámicos para ZEPHTR

document.addEventListener('DOMContentLoaded', function () {

    /* =========================
       1. Efecto brillo logo
    ========================== */
    const logo = document.querySelector('.logo-circular');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.style.boxShadow = '0 0 50px rgba(255,255,255,0.4)';
            logo.style.transform = 'scale(1.08)';
        });
        logo.addEventListener('mouseleave', () => {
            logo.style.boxShadow = '0 0 40px rgba(255,255,255,0.15)';
            logo.style.transform = 'scale(1)';
        });
    }

    /* =========================
       2. Dropdown menú - VERSIÓN CORREGIDA
    ========================== */
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropbtn = document.querySelector('.dropbtn');

    if (dropdown && dropdownContent && dropbtn) {
        function showDropdown() {
            dropdownContent.style.opacity = '1';
            dropdownContent.style.visibility = 'visible';
            dropdownContent.style.transform = 'translateY(0)';
        }
        
        function hideDropdown() {
            dropdownContent.style.opacity = '0';
            dropdownContent.style.visibility = 'hidden';
            dropdownContent.style.transform = 'translateY(-10px)';
        }
        
        // Mouse events para desktop
        dropdown.addEventListener('mouseenter', showDropdown);
        dropdown.addEventListener('mouseleave', hideDropdown);
        
        // Click events para móvil/tablet
        dropbtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Verificar el estado actual
            const isVisible = window.getComputedStyle(dropdownContent).visibility === 'visible';
            
            if (isVisible) {
                hideDropdown();
            } else {
                showDropdown();
            }
        });
        
        // Cerrar al hacer clic fuera
        document.addEventListener('click', function (e) {
            if (!dropdown.contains(e.target)) {
                hideDropdown();
            }
        });
    }

    /* =========================
       3. Texto interactivo
    ========================== */
    const randomText = document.querySelector('.random-text');
    if (randomText) {
        randomText.addEventListener('dblclick', function () {
            const words = ['visión', 'arte', 'tecnología', 'innovación', 'cinematografía',
                'aéreo', 'estabilización', 'creatividad', 'precisión', 'ZEPHTR'];
            const randomWord = words[Math.floor(Math.random() * words.length)];
            this.textContent += ' ' + randomWord;
            this.style.color = '#fff';
            setTimeout(() => {
                this.style.color = '#ccc';
            }, 300);
        });
    }

    /* =========================
       4. Animación scroll reveal
    ========================== */
    const elements = document.querySelectorAll(
        '.panel, .rectangulo-horizontal, .rectangulo-vertical, .rectangulo-cuadrado, ' +
        '.rectangulo-wide, .rectangulo-medium, .rectangulo-tall, .rectangulo-special, ' +
        '.about-content, .about-image-frame, .social-card, .stat-item'
    );

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) scale(1)';
                    }, index * 80);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        elements.forEach((element) => {
            if (!element.classList.contains('stat-item')) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px) scale(0.98)';
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease';
            }
            observer.observe(element);
        });
    }

    /* =========================
       5. Efectos hover para menú
    ========================== */
    const menuButtons = document.querySelectorAll('.dropdown-content a');
    menuButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = '#222';
        });
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = 'transparent';
        });
    });

    /* =========================
       6. Contador animado (stats)
    ========================== */
    const statNumbers = document.querySelectorAll('.stat-number');

    if (statNumbers.length > 0) {
        const observerStats = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumber = entry.target;
                    const finalValue = statNumber.textContent;
                    const numericValue = parseInt(finalValue.replace(/[^0-9]/g, ''));
                    const prefix = finalValue.includes('+') ? '+' : '';

                    if (!isNaN(numericValue)) {
                        let currentValue = 0;
                        const increment = Math.ceil(numericValue / 50);
                        const timer = setInterval(() => {
                            currentValue += increment;
                            if (currentValue >= numericValue) {
                                statNumber.textContent = prefix + numericValue;
                                clearInterval(timer);
                            } else {
                                statNumber.textContent = prefix + currentValue;
                            }
                        }, 30);
                    }
                    observerStats.unobserve(statNumber);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(stat => {
            observerStats.observe(stat);
        });
    }

    /* =========================
       7. Efecto parallax suave
    ========================== */
    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;
        const header = document.querySelector('header');
        const aboutSection = document.querySelector('.about-section');

        if (header) {
            header.style.backgroundPositionY = scrollY * 0.5 + 'px';
        }
        if (aboutSection) {
            aboutSection.style.backgroundPositionY = scrollY * 0.3 + 'px';
        }
    });

    /* =========================
       8. Tooltips para redes sociales
    ========================== */
    const socialCards = document.querySelectorAll('.social-card');
    socialCards.forEach(card => {
        card.addEventListener('mouseenter', function (e) {
            const platform = this.querySelector('h3')?.textContent || 'Red social';
            this.setAttribute('title', `Síguenos en ${platform}`);
        });
    });

    /* =========================
       9. Botones de galería
    ========================== */
    const btnLeerMas = document.querySelector('.btn-leer-mas');
    const btnComprar = document.querySelector('.btn-comprar');

    if (btnLeerMas) {
        btnLeerMas.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Próximamente: más contenido exclusivo de ZEPHTR');
        });
    }

    if (btnComprar) {
        btnComprar.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Redirigiendo a la tienda oficial...');
        });
    }

    /* =========================
       10. CTA contacto
    ========================== */
    const ctaLink = document.querySelector('.cta-link');
    if (ctaLink) {
        ctaLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Gracias por tu interés. Un asesor se comunicará contigo pronto.');
        });
    }

    /* =========================
       11. SCROLL SUAVE PARA EL MENÚ
    ========================== */
    const menuLinks = document.querySelectorAll('.dropdown-content a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obtener el destino del enlace (ej: #inicio, #nosotros)
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calcular la posición (restando un offset para que no quede pegado al borde)
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                // Scroll suave
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Cerrar el menú después de hacer clic (para móviles)
                const dropdownContent = document.querySelector('.dropdown-content');
                dropdownContent.style.opacity = '0';
                dropdownContent.style.visibility = 'hidden';
                dropdownContent.style.transform = 'translateY(-10px)';
            }
        });
    });

    console.log('ZEPHTR cargado correctamente 🚀');
});
// ===============================
// EFECTOS BOTÓN FLOTANTE WHATSAPP
// ===============================

document.addEventListener('DOMContentLoaded', function () {

    const whatsappBtn = document.querySelector('.whatsapp-ico');

    if (whatsappBtn) {

        // 1️⃣ Animación de entrada
        whatsappBtn.style.transform = "scale(0)";
        whatsappBtn.style.transition = "transform 0.5s ease, box-shadow 0.3s ease";

        setTimeout(() => {
            whatsappBtn.style.transform = "scale(1)";
        }, 400);


        // 2️⃣ Efecto pulso automático cada 4 segundos
        setInterval(() => {
            whatsappBtn.style.boxShadow = "0 0 25px #4dc247";
            
            setTimeout(() => {
                whatsappBtn.style.boxShadow = "2px 2px 6px rgba(0,0,0,0.4)";
            }, 800);

        }, 4000);


        // 3️⃣ Tooltip dinámico
        const tooltip = document.createElement("div");
        tooltip.innerText = "¡Escríbenos por WhatsApp!";
        tooltip.style.position = "fixed";
        tooltip.style.bottom = "85px";
        tooltip.style.right = "25px";
        tooltip.style.background = "#111";
        tooltip.style.color = "#fff";
        tooltip.style.padding = "8px 14px";
        tooltip.style.borderRadius = "20px";
        tooltip.style.fontSize = "14px";
        tooltip.style.opacity = "0";
        tooltip.style.transition = "opacity 0.3s ease";
        tooltip.style.pointerEvents = "none";
        tooltip.style.boxShadow = "0 5px 15px rgba(0,0,0,0.5)";
        document.body.appendChild(tooltip);

        whatsappBtn.addEventListener("mouseenter", () => {
            tooltip.style.opacity = "1";
            whatsappBtn.style.transform = "scale(1.1)";
        });

        whatsappBtn.addEventListener("mouseleave", () => {
            tooltip.style.opacity = "0";
            whatsappBtn.style.transform = "scale(1)";
        });
    }
});
