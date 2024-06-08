import { component$ } from "@builder.io/qwik";

export const NavigationForm = component$(() => {
    return (
        <div class="navigation-form">
            <div class="step">
                <span class="num"><p>1</p></span>
                <span>
                    <p>Étape 1</p>
                    <h4>Vos Informations</h4>
                </span>
            </div>
            <div class="step">
                <span class="num"><p>2</p></span>
                <span>
                    <p>Étape 2</p>
                    <h4>Choix du Site</h4>
                </span>
            </div>
            <div class="step">
                <span class="num"><p>3</p></span>
                <span>
                    <p>Étape 3</p>
                    <h4>A-propos du Projet</h4>
                </span>
            </div>
            <div class="step">
                <span class="num"><p>4</p></span>
                <span>
                    <p>Étape 4</p>
                    <h4>Détails et Contact</h4>
                </span>
            </div>
        </div>
    );
});
