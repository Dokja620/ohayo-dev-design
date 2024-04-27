import { component$ } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';
import type { DocumentHead } from "@builder.io/qwik-city";
import planet from "/media/home/planet.webp";
import spatio from "/media/home/spatio.webp";
import spatioStand from "/media/home/spatio-stand.webp";


// tech stack of the agency
import tech_a from "/media/tech/3d/001.webp";
import tech_b from "/media/tech/3d/002.webp";
import tech_c from "/media/tech/3d/003.webp";
import tech_d from "/media/tech/3d/004.webp";
import tech_e from "/media/tech/3d/005.webp";
import tech_f from "/media/tech/3d/006.webp";
import tech_g from "/media/tech/3d/007.webp";
import tech_h from "/media/tech/3d/008.webp";
import tech_i from "/media/tech/3d/009.webp";
import tech_j from "/media/tech/3d/010.webp";
import tech_k from "/media/tech/3d/011.webp";
import tech_l from "/media/tech/3d/012.webp";
import tech_m from "/media/tech/3d/013.webp";
import tech_n from "/media/tech/3d/014-001.png";
import tech_o from "/media/tech/3d/015.webp";
import tech_p from "/media/tech/3d/016.webp";
import tech_q from "/media/tech/3d/017.webp";
import tech_r from "/media/tech/3d/018.webp";
import tech_s from "/media/tech/3d/019.webp";
import tech_t from "/media/tech/3d/020.webp";
import tech_u from "/media/tech/3d/021.webp";
// import tech_v from "/media/tech/3d/022.webp";
import tech_w from "/media/tech/3d/023.webp";
import tech_x from "/media/tech/3d/024.webp";
import tech_y from "/media/tech/3d/025.webp";
import tech_z from "/media/tech/3d/026.webp";
import tech_A from "/media/tech/3d/027.webp";
import tech_B from "/media/tech/3d/028.webp";
import tech_C from "/media/tech/3d/029.webp";
import tech_D from "/media/tech/3d/030.webp";
import tech_E from "/media/tech/3d/031.webp";

export default component$(() => {

    // const changeStep = (index: number) => { // TODO need to activate this
    //     const sliderElement = document.getElementById('slider');
    //     if (sliderElement) {
    //         sliderElement.setAttribute('slide-step', index.toString());
    //     } else {
    //         console.error('Slider element not found');
    //     }
    // };
    
    // let currentStep = 1;
    // const maxStep = 11;
    
    // // Function to change step at intervals of 5 seconds
    // const autoChangeStep = () => {
    //     setInterval(() => {
    //         changeStep(currentStep);
    //         currentStep += 1;
    //         if (currentStep > maxStep) {
    //             currentStep = 1; // Reset to the first step
    //         }
    //     }, 100); // 5 seconds interval
    // };
    
    // autoChangeStep();
    

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
            
            {/* second section */}
            <section id="home-2" class="container">
                <div class="content">
                    <div class="tech">
                        <h2>Nous maitrisons:</h2>
                        <div class="tools">
                            <div><img src={tech_a} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_b} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_c} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_d} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_e} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_f} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_g} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_h} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_i} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_j} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_k} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_l} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_m} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_n} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_o} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_p} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_q} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_r} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_s} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_t} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_u} alt="tech we use" width={50} height={50}/></div>
                            {/* <div><img src={tech_v} alt="tech we use" width={50} height={50}/></div> */}
                            <div><img src={tech_w} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_x} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_y} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_z} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_A} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_B} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_C} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_D} alt="tech we use" width={50} height={50}/></div>
                            <div><img src={tech_E} alt="tech we use" width={50} height={50}/></div>
                        </div>
                    </div>
                    <div class="fact">
                        <div class="fact-box">
                            <h2>Pourquoi nous choisir ?</h2>
                            <div class="slider" id="slider" slide-step="1">
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
                                    <h3>Expertise spécialisée :</h3>
                                    <p>Notre équipe comprend des spécialistes dans tous les domaines nécessaires pour optimiser votre site web au maximum et répondre à tous vos besoins.</p>
                                </div>
                                <div class="wrap slides-5">
                                    <h3>Flexibilité de développement :</h3>
                                    <p>Selon vos besoins, moyens et préférences, vous avez le choix entre un développement full code pour une personnalisation maximale ou low code pour une mise en œuvre rapide.</p>
                                </div>
                                <div class="wrap slides-6">
                                    <h3>Ressources supplémentaires :</h3>
                                    <p>Nous mettons  à la disposition de bos clients un e-book gratuit pour répondre à toutes vos questions, vous guidant à travers chaque étape de la conception de votre site.</p>
                                </div>
                                <div class="wrap slides-7">
                                    <h3>Analyse personnalisée :</h3>
                                    <p>Nous pouvons offrir une analyse détaillée de votre site existant, si nécessaire, pour identifier les améliorations potentielles.</p>
                                </div>
                                <div class="wrap slides-8">
                                    <h3>Facilités de paiement :</h3>
                                    <p>Nous offrons la possibilité de régler en plusieurs fois pour faciliter l'accès à nos services.</p>
                                </div>
                                <div class="wrap slides-9">
                                    <h3>Écoute et personnalisation :</h3>
                                    <p>Notre équipe travaille en étroite collaboration avec vous pour s'assurer que le site final reflète parfaitement votre vision, prête à effectuer les ajustements nécessaires jusqu'à votre entière satisfaction.</p>
                                </div>
                                <div class="wrap slides-10">
                                    <h3>Support continu :</h3>
                                    <p>La possibilité d'engager nos spécialistes à tout moment du projet assure un soutien constant et une adaptabilité à vos besoins évolutifs.</p>
                                </div>
                                <div class="wrap slides-11">
                                    <h3>Site web sécurisé :</h3>
                                    <p>Pour ceux qui en ont besoin, nous prenons en charge le processus d'hébergement de votre site, gratuitement.</p>
                                </div>
                                <div class="pagination">
                                    <div class="active"></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* last section */}
            <section id="home-3" class="container">
                <div class="content">
                    <div class="portfolio">
                        <h2>Voir nos portfolio :</h2>
                        <div class="portfolios">
                            <span class="front">
                                <Link href="/">Développeur Front-End</Link>
                            </span>
                            <span>
                                <Link href="/">Développeur Back-End</Link>
                            </span>
                            <span>
                                <Link href="/">UX / UI Designer</Link>
                            </span>
                            <span>
                                <Link href="/">Rédacteur Web</Link>
                            </span>
                            <span>
                                <Link href="/">SEO Analyst</Link>
                            </span>
                        </div>
                    </div>
                    <div class="navigation">
                        <div class="home-links">
                            <Link href="/">Faire une commande</Link>
                            <Link href="/">Aperçu de notre travail</Link>
                            <Link href="/">Nos publications</Link>
                            <Link href="/">Qui sommes-nous ?</Link>
                            <div class="spatio-home">
                                <img src={spatioStand} alt="standing spationaute" width={323} height={934}/>
                            </div>
                        </div>
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
