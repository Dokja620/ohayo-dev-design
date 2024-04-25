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
                        Ohayo Dev & Design est une agence de développement web fondée en 2024 par Axel RAKOTOARIVAO 
                        et Jenna ANDRIANARISATA à Nosy-Be Hell-ville, Madagascar, et désormais établie à Antananarivo. 
                        Notre équipe est formée d'une élite de freelances, tous diplômés de la prestigieuse Sayna Academy, 
                        une plateforme de développement web reconnue dans l'océan Indien, en partenariat avec l'OIF. 
                        Notre admission, suite à un concours sélectif, et notre parcours, jalonné de défis éliminatoires, 
                        témoignent de notre engagement et de notre compétence. Couronnés par le prix du lauréat de SAYNA, 
                        notamment avec notre développeur front-end, nous avons choisi d'unir nos forces pour offrir des 
                        services de développement web de premier plan. <br /> <br />
                        Notre expertise couvre toutes les spécialités indispensables à la création de sites web performants 
                        et attractifs : du développement Front-end et Back-end à la rédaction web, en passant par le UX/UI Design, 
                        jusqu'au SEO et au marketing digital. Chaque membre de notre équipe excelle dans son domaine, garantissant 
                        une approche complète et compétente pour chaque projet. <br /> <br />
                        Si vous envisagez de créer ou d'optimiser votre site web, vous pouvez passer commande directement sur 
                        notre site. Nous sommes également disponibles pour tout échange via nos réseaux sociaux, par e-mail 
                        ou par téléphone (vous trouverez nos coordonnées en bas de page). Nous vous invitons à découvrir le 
                        travail de nos membres en consultant leur portfolio individuel, ou à explorer nos projets d'agence 
                        dans la section "Nos réalisations". Curieux du monde du développement web ? "Nos publications" et nos 
                        présences sur les réseaux sociaux regorgent de sujets pensés pour vous enrichir.
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
            <div class="deco-home spatios">
                <img src={spatio} alt="" height={826} width={621}/>
            </div>
            <div class="deco-home planets one">
                <img src={planet} alt="" height={894} width={894}/>
            </div>
            <div class="deco-home planets two">
                <img src={planetViolet} alt="" height={894} width={894}/>
            </div>
        </section>
    );
});


export const head: DocumentHead = {
    title: "Ohayo Dev & Design - à propos",
    meta: [
        {
            name: "description",
            content: "Homepage ohayo dev & design",
        },
    ],
};