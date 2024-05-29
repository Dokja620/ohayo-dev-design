import { component$, Slot } from "@builder.io/qwik";

export const Step05 = component$(() => {
    return (
        <div class="step-5">
            <div class="last-step">
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