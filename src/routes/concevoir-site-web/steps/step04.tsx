import { component$, Slot } from "@builder.io/qwik";

export const Step04 = component$(() => {
    return (
        <div class="step-4">
            <p>Parlez nous du site que vous voulez créer avec le plus de détails possible.</p>
            <div class="fourth-step">
                <textarea name="message" id="text-area" placeholder="Votre message…" rows={10}></textarea>
            </div>
            <Slot />
        </div>
    )
});