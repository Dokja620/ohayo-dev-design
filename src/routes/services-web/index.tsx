import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from '@builder.io/qwik-city';

export default component$(() => {

    return (
        <section id="offer" class="container">
            <h1>Nous proposons:</h1>
            <div class="offer">
                <div class="front">
                    <h2>Nos services :</h2>
                    <div class="list">
                        <div class="product">
                            <p>Création site web</p>
                        </div>
                        <div class="product">
                            <p>Développement Back-End</p>
                        </div>
                        <div class="product">
                            <p>Design UI/UX</p>
                        </div>
                        <div class="product">
                            <p>Rédaction web</p>
                        </div>
                        <div class="product">
                            <p>Maintenance</p>
                        </div>
                        <div class="product">
                            <p>Sécurisation</p>
                        </div>
                        <div class="product">
                            <p>Refonte</p>
                        </div>
                        <div class="product">
                            <p>Mise en ligne et Hébergement</p>
                        </div>
                        <div class="product">
                            <p>Réferencement</p>
                        </div>
                    </div>
                </div>
                <div class="front">
                    <h2>Type de site :</h2>
                    <div class="list">
                        <div class="product">
                            <p>Site-Web Vitrine</p>
                        </div>
                        <div class="product">
                            <p>Site-Web d'Entreprise</p>
                        </div>
                        <div class="product">
                            <p>Site-Web de réservation</p>
                        </div>
                        <div class="product">
                            <p>Site-Web E-commerce</p>
                        </div>
                        <div class="product">
                            <p>Portfolio</p>
                        </div>
                        <div class="product">
                            <p>Blog</p>
                        </div>
                        <div class="product">
                            <p>Landing page</p>
                        </div>
                        <div class="product">
                            <p>Site-Web Statique</p>
                        </div>
                    </div>
                </div>
                {/* <div class="extras">
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
                </div> */}
            </div>
            <div class="ord">
                <h1>Prêt à laisser votre emprunt dans le web ?</h1>
                <Link href="/concevoir-site-web" class="button">Passer commande</Link>
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