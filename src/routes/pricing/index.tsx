import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from '@builder.io/qwik-city';

export default component$(() => {

    return (
        <section id="offer" class="container">
            <h1>Nous proposons:</h1>
            <div class="offer">
                <div class="front">
                    <h2>Création de site web et UI | Front-End</h2>
                    <div class="list">
                        <div class="product">
                            <p>Site-Web Statique</p>
                            <p>400.000 ar</p>
                        </div>
                        <div class="product">
                            <p>Site-Web Statique</p>
                            <p>400.000 ar</p>
                        </div>
                        <div class="product">
                            <p>Site-Web Statique</p>
                            <p>400.000 ar</p>
                        </div>
                        <div class="product">
                            <p>Site-Web Statique</p>
                            <p>400.000 ar</p>
                        </div>
                        <div class="product">
                            <p>Site-Web Statique</p>
                            <p>400.000 ar</p>
                        </div>
                        <div class="product">
                            <p>Site-Web Statique</p>
                            <p>400.000 ar</p>
                        </div>
                        <div class="product">
                            <p>Site-Web Statique</p>
                            <p>400.000 ar</p>
                        </div>
                        <div class="product">
                            <p>Site-Web Statique</p>
                            <p>400.000 ar</p>
                        </div>
                    </div>
                </div>
                <div class="front">
                    <h2>Fonction et Maintenance | Back-End</h2>
                    <div class="list">
                        <div class="product">
                            <p>Site-Web Statique</p>
                            <p>400.000 ar</p>
                        </div>
                        <div class="product">
                            <p>Site-Web Statique</p>
                            <p>400.000 ar</p>
                        </div>
                        <div class="product">
                            <p>Site-Web Statique</p>
                            <p>400.000 ar</p>
                        </div>
                        <div class="product">
                            <p>Site-Web Statique</p>
                            <p>400.000 ar</p>
                        </div>
                        <div class="product">
                            <p>Site-Web Statique</p>
                            <p>400.000 ar</p>
                        </div>
                        <div class="product">
                            <p>Site-Web Statique</p>
                            <p>400.000 ar</p>
                        </div>
                        <div class="product">
                            <p>Site-Web Statique</p>
                            <p>400.000 ar</p>
                        </div>
                        <div class="product">
                            <p>Site-Web Statique</p>
                            <p>400.000 ar</p>
                        </div>
                    </div>
                </div>
                <div class="extras">
                    <h2>Service supplémentaires :</h2>
                    <div class="list">
                        <div class="product">
                            <p>Site-Web Statique</p>
                            <p>400.000 ar</p>
                        </div>
                        <div class="product">
                            <p>Site-Web Statique</p>
                            <p>400.000 ar</p>
                        </div>
                        <div class="product">
                            <p>Site-Web Statique</p>
                            <p>400.000 ar</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ord">
                <h1>Prêt à laisser votre emprunt dans le web ?</h1>
                <Link href="/commande" class="button">Passer commande</Link>
            </div>
        </section>
    );
});


export const head: DocumentHead = {
    title: "Ohayo Dev & Design | Nos services",
    meta: [
        {
            name: "description",
            content: "Explorez nos services de développement web et design avec des prix transparents. Découvrez nos offres pour la création de sites web statiques, fonctionnalités back-end, et services supplémentaires. Prêt à marquer votre présence en ligne ? Visitez-nous pour plus d'informations.",
        },
    ],
};