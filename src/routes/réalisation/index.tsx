import { $, component$ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";
import upArrow from '/media/nav/up-001.svg';
// Malala evasion website preview
import malala from '/media/work/malala/responsive.png';
// Vacances Nosy Be Tour website preview
import vacances from '/media/work/vacances/responsive.png';

export default component$(() => {

    const changeStep = $((index: number) => {
        const formElement = document.getElementById('websites');
        if (formElement) {
            formElement.setAttribute('active-site', index.toString());
        } else {
            console.error('Site element not found');
        }
    });

    return (
        <section id="works" class="container">
            <h1>Voici un aperçu des projets que nous avions réalisé :</h1>
            <div class="products" id="websites" active-site="1">
                <div class="site-1 site">
                    <div class="responsive">
                        <img src={malala} alt="responsive boxes" width={1398} height={665}/>
                    </div>
                    <div class="descrip">
                        <div class="subtitle">
                            <h2>Malala Evasion</h2>
                            <p>Site d'excursion Nosy Be</p>
                            <p class="date">Avr - 2024</p>
                        </div>
                        {/* <div class="software">
                            <span>html</span>
                            <span>scss</span>
                            <span>js</span>
                        </div>
                        <a href="/malala" target="_blank">Voir le site</a> */}
                    </div>
                    <div class="nav-btn next" onClick$={(event) => {event.preventDefault(); changeStep(2);}}>
                        <img src={upArrow} alt="go to top arrow" width={45} height={45}/>
                    </div>
                </div>
                <div class="site-2 site">
                    <div class="responsive">
                        <img src={vacances} alt="responsive boxes" width={1398} height={665}/>
                    </div>
                    <div class="descrip">
                        <div class="subtitle">
                            <h2>Vacances Nosy Be Tour</h2>
                            <p>Site d'excursion Nosy Be</p>
                            <p class="date">Fev - 2024</p>
                        </div>
                        {/* <div class="software">
                            <span>html</span>
                            <span>scss</span>
                            <span>js</span>
                        </div>
                        <a href="/malala" target="_blank">Voir le site</a> */}
                    </div>
                    <div class="nav-btn pre" onClick$={(event) => {event.preventDefault(); changeStep(1);}}>
                        <img src={upArrow} alt="go to top arrow" width={45} height={45}/>
                    </div>
                    <div class="nav-btn next" onClick$={(event) => {event.preventDefault(); changeStep(2);}}>
                        <img src={upArrow} alt="go to top arrow" width={45} height={45}/>
                    </div>
                </div>
            </div>
        </section>
    );
});


export const head: DocumentHead = {
    title: "Ohayo Dev & Design | Nos réalisation",
    meta: [
        {
            name: "description",
            content: "Découvrez les projets réalisés par Ohayo Dev & Design, incluant Malala Evasion et Vacances Nosy Be Tour. Explorez nos solutions créatives et responsives adaptées à tous les appareils.",
        },
    ],
};