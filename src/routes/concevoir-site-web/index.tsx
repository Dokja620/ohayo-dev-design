import { $, component$ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";
import { Step01 } from './steps/step01';
import { Step02 } from './steps/step02';
import { Step03 } from './steps/step03';
import { Step04 } from './steps/step04';
import { Step05 } from './steps/step05';

// import fuse from '/public/media/space.svg';

export default component$(() => {
    const changeStep = $((index: number) => {
        const formElement = document.getElementById('form');
        if (formElement) {
            formElement.setAttribute('active-step', index.toString());
        } else {
            console.error('Form element not found');
        }
    });

    return (
        <section id="order" class="container">
            <h1>Quel genre de site voulez vous avoir ?</h1>
            <form active-step="1" id="form">
                <Step01>
                    <div class="buttons">
                        <button type="button" onClick$={(event) => {event.preventDefault(); changeStep(2);}}>Suivant</button>
                    </div>
                </Step01>
                <Step02>
                    <div class="buttons">
                        <button type="button" onClick$={(event) => {event.preventDefault(); changeStep(1);}}>retour</button>
                        <button type="button" onClick$={(event) => {event.preventDefault(); changeStep(3);}}>Suivant</button>
                    </div>
                </Step02>
                <Step03>
                    <div class="buttons">
                        <button type="button" onClick$={(event) => {event.preventDefault(); changeStep(2);}}>retour</button>
                        <button type="button" onClick$={(event) => {event.preventDefault(); changeStep(4);}}>Suivant</button>
                    </div>
                </Step03>
                <Step04>
                    <div class="buttons">
                        <button type="button" onClick$={(event) => {event.preventDefault(); changeStep(3);}}>retour</button>
                        <button type="button" onClick$={(event) => {event.preventDefault(); changeStep(5);}}>Suivant</button>
                    </div>
                </Step04>
                <Step05>
                    <div class="buttons">
                        <button type="button" onClick$={(event) => {event.preventDefault(); changeStep(4);}}>retour</button>
                        <button>Demander un devis</button>
                    </div>
                </Step05>
                    
            </form>
            {/* <div class="fuse"><img src={fuse} alt="spaceship" width={250} height={250}/></div> */}
        </section>
    );
});


export const head: DocumentHead = {
    title: "Ohayo Dev & Design | Commande",
    meta: [
        {
            name: "description",
            content: "Commandez votre site personnalisé chez Ohayo Dev & Design. Choisissez le type de site, les services supplémentaires, et spécifiez vos besoins en détail pour une création qui vous ressemble.",
        },
    ],
};