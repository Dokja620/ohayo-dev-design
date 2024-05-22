import { component$, Slot } from "@builder.io/qwik";

export const Step01 = component$(() => {
    return (
        <div class="step-1">
            <h2>Qui fait la commande ?</h2>
            <div class="first-step">
                <span class="f in">
                    <input type="text" id="first-name-input" placeholder=""/>
                    <label for="first-name-input">Nom</label>
                </span>
                <span class="f in">
                    <input type="text" id="last-name-input" placeholder=""/>
                    <label for="last-name-input">Prénoms</label>
                </span>
                <span class="f in">
                    <input type="email" id="email-input" placeholder=""/>
                    <label for="email-input">Adresse e-mail</label>
                </span>
                <span class="f in">
                    <input type="text" id="phone-input" placeholder=""/>
                    <label for="phone-input">Numéro</label>
                </span>
            </div>
            <Slot />
        </div>
    )
});