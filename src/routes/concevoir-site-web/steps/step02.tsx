import { component$, Slot } from "@builder.io/qwik";

export const Step02 = component$(() => {
    return (
        <div class="step-2">
            <h2>test echo 02</h2>
            <Slot />
        </div>
    )
});