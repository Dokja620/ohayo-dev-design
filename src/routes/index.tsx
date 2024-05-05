import { component$ } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';
import type { DocumentHead } from "@builder.io/qwik-city";

import planet from "/media/home/planet.webp";
import spatio from "/media/home/spatio.webp";

// Import images dynamically if possible, or define base path and use it in src
const basePath = "/media/tech/";

export default component$(() => {
    // Array of tool objects
    const tools = Array.from({ length: 37 }, (_, i) => ({
        src: `${basePath}${String(i + 1).padStart(3, '0')}.svg`,
        alt: `Tool ${i + 1}`
    }));

    return (
        <>
            {/* Hero section */}
            <section id="hero" class="container">
                <div class="content">
                    <div class="intro">
                        <h1>Rendez votre entreprise visible à l'international</h1>
                        <p>Démarrez dès maintenant la conception de votre site web avec Ohayo Dev & Design pour viser un public mondial avec un service accessible partout 24h/24 et 07j/07.</p>
                    </div>
                    <div class="c-t-a">
                        <span><Link href='/'>Démarrez maintenant</Link></span>
                        <span><Link href='/'>Contact</Link></span>
                    </div>
                </div>

                <div class="bg-h planet"><img src={planet} alt="" width={894} height={894}/></div>
                <div class="bg-h spatio"><img src={spatio} alt="" width={621} height={826}/></div>
            </section>

            {/* Infinite skills slider section */}
            <div id="scroll">
                <h2>Nous maitrisons</h2>
                <div class="content">
                    <div class="tools">
                        {tools.map(tool => (
                            <div key={tool.src}>
                                <img src={tool.src} alt={tool.alt} width={85} height={85}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <section id="hero" class="container">
                <div class="content">
                    <div class="intro">
                        <h1>Rendez votre entreprise visible à l'international</h1>
                        <p>Démarrez dès maintenant la conception de votre site web avec Ohayo Dev & Design pour viser un public mondial avec un service accessible partout 24h/24 et 07j/07.</p>
                    </div>
                    <div class="c-t-a">
                        <span><Link href='/'>Démarrez maintenant</Link></span>
                        <span><Link href='/'>Contact</Link></span>
                    </div>
                </div>

                <div class="bg-h planet"><img src={planet} alt="" width={894} height={894}/></div>
                <div class="bg-h spatio"><img src={spatio} alt="" width={621} height={826}/></div>
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