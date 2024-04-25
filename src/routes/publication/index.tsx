import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {

    return (
        <section id="about" class="container">
            <h1>Publications</h1>
        </section>
    );
});


export const head: DocumentHead = {
    title: "Ohayo Dev & Design - Nos Publication",
    meta: [
        {
            name: "description",
            content: "Homepage ohayo dev & design",
        },
    ],
};