import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';
import type { DocumentHead } from "@builder.io/qwik-city";
import rocket from "/public/media/home/rocket.svg";

// Import images dynamically if possible, or define base path and use it in src
// const basePath = "/media/tech/";

export default component$(() => {
    // Array of tool objects
    // const tools = Array.from({ length: 39 }, (_, i) => ({
    //     src: `${basePath}${String(i + 1).padStart(3, '0')}.webp`,
    //     alt: `Tool ${i + 1}`
    // }));

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

    return (
        <>
            {/* Hero section */}
            <section id="hero">
                <div class="content">
                    <div class="intro">
                        <h1>Rendez votre entreprise <span>visible a l'international</span></h1>
                        <p>Franchissez les barrières géographiques et temporelles : Élargissez votre influence, atteignez un public mondial et offrez des services disponibles 24/7. Commencez dès maintenant la création de votre site web !</p>
                    </div>
                    <div class="c-t-a">
                        <Link href='/concevoir-site-web'>Démarrer maintenant <span><img src={rocket} alt="rocket icon" width={30} height={30}/></span></Link>
                        {/* <div>Demander un devis<span><img src={price} alt="rocket icon" width={30} height={30}/></span></div> */}
                    </div>
                </div>
            </section>

            {/* Infinite skills slider section */}
            {/* <section id="scroll" data-aos="fade-down">
                <div class="content">
                    <h2>Nous maitrisons :</h2>
                    <div class="scroll">
                        <div class="tools">
                            {tools.map(tool => (
                                <span key={tool.src}>
                                    <img src={tool.src} alt={tool.alt} width={200} height={200} loading="lazy"/>
                                </span>
                            ))}
                        </div>
                        <div class="tools"> 
                            {tools.map(tool => (
                                <span key={tool.src}>
                                    <img src={tool.src} alt={tool.alt} width={200} height={200} loading="lazy"/>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
});

export const head: DocumentHead = {
    title: "Ohayo Dev & Design | Acceuil",
    meta: [
        {
            name: "description",
            content: "Ohayo Dev & Design, une agence de développement web basée à Madagascar, crée des websites performants et innovants. Spécialisée en conception front-end, back-end, design UX/UI, et optimisation SEO, notre équipe Malgache est engagée à booster votre présence numérique. Découvrez nos services et permettez-nous de propulser votre succès en ligne.",
        },
    ],
};