import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";
import jenna from '/media/team/jenna.webp';
import planet from "/media/home/planet.webp";
import planetViolet from "/media/home/planet-001.webp";
import spatio from "/media/home/spatio.webp";

export default component$(() => {

    return (
        <section id="about" class="container">
            <div class="part">
                <div class="text">
                    <h1>À-propos de nous</h1>
                    <p>
                        Ohayo Dev & Design est une agence de développement web basée à Antananarivo, Madagascar en 2024. 
                        Dirigée par Jenna ANDRIANARISATA, notre agence se distingue par son expertise dans le développement 
                        full code avec éditeur de code ainsi que le développement low code avec CMS. <br /> <br />

                        Notre équipe pluridisciplinaire maîtrise tous les aspects essentiels pour la création de sites web 
                        performants : le développement Front-end pour des interfaces utilisateur intuitives, le développement 
                        Back-end pour des fonctionnalités robustes, le UX/UI Design pour une expérience utilisateur optimale, 
                        la rédaction web pour des contenus engageants, et le référencement SEO pour une visibilité accrue.
                        Cette combinaison de compétences, alliée à notre faculté avec le développement low code et full code, 
                        nous permet de nous adapter parfaitement aux besoins et au budget de nos clients. Que vous recherchiez 
                        une solution sur-mesure ou une approche plus rapide et économique, nous saurons vous proposer la 
                        meilleure option. 
                        Nos valeurs sont au cœur de notre démarche : la fiabilité de nos livrables, la satisfaction de nos 
                        clients et l'équité de nos salaires. Nous nous positionnons sur la qualité de nos services, les 
                        bénéfices apportés à nos clients et l'excellence de l'expérience client. 
                        Enfin, notre approche agile, basée sur la méthodologie Scrum, nous permet de travailler de manière 
                        flexible et réactive pour répondre au mieux à vos attentes. <br /> <br />

                        Chez Ohayo Dev & Design, nous sommes passionnés par notre métier et nous mettons tout en œuvre 
                        pour faire de votre projet web un véritable succès.
                    </p>
                </div>
            </div>
            <div class="parts">
                <div class="team">
                    <div class="person">
                        <div class="picture">
                            <img src={jenna} alt="picture of Jenna" width={1344} height={756}/>
                        </div>
                        <div class="desc">
                            <p id="name">Jenna ANDRIANARISATA</p>
                            <h4 id="job">UI/UX Designer</h4>
                        </div>
                    </div>
                    <div class="person">
                        <div class="picture">
                            <img src={jenna} alt="picture of Jenna" width={1344} height={756}/>
                        </div>
                        <div class="desc">
                            <p id="name">Axel RAKOTOARIVAO</p>
                            <h4 id="job">Front-End Developer</h4>
                        </div>
                    </div>
                    <div class="person">
                        <div class="picture">
                            <img src={jenna} alt="picture of Jenna" width={1344} height={756}/>
                        </div>
                        <div class="desc">
                            <p id="name">Andréas RABESON</p>
                            <h4 id="job">Back-End Developer</h4>
                        </div>
                    </div>
                    <div class="person">
                        <div class="picture">
                            <img src={jenna} alt="picture of Jenna" width={1344} height={756}/>
                        </div>
                        <div class="desc">
                            <p id="name">Florence RAFARANIARIVELO</p>
                            <h4 id="job">SEO Analyst</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="deco-more spatios">
                <img src={spatio} alt="" height={826} width={621}/>
            </div>
            <div class="deco-more planets one">
                <img src={planet} alt="" height={894} width={894}/>
            </div>
            <div class="deco-more planets two">
                <img src={planetViolet} alt="" height={894} width={894}/>
            </div>
        </section>
    );
});


export const head: DocumentHead = {
    title: "Ohayo Dev & Design | à propos",
    meta: [
        {
            name: "description",
            content: "Rencontrez Ohayo Dev & Design, votre agence de développement web à Antananarivo, spécialisée en création de sites web, UX/UI Design, SEO et marketing digital. Fondée par des experts reconnus, nous transformons vos idées en réalités digitales performantes.",
        },
    ],
};