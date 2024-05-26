import { component$, Slot } from "@builder.io/qwik";

export const Step05 = component$(() => {
    return (
        <div class="step-5">
            <div class="last-step">
                <p>Via quoi souhaitez vous être contacter ?</p>
                <div class="last-options">
                    <span>
                        <input type="radio" name="get-in-touch" id="contact-mail" />
                        <label for="contact-mail">E-mail</label>
                    </span>
                    <span>
                        <input type="radio" name="get-in-touch" id="contact-phone" />
                        <label for="contact-phone">Numéro</label>
                    </span>
                    <span>
                        <input type="radio" name="get-in-touch" id="contact-social" />
                        <label for="contact-social">Réseau social</label>
                    </span>
                </div>
                <p>Mode de paiement :</p>
                <div class="last-options">
                    <span>
                        <input type="radio" name="paiment" id="pay-bank" />
                        <label for="pay-bank">Carte bancaire</label>
                    </span>
                    <span>
                        <input type="radio" name="paiment" id="pay-mobile" />
                        <label for="pay-mobile">Mobile money</label>
                    </span>
                    <span>
                        <input type="radio" name="paiment" id="pay-cash" />
                        <label for="pay-cash">En personne</label>
                    </span>
                </div>
            </div>
            <Slot />
        </div>
    )
});