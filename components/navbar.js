class LuxuryNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid #e5e5e5;
                    transition: all 0.3s ease;
                }

                .navbar-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 24px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 80px;
                }

                .logo {
                    font-family: 'Playfair Display', serif;
                    font-size: 24px;
                    font-weight: 300;
                    color: #1a1a1a;
                    text-decoration: none;
                    letter-spacing: -0.02em;
                }

                .nav-links {
                    display: flex;
                    list-style: none;
                    gap: 48px;
                    align-items: center;
                }

                .nav-link {
                    text-decoration: none;
                    color: #666666;
                    font-size: 14px;
                    font-weight: 400;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                    transition: color 0.3s ease;
                    position: relative;
                }

                .nav-link:hover {
                    color: #1a1a1a;
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background: #1a1a1a;
                    transition: width 0.3s ease;
                }

                .nav-link:hover::after {
                    width: 100%;
                }

                .contact-info {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: #666666;
                    font-size: 14px;
                }

                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #1a1a1a;
                }

                @media (max-width: 768px) {
                    .navbar-container {
                        height: 70px;
                        padding: 0 16px;
                    }

                    .nav-links {
                        display: none;
                    }

                    .contact-info {
                        display: none;
                    }

                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            <nav class="navbar-container">
                <a href="/" class="logo">Élégance Immobilière</a>
                
                <ul class="nav-links">
                    <li><a href="#vente" class="nav-link">À Vendre</a></li>
                    <li><a href="#location" class="nav-link">À Louer</a></li>
                    <li><a href="#contact" class="nav-link">Contact</a></li>
                </ul>
                
                <div class="contact-info">
                    <div class="contact-item">
                        <i data-feather="phone"></i>
                        <span>+32 2 123 45 67</span>
                    </div>
                    
                    <button class="mobile-menu-btn">
                        <i data-feather="menu"></i>
                    </button>
                </div>
            </nav>
        `;

        // Initialize mobile menu
        this.initMobileMenu();
        
        // Handle scroll effects
        this.handleScroll();
    }

    initMobileMenu() {
        const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        const contactInfo = this.shadowRoot.querySelector('.contact-info');

        menuBtn.addEventListener('click', () => {
            const isOpen = navLinks.style.display === 'flex';
            
            if (isOpen) {
                navLinks.style.display = 'none';
                contactInfo.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                contactInfo.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'rgba(255, 255, 255, 0.98)';
                navLinks.style.backdropFilter = 'blur(10px)';
                navLinks.style.padding = '32px 24px';
                navLinks.style.gap = '24px';
            }
        });
    }

    handleScroll() {
        let lastScrollY = window.scrollY;
        
        const updateNavbar = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                this.style.transform = 'translateY(-100%)';
            } else {
                this.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', updateScroll, { passive: true });

        function updateScroll() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateNavbar();
                    ticking = false;
                });
                ticking = true;
            }
        }
    }
}

customElements.define('luxury-navbar', LuxuryNavbar);