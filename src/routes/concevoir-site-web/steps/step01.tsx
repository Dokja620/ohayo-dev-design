import { component$, Slot } from "@builder.io/qwik";

export const Step01 = component$(() => {
    return (
        <div class="step-1">
            <h2>Qui fait la commande ?</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div class="first-step">
                <span class="f in required">
                    <label for="first-name-input">Nom</label>
                    <input type="text" id="first-name-input" placeholder="ex: RABARY"/>
                </span>
                <span class="f in">
                    <label for="last-name-input">Prénoms</label>
                    <input type="text" id="last-name-input" placeholder="ex: Aon Lyl"/>
                </span>
                <span class="f in">
                    <label for="email-input">Adresse e-mail</label>
                    <input type="email" id="email-input" placeholder="ex: aonrabary@gmail.com"/>
                </span>
                <span class="f in">
                    <label for="phone-input">Numéro</label>
                    <input type="text" id="phone-input" placeholder="ex: +261 32 00 000 00"/>
                </span>
            </div>
            <Slot />
        </div>
    )
});