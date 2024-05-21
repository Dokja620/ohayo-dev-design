import { component$, Slot } from "@builder.io/qwik";

export const Step04 = component$(() => {
    return (
        <div class="step-4">
            <h2>test echo 04</h2>
            <Slot />
        </div>
    )
});