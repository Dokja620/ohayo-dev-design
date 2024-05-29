import { component$, Slot } from "@builder.io/qwik";

export const Step04 = component$(() => {
    return (
        <div class="step-4">
            <h2>Details sur le site</h2>
            <p>Parlez nous du site que vous voulez créer avec le plus de détails possible.</p>
            <div class="fourth-step">
                <textarea name="message" id="text-area" placeholder="Votre message…" rows={10}></textarea>
            </div>
            
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
            <Slot />
        </div>
    )
});