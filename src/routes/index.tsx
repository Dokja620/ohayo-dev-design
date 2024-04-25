import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import planet from "/media/home/planet.webp";
import spatio from "/media/home/spatio.webp";

export default component$(() => {
    return (
        <>
            {/* first section intro to who we are */}
            <section id="home-1" class="container">
                <div class="content">
                    <h1>Voulez-vous vous construire une présence en ligne ?</h1>
                    <h2>Vous êtes au bon endroit : Bienvenue sur Ohayo Dev & Design !</h2>

                    <div class="text">
                        <p>
                            Notre agence spécialisée en développement web reunit une équipe
                            de freelances aux compétence diversifié, essentielles à la
                            conception de votre site internet. Nous offrons un éventail de
                            services allant du développement  Front-End et Back-End au design UX/UI,
                            sans oublier la création de contenu et l'optimisation pour les moteurs de
                            recherche (SEO). Cette approche intégré nous permet de matérialiser avec
                            précision vos projets, en convertissant vos idées en solutions numériques
                            innovantes. Que votre objectif soit de lancer un site vitrine élégant ou 
                            une plateforme complexe dotée de multiples fonctionnalités, nous sommes là
                            pour transformer votre vision en succés. Confiez-nous votre projet et propulsez
                            votre marque sur la scène internationale avec une présence en ligne ininterrompue
                            disponible 24 heures sur 24, 7 jours sur 7.
                        </p>
                    </div>

                    <div class="deco-home spatios">
                        <img src={spatio} alt="" height={826} width={621}/>
                    </div>
                    <div class="deco-home planets">
                        <img src={planet} alt="" height={894} width={894}/>
                    </div>
                </div>
            </section>
            
            {/* first section intro to who we are */}
            <section id="home-2">
                <div class="content">
                    <div class="tech">
                        <h2>Nous maitrisons :</h2>
                    </div>
                </div>
            </section>
        </>
    );
});

export const head: DocumentHead = {
    title: "Ohayo Dev & Design - Acceuil",
    meta: [
        {
            name: "description",
            content: "Homepage ohayo dev & design",
        },
    ],
};
