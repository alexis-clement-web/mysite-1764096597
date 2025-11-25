class LuxuryFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                :host {
                    display: block;
                    background: #f8f8f8;
                    border-top: 1px solid #e5e5e5;
                    margin-top: 80px;
                }

                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 80px 24px 40px;
                }

                .footer-content {
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr;
                    gap: 80px;
                    margin-bottom: 60px;
                }

                .footer-section h3 {
                    font-family: 'Playfair Display', serif;
                    font-size: 18px;
                    font-weight: 400;
                    margin-bottom: 24px;
                    color: #1a1a1a;
                }

                .footer-links {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .footer-link {
                    color: #666666;
                    text-decoration: none;
                    font-size: 14px;
                    transition: color 0.3s ease;
                }

                .footer-link:hover {
                    color: #1a1a1a;
                }

                .footer-bottom {
                    border-top: 1px solid #e5e5e5;
                    padding-top: 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .footer-copyright {
                    color: #666666;
                    font-size: 14px;
                }

                .footer-social {
                    display: flex;
                    gap: 20px;
                }

                .social-link {
                    color: #666666;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .social-link:hover {
                    color: #1a1a1a;
                }

                @media (max-width: 768px) {
                    .footer-container {
                        padding: 60px 16px 32px;
                    }

                    .footer-content {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                }
            </style>
            <footer class="footer-container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>Élégance Immobilière</h3>
                        <p style="color: #666666; font-size: 14px; line-height: 1.6;">
                            Spécialistes de l'immobilier haut de gamme à Bruxelles, 
                            nous vous accompagnons dans la recherche de votre propriété d'exception.
                        </p>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Navigation</h3>
                        <ul class="footer-links">
                            <li><a href="/" class="footer-link">Accueil</a></li>
                            <li><a href="#vente" class="footer-link">À Vendre</a></li>
                            <li><a href="#location" class="footer-link">À Louer</a></li>
                            <li><a href="#contact" class="footer-link">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Contact</h3>
                        <ul class="footer-links">
                            <li class="footer-link">
                                <i data-feather="map-pin"></i>
                                Avenue Louise 123, 1050 Bruxelles
                            </li>
                            <li class="footer-link">
                                <i data-feather="phone"></i>
                                +32 2 123 45 67
                            </li>
                            <li class="footer-link">
                                <i data-feather="mail"></i>
                                contact@elegance-immobilier.be
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <div class="footer-copyright">
                        © 2024 Élégance Immobilière. Tous droits réservés.
                    </div>
                    
                    <div class="footer-social">
                        <a href="#" class="social-link">
                            <i data-feather="facebook"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="instagram"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="linkedin"></i>
                        </a>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('luxury-footer', LuxuryFooter);