import { component$, Slot } from "@builder.io/qwik";

export const Step05 = component$(() => {
    return (
        <div class="step-5">
            <h2>test echo 05</h2>
            <Slot />
        </div>
    )
});