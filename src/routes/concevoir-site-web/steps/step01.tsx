import { component$, Slot } from "@builder.io/qwik";

export const Step01 = component$(() => {
    return (
        <div class="step-1">
            <h2>test echo</h2>
            <Slot />
        </div>
    )
});