import { component$ } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';
import type { DocumentHead } from "@builder.io/qwik-city";

import planet from "/media/home/planet.webp";
import spatio from "/media/home/spatio.webp";
import spatioStand from "/media/home/spatio-stand.webp";

// Import images dynamically if possible, or define base path and use it in src
const basePath = "/media/tech/";

export default component$(() => {
    // Array of tool objects
    const toolsA = Array.from({ length: 4 }, (_, i) => ({
        src: `${basePath}${String(i + 1).padStart(3, '0')}.webp`,
        alt: `Tool ${i + 1}`
    }));
    const toolsB = Array.from({ length: 4 }, (_, i) => ({
        src: `${basePath}${String(i + 5).padStart(3, '0')}.webp`,
        alt: `Tool ${i + 5}`
    }));
    const toolsC = Array.from({ length: 4 }, (_, i) => ({
        src: `${basePath}${String(i + 9).padStart(3, '0')}.webp`,
        alt: `Tool ${i + 9}`
    }));
    const toolsD = Array.from({ length: 4 }, (_, i) => ({
        src: `${basePath}${String(i + 13).padStart(3, '0')}.webp`,
        alt: `Tool ${i + 13}`
    }));
    const toolsE = Array.from({ length: 4 }, (_, i) => ({
        src: `${basePath}${String(i + 17).padStart(3, '0')}.webp`,
        alt: `Tool ${i + 17}`
    }));
    const toolsF = Array.from({ length: 4 }, (_, i) => ({
        src: `${basePath}${String(i + 21).padStart(3, '0')}.webp`,
        alt: `Tool ${i + 21}`
    }));
    const toolsG = Array.from({ length: 4 }, (_, i) => ({
        src: `${basePath}${String(i + 25).padStart(3, '0')}.webp`,
        alt: `Tool ${i + 25}`
    }));
    const toolsH = Array.from({ length: 4 }, (_, i) => ({
        src: `${basePath}${String(i + 29).padStart(3, '0')}.webp`,
        alt: `Tool ${i + 29}`
    }));
    const toolsI = Array.from({ length: 2 }, (_, i) => ({
        src: `${basePath}${String(i + 33).padStart(3, '0')}.webp`,
        alt: `Tool ${i + 32}`
    }));

    return (
        <>
            {/* Hero section */}
            <section id="hero">
                <div class="content">
                    <div class="intro">
                        <h1>Rendez votre entreprise visible à l'international</h1>
                        <p>Démarrez dès maintenant la conception de votre site web avec Ohayo Dev & Design pour viser un public mondial avec un service accessible partout 24h/24 et 07j/07.</p>
                    </div>
                    <div class="c-t-a">
                        <span><Link href='/concevoir-site-web'>Démarrez maintenant</Link></span>
                    </div>
                </div>

                <div class="bg-h planet"><img src={planet} alt="" width={894} height={894}/></div>
                <div class="bg-h spatio"><img src={spatio} alt="" width={621} height={826}/></div>
            </section>

            {/* Why us section */}
            <section id="reason" class="container">
                <div class="portfolio">
                    <h2>Voir nos portfolio :</h2>
                    <div class="portfolios">
                        <span class="front">
                            <a href="/" target="_blank">Développeur Front-End</a>
                        </span>
                        <span>
                            <a href="/" target="_blank">Développeur Back-End</a>
                        </span>
                        <span>
                            <a href="/" target="_blank">UX / UI Designer</a>
                        </span>
                        <span>
                            <a href="/" target="_blank">Rédacteur Web</a>
                        </span>
                        <span>
                            <a href="/" target="_blank">SEO Analyst</a>
                        </span>
                    </div>
                    <div class="spatio-stand">
                        <img src={spatioStand} alt="standing spationaute" width={323} height={934}/>
                    </div>
                </div>
                <div class="content fact">
                    <h2>Pourquoi nous ?</h2>
                    <div class="slider" id="slider">
                        <div class="wrap slides-9">
                            <h3>Écoute et personnalisation :</h3>
                            <p>Notre équipe travaille en étroite collaboration avec vous pour s'assurer que le site final reflète parfaitement votre vision, prête à effectuer les ajustements nécessaires jusqu'à votre entière satisfaction.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infinite skills slider section */}
            <section id="scroll">
                <div class="content">
                    <h2>Nous maitrisons :</h2>
                    <div class="tools">
                        {toolsA.map(tool => (
                            <div key={tool.src}>
                                <img src={tool.src} alt={tool.alt} width={75} height={75}/>
                            </div>
                        ))}
                        {toolsB.map(tool => (
                            <div key={tool.src}>
                                <img src={tool.src} alt={tool.alt} width={75} height={75}/>
                            </div>
                        ))}
                        {toolsC.map(tool => (
                            <div key={tool.src}>
                                <img src={tool.src} alt={tool.alt} width={75} height={75}/>
                            </div>
                        ))}
                        {toolsD.map(tool => (
                            <div key={tool.src}>
                                <img src={tool.src} alt={tool.alt} width={75} height={75}/>
                            </div>
                        ))}
                        {toolsE.map(tool => (
                            <div key={tool.src}>
                                <img src={tool.src} alt={tool.alt} width={75} height={75}/>
                            </div>
                        ))}
                        {toolsF.map(tool => (
                            <div key={tool.src}>
                                <img src={tool.src} alt={tool.alt} width={75} height={75}/>
                            </div>
                        ))}
                        {toolsG.map(tool => (
                            <div key={tool.src}>
                                <img src={tool.src} alt={tool.alt} width={75} height={75}/>
                            </div>
                        ))}
                        {toolsH.map(tool => (
                            <div key={tool.src}>
                                <img src={tool.src} alt={tool.alt} width={75} height={75}/>
                            </div>
                        ))}
                        {toolsI.map(tool => (
                            <div key={tool.src}>
                                <img src={tool.src} alt={tool.alt} width={75} height={75}/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section id="visit" class="container">
                <div class="home-links">
                    <Link href="/a-propos">Qui sommes-nous ?</Link>
                    <Link href="/portefolio">Aperçu de notre travail</Link>
                    <Link href="/publication-web">Nos publications</Link>
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