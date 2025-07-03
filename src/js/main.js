// Importar módulos
import './modules/navigation';
import './modules/slider';
import './modules/forms';
import './modules/animations';

// Función principal de inicialización
document.addEventListener('DOMContentLoaded', function() {
    console.log('Capiro Corp Website - Cargado');
    
    // Inicializar componentes
    initComponents();
    
    // Configurar eventos globales
    setupGlobalEvents();
});

// Inicializar todos los componentes
function initComponents() {
    // Navegación móvil
    initMobileNavigation();
    
    // Sliders
    initSliders();
    
    // Formularios
    initForms();
    
    // Animaciones
    initAnimations();
}

// Configurar eventos globales
function setupGlobalEvents() {
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Lazy loading para imágenes
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Exportar funciones para uso en otros módulos
export { initComponents, setupGlobalEvents };

// Capiro Corp - JavaScript Principal
// Funcionalidades para el diseño blueprint

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== MENÚ RESPONSIVE =====
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('nav-menu--active');
            menuToggle.classList.toggle('menu-toggle--active');
            document.body.classList.toggle('no-scroll');
        });
        
        // Cerrar menú al hacer click en un enlace
        const navLinks = document.querySelectorAll('.nav-menu__link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('nav-menu--active');
                menuToggle.classList.remove('menu-toggle--active');
                document.body.classList.remove('no-scroll');
            });
        });
    }
    
    // ===== HEADER SCROLL EFFECT =====
    function handleHeaderScroll() {
        if (window.scrollY > 100) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    }
    
    window.addEventListener('scroll', handleHeaderScroll);
    
    // ===== SCROLL SUAVE =====
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== ANIMACIONES AL SCROLL =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Elementos a animar
    const animateElements = document.querySelectorAll('.service-step, .project-card, .advantage-item, .stat');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // ===== CONTADORES ANIMADOS =====
    function animateCounters() {
        const counters = document.querySelectorAll('.stat__number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace(/\D/g, ''));
            const duration = 2000; // 2 segundos
            const increment = target / (duration / 16); // 60fps
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current) + (counter.textContent.includes('+') ? '+' : '') + 
                                        (counter.textContent.includes('%') ? '%' : '');
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = counter.textContent.replace(/\d+/, target);
                }
            };
            
            updateCounter();
        });
    }
    
    // Activar contadores cuando la sección about esté visible
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        const aboutObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    aboutObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        aboutObserver.observe(aboutSection);
    }
    
    // ===== TIMELINE ANIMATION =====
    function animateTimeline() {
        const timelineSteps = document.querySelectorAll('.service-step');
        
        timelineSteps.forEach((step, index) => {
            setTimeout(() => {
                step.classList.add('service-step--visible');
            }, index * 300);
        });
    }
    
    // Activar timeline cuando la sección servicios esté visible
    const servicesSection = document.querySelector('.services');
    if (servicesSection) {
        const servicesObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateTimeline();
                    servicesObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        servicesObserver.observe(servicesSection);
    }
    
    // ===== FORMULARIO DE CONTACTO =====
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const name = this.querySelector('input[name="name"]').value.trim();
            const email = this.querySelector('input[name="email"]').value.trim();
            const message = this.querySelector('textarea[name="message"]').value.trim();
            
            if (!name || !email || !message) {
                showNotification('Por favor, completa todos los campos', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Por favor, ingresa un email válido', 'error');
                return;
            }
            
            // Simular envío
            showNotification('Enviando mensaje...', 'info');
            
            setTimeout(() => {
                showNotification('¡Mensaje enviado exitosamente!', 'success');
                this.reset();
            }, 2000);
        });
    }
    
    // ===== FUNCIONES AUXILIARES =====
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showNotification(message, type = 'info') {
        // Crear notificación
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification__content">
                <span class="notification__message">${message}</span>
                <button class="notification__close">&times;</button>
            </div>
        `;
        
        // Agregar estilos
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animar entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Cerrar notificación
        const closeBtn = notification.querySelector('.notification__close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        });
        
        // Auto-cerrar después de 5 segundos
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 300);
            }
        }, 5000);
    }
    
    // ===== BLUEPRINT GRID ANIMATION =====
    function initBlueprintGrid() {
        const heroGrid = document.querySelector('.hero__blueprint-grid');
        if (heroGrid) {
            // Agregar efecto de movimiento sutil al grid
            let offset = 0;
            setInterval(() => {
                offset += 0.5;
                heroGrid.style.backgroundPosition = `${offset}px ${offset}px`;
            }, 50);
        }
    }
    
    initBlueprintGrid();
    
    // ===== LAZY LOADING PARA IMÁGENES =====
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // ===== PERFORMANCE: THROTTLE SCROLL EVENTS =====
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    // Aplicar throttle al scroll
    window.addEventListener('scroll', throttle(handleHeaderScroll, 16));
    
    console.log('🎨 Capiro Corp - Blueprint Style inicializado correctamente');
});

// ===== UTILIDADES GLOBALES =====
window.CapiroUtils = {
    // Función para mostrar/ocultar loader
    showLoader: function() {
        const loader = document.createElement('div');
        loader.className = 'loader';
        loader.innerHTML = `
            <div class="loader__content">
                <div class="loader__spinner"></div>
                <p>Cargando...</p>
            </div>
        `;
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(15, 39, 70, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            color: white;
            font-family: 'Poppins', sans-serif;
        `;
        document.body.appendChild(loader);
    },
    
    hideLoader: function() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.remove();
        }
    }
}; 