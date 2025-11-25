class LuxuryHero extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                :host {
                    display: block;
                    height: 100vh;
                    position: relative;
                    overflow: hidden;
                }

                .hero-container {
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }

                .hero-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
                    z-index: -1;
                }

                .hero-background img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .hero-content {
                    text-align: center;
                    color: white;
                    max-width: 800px;
                    padding: 0 24px;
                }

                .hero-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 4.5rem;
                    font-weight: 300;
                    line-height: 1.1;
                    margin-bottom: 24px;
                    letter-spacing: -0.03em;
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeInUp 1s ease 0.5s forwards;
                }

                .hero-subtitle {
                    font-size: 1.25rem;
                    font-weight: 300;
                    margin-bottom: 48px;
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeInUp 1s ease 0.8s forwards;
                }

                .scroll-indicator {
                    position: absolute;
                    bottom: 40px;
                    left: 50%;
                    transform: translateX(-50%);
                    color: white;
                    opacity: 0;
                    animation: fadeIn 1s ease 1.2s forwards;
                    cursor: pointer;
                }

                .scroll-indicator i {
                    animation: bounce 2s infinite;
                }

                @keyframes fadeInUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeIn {
                    to {
                        opacity: 1;
                    }
                }

                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {
                        transform: translateY(0);
                    }
                    40% {
                        transform: translateY(-10px);
                    }
                    60% {
                        transform: translateY(-5px);
                    }
                }

                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 2.5rem;
                    }
                    
                    .hero-subtitle {
                        font-size: 1.125rem;
                    }
                }
            </style>
            <div class="hero-container">
                <div class="hero-background">
                    <img src="https://media.istockphoto.com/id/1221865645/fr/photo/maison-moderne-de-luxe.jpg?s=612x612&w=0&k=20&c=ewXnZ5bLm7lXFlbKUi74J0rwdwprQvFUgrascZdhIcU=" alt="Maison moderne de luxe">
                </div>
<div class="hero-content">
                    <h1 class="hero-title">L'excellence immobilière réinventée</h1>
                    <p class="hero-subtitle">Découvrez notre sélection de propriétés d'exception à Bruxelles et ses environs</p>
                    <a href="#vente" class="luxury-btn secondary">Explorer nos biens</a>
                </div>
                
                <a href="#vente" class="scroll-indicator">
                    <i data-feather="chevron-down"></i>
                </a>
            </div>
        `;

        // Initialize scroll functionality
        this.initScrollIndicator();
    }

    initScrollIndicator() {
        const scrollIndicator = this.shadowRoot.querySelector('.scroll-indicator');
        
        scrollIndicator.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector('#vente');
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

customElements.define('luxury-hero', LuxuryHero);