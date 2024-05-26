import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";
import { NavigationForm } from './steps/navigationForm';
import { Step01 } from './steps/step01';

// import fuse from '/public/media/space.svg';

export default component$(() => {

    return (
        <section id="order" class="container">
            <form>
                <NavigationForm/>
                <div class="form-steps">
                    <Step01>
                        <div class="buttons">
                            <button>Suivant</button>
                        </div>
                    </Step01>
                </div>
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