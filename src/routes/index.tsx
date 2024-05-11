import { component$, useStore, useVisibleTask$, $} from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';
import type { DocumentHead } from "@builder.io/qwik-city";
// import { useAOS } from "@cloudgakkai/qwik-aos";
import { useAOS } from "../hooks/useAos";

import planet from "/public/media/home/planet.webp";
import spatio from "/public/media/home/spatio.webp";
import spatioStand from "/public/media/home/spatio-stand.webp";
import rocket from "/public/media/home/rocket.svg";
// import price from "/public/media/home/price.svg";
import arrow from "/public/media/home/IcOutlineArrowBackIosNew.svg";
import arrowr from "/public/media/home/IcOutlineArrowForwardIosNew.svg";

// Import images dynamically if possible, or define base path and use it in src
const basePath = "/media/tech/";

export default component$(() => {
    // Array of tool objects
    const tools = Array.from({ length: 39 }, (_, i) => ({
        src: `${basePath}${String(i + 1).padStart(3, '0')}.webp`,
        alt: `Tool ${i + 1}`
    }));

    // Why us slider
    const state = useStore({ currentSlide: 1, maxSlides: 12 });

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        const updateSlide = () => {
            state.currentSlide = (state.currentSlide % state.maxSlides) + 1;
        };

        const intervalId = setInterval(updateSlide, 4000);

        return () => clearInterval(intervalId);
    });

    const changeStep = $((index: number) => {
        state.currentSlide = index; // Directly update the state
        const slideEl = document.getElementById('slider');
        if (slideEl) {
            slideEl.setAttribute('slide-step', index.toString());
        } else {
            console.error('Slider element not found');
        }
    });

    const { aosInit } = useAOS();

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(
        () => {
        aosInit();
        },
        { strategy: "document-ready" }
    );

    return (
        <>
            {/* Hero section */}
            <section id="hero">
                <div class="content">
                    <div class="intro">
                        <h1>Rendez votre entreprise visible à l'international</h1>
                        <p>Démarrer dès maintenant la conception de votre site web avec Ohayo Dev & Design pour viser un public mondial avec un service accessible partout 24h/24 et 07j/07.</p>
                    </div>
                    <div class="c-t-a">
                        <Link href='/concevoir-site-web'>Démarrer maintenant <span><img src={rocket} alt="rocket icon" width={30} height={30}/></span></Link>
                        {/* <div>Demander un devis<span><img src={price} alt="rocket icon" width={30} height={30}/></span></div> */}
                    </div>
                </div>

                <div class="bg-h planet"><img src={planet} alt="" width={894} height={894}/></div>
                <div class="bg-h spatio"><img src={spatio} alt="" width={621} height={826}/></div>
            </section>

            {/* Why us section */}
            <section id="reason" class="container">
                <div class="portfolio" data-aos="fade-up">
                    <h2>Voir nos portfolio :</h2>
                    <div class="portfolios">
                        <span class="front">
                            <a href="https://dokja620.github.io/portefolio" target="_blank">Développeur Front-End</a>
                        </span>
                        <span>
                            <a href="https://rjauniix.github.io/Portfolio/" target="_blank">Développeur Back-End</a>
                        </span>
                        <span>
                            <a href="https://jenna-wendy.github.io/Portefolio" target="_blank">UX / UI Designer</a>
                        </span>
                        <span>
                            <a href="https://jenna-wendy.github.io/Portefolio" target="_blank">Rédacteur Web</a>
                        </span>
                        <span>
                            <a href="https://tantelyflorence.github.io/portfolio-tantely" target="_blank">SEO Analyst</a>
                        </span>
                    </div>
                    <div class="spatio-stand">
                        <img src={spatioStand} alt="standing spationaute" width={323} height={934}/>
                    </div>
                </div>
                <div class="content fact" data-aos="fade-up">
                    <h2>Pourquoi nous ?</h2>
                    <div class="slider" id="slider" slide-step={state.currentSlide}>
                        <div class="wrap slides-1">
                            <h3>Responsive Design :</h3>
                            <p>Tous les sites web que nous concevons sont garantis 100% responsives, assurant une expérience utilisateur optimale sur tous les appareils.</p>
                        </div>
                        <div class="wrap slides-2">
                            <h3>Site web sécurisé :</h3>
                            <p>Chaque site que nous développons intègre des mesures de sécurité, y compris un certificat SSL.</p>
                        </div>
                        <div class="wrap slides-3">
                            <h3>Site web optimisisé :</h3>
                            <p>Nous prenons en charge l'optimisation de chaque site web que nous créons pour améliorer ses performances et sa visibilité.</p>
                        </div>
                        <div class="wrap slides-4">
                            <h3>Hébergement offert :</h3>
                            <p>Nous offrons l'hébergement pour la première année avec un email professionnel.</p>
                        </div>
                        <div class="wrap slides-5">
                            <h3>Expertise spécialisée :</h3>
                            <p>Notre équipe comprend des spécialistes dans tous les domaines nécessaires pour optimiser votre site web au maximum et répondre à tous vos besoins.</p>
                        </div>
                        <div class="wrap slides-6">
                            <h3>Flexibilité de développement :</h3>
                            <p>Selon vos besoins, moyens et préférences, vous avez le choix entre un développement full code pour une personnalisation maximale ou low code pour une mise en œuvre rapide.</p>
                        </div>
                        <div class="wrap slides-7">
                            <h3>Ressources supplémentaires :</h3>
                            <p>Nous mettons  à la disposition de bos clients un e-book gratuit pour répondre à toutes vos questions, vous guidant à travers chaque étape de la conception de votre site.</p>
                        </div>
                        <div class="wrap slides-8">
                            <h3>Analyse personnalisée :</h3>
                            <p>Nous pouvons offrir une analyse détaillée de votre site existant, si nécessaire, pour identifier les améliorations potentielles.</p>
                        </div>
                        <div class="wrap slides-9">
                            <h3>Facilités de paiement :</h3>
                            <p>Nous offrons la possibilité de régler en plusieurs fois pour faciliter l'accès à nos services.</p>
                        </div>
                        <div class="wrap slides-10">
                            <h3>Écoute et personnalisation :</h3>
                            <p>Notre équipe travaille en étroite collaboration avec vous pour s'assurer que le site final reflète parfaitement votre vision, prête à effectuer les ajustements nécessaires jusqu'à votre entière satisfaction.</p>
                        </div>
                        <div class="wrap slides-11">
                            <h3>Support continu :</h3>
                            <p>La possibilité d'engager nos spécialistes à tout moment du projet assure un soutien constant et une adaptabilité à vos besoins évolutifs.</p>
                        </div>
                        <div class="wrap slides-12">
                            <h3>Site web sécurisé :</h3>
                            <p>Pour ceux qui en ont besoin, nous prenons en charge le processus d'hébergement de votre site, gratuitement.</p>
                        </div>
                        <div class="pagination">
                            <div onClick$={(event) => {event.preventDefault(); changeStep(1);}}></div>
                            <div onClick$={(event) => {event.preventDefault(); changeStep(2);}}></div>
                            <div onClick$={(event) => {event.preventDefault(); changeStep(3);}}></div>
                            <div onClick$={(event) => {event.preventDefault(); changeStep(4);}}></div>
                            <div onClick$={(event) => {event.preventDefault(); changeStep(5);}}></div>
                            <div onClick$={(event) => {event.preventDefault(); changeStep(6);}}></div>
                            <div onClick$={(event) => {event.preventDefault(); changeStep(7);}}></div>
                            <div onClick$={(event) => {event.preventDefault(); changeStep(8);}}></div>
                            <div onClick$={(event) => {event.preventDefault(); changeStep(9);}}></div>
                            <div onClick$={(event) => {event.preventDefault(); changeStep(10);}}></div>
                            <div onClick$={(event) => {event.preventDefault(); changeStep(11);}}></div>
                            <div onClick$={(event) => {event.preventDefault(); changeStep(12);}}></div>
                        </div>
                        <div class="navigation">
                            <div class="left" onClick$={(event) => {
                                event.preventDefault();
                                changeStep(state.currentSlide > 1 ? state.currentSlide - 1 : state.maxSlides);
                            }}>
                                <img src={arrow} alt="back arrow" width={50} height={50}/>
                            </div>
                            <div class="right" onClick$={(event) => {
                                event.preventDefault();
                                changeStep(state.currentSlide < state.maxSlides ? state.currentSlide + 1 : 1);
                            }}>
                                <img src={arrowr} alt="forward arrow" width={50} height={50}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infinite skills slider section */}
            <section id="scroll" data-aos="fade-down">
                <div class="content">
                    <h2>Nous maitrisons :</h2>
                    <div class="scroll">
                        <div class="tools">
                            {tools.map(tool => (
                                <span key={tool.src}>
                                    <img src={tool.src} alt={tool.alt} width={75} height={75}/>
                                </span>
                            ))}
                        </div>
                        <div class="tools"> 
                            {tools.map(tool => (
                                <span key={tool.src}>
                                    <img src={tool.src} alt={tool.alt} width={75} height={75}/>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section id="visit" class="container" data-aos="fade-down">
                <div class="home-links">
                    <Link href="/a-propos">Qui sommes-nous ?</Link>
                    <Link href="/portefolio">Aperçu de notre travail</Link>
                    {/* <Link href="/publication-web">Nos publications</Link> */}
                    <Link href="/concevoir-site-web">Faire une commande</Link>
                </div>
            </section>
        </>
    );
});

export const head: DocumentHead = {
    title: "Ohayo Dev & Design | Acceuil",
    meta: [
        {
            name: "description",
            content: "Découvrez Ohayo Dev & Design, votre partenaire de choix pour des solutions web complètes. De la conception front-end et back-end au design UX/UI et à l'optimisation SEO, notre équipe d'experts est dédiée à transformer votre présence numérique. Explorez nos services et laissez-nous vous aider à réussir en ligne.",
        },
    ],
};