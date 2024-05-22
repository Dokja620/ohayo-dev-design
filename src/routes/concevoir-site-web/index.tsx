import { $, component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";
import { Step01 } from './steps/step01';
import { Step02 } from './steps/step02';
import { Step03 } from './steps/step03';
import { Step04 } from './steps/step04';
import { Step05 } from './steps/step05';

export default component$(() => {
    const state = useStore({ activeStep: 1 });

    const changeStep = $((index: number) => {
        const formElement = document.getElementById('form');
        if (formElement) {
            const inputs = formElement.querySelectorAll(`[data-step="${state.activeStep}"] input`);
            let allFilled = true;

            inputs.forEach((input) => {
                const inputElement = input as HTMLInputElement; // Cast to HTMLInputElement
                if (!inputElement.value) {
                    allFilled = false;
                    inputElement.classList.add('input-error'); // Add error class to highlight empty inputs
                } else {
                    inputElement.classList.remove('input-error'); // Remove error class if input is filled
                }
            });

            if (allFilled) {
                state.activeStep = index;
            } else {
                console.error('Please fill in all required fields.');
            }
        } else {
            console.error('Form element not found');
        }
    });

    return (
        <section id="order" class="container">
            <h1>Quel genre de site voulez vous avoir ?</h1>
            <form id="form">
                {state.activeStep === 1 && (
                    <div data-step="1">
                        <Step01>
                            <div class="buttons">
                                <button type="button" onClick$={(event) => { event.preventDefault(); changeStep(2); }}>Suivant</button>
                            </div>
                        </Step01>
                    </div>
                )}
                {state.activeStep === 2 && (
                    <div data-step="2">
                        <Step02>
                            <div class="buttons">
                                <button type="button" onClick$={(event) => { event.preventDefault(); changeStep(1); }}>retour</button>
                                <button type="button" onClick$={(event) => { event.preventDefault(); changeStep(3); }}>Suivant</button>
                            </div>
                        </Step02>
                    </div>
                )}
                {state.activeStep === 3 && (
                    <div data-step="3">
                        <Step03>
                            <div class="buttons">
                                <button type="button" onClick$={(event) => { event.preventDefault(); changeStep(2); }}>retour</button>
                                <button type="button" onClick$={(event) => { event.preventDefault(); changeStep(4); }}>Suivant</button>
                            </div>
                        </Step03>
                    </div>
                )}
                {state.activeStep === 4 && (
                    <div data-step="4">
                        <Step04>
                            <div class="buttons">
                                <button type="button" onClick$={(event) => { event.preventDefault(); changeStep(3); }}>retour</button>
                                <button type="button" onClick$={(event) => { event.preventDefault(); changeStep(5); }}>Suivant</button>
                            </div>
                        </Step04>
                    </div>
                )}
                {state.activeStep === 5 && (
                    <div data-step="5">
                        <Step05>
                            <div class="buttons">
                                <button type="button" onClick$={(event) => { event.preventDefault(); changeStep(4); }}>retour</button>
                                <button>Demander un devis</button>
                            </div>
                        </Step05>
                    </div>
                )}
            </form>
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
