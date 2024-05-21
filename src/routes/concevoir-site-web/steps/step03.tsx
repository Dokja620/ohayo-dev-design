import { component$, Slot } from "@builder.io/qwik";

export const Step03 = component$(() => {
    return (
        <div class="step-3">
            <h2>test echo 03</h2>
            <Slot />
        </div>
    )
});