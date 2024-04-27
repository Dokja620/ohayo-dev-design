import { $, component$ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    const changeStep = $((index: number) => {
        const formElement = document.getElementById('form');
        if (formElement) {
            formElement.setAttribute('active-step', index.toString());
        } else {
            console.error('Form element not found');
        }
    });

    return (
        <section id="order" class="container">
            <h1>Quel genre de site voulez vous avoir ?</h1>
            <form active-step="1" id="form">
                {/* <div class="sapce-ship" data-step="1">
                    <canvas>
                        <img src="" alt="" width={250} height={250}/>
                    </canvas>
                </div> */}
                <div class="step-1">
                    <div class="info">
                        <h2>Qui fait la commande ?</h2>
                        <div class="name in">
                            <div class="inputs">
                                <input type="text" name="client_first_name" id="first-name-input" placeholder="" />
                                <label for="first-name-input">Nom</label>
                            </div>
                            <div class="inputs">
                                <input type="text" name="client_last_name" id="last-name-input" placeholder="" />
                                <label for="last-name-input">Prénoms</label>
                            </div>
                        </div>
                        <div class="contact in">
                            <div class="inputs">
                                <input type="email" name="client_name" id="email-input" placeholder="" />
                                <label for="email-input">Adresse e-mail</label> {/* // TODO check that it's an email before being able to go next */}
                            </div>
                            <div class="inputs">
                                <input type="tel" name="client_tel" id="tel-input" placeholder="" />
                                <label for="tel-input">Numéro</label>
                            </div>
                        </div>
                    </div>
                    <div class="buttons">
                        <button type="button" onClick$={(event) => {event.preventDefault(); changeStep(2);}}>Suivant</button>
                    </div>
                </div>
                <div class="step-2">
                    <div class="info">
                        <h2>De quel genre de site avez vous besoin ?</h2>
                        <div class="site in">
                            <div class="inputs">
                                <input type="text" name="client_first_name" id="first-name-input" placeholder="" />
                                <label for="first-name-input">Type de site</label>
                            </div>
                            <div class="check">
                                <div class="option">
                                    <input type="checkbox" name="responsive" id="responsive-website" />
                                    <label for="responsive-website">Responsive</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" name="responsive" id="more-subjects" />
                                    <label for="more-subjects">Plus de 04 sujets</label>
                                </div>
                            </div>
                        </div>

                        <h2>Services supplementaires :</h2>
                        <div class="site in">
                            <div class="check second">
                                <div class="option">
                                    <input type="checkbox" name="responsive" id="ui-design" />
                                    <label for="ui-design">Avec UI Designer</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" name="responsive" id="redactor" />
                                    <label for="redactor">Avec Rédacteur</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" name="responsive" id="back-end" />
                                    <label for="back-end">Avec Back-End</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" name="responsive" id="seo" />
                                    <label for="seo">Avec SEO</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" name="responsive" id="extra-services" />
                                    <label for="extra-services">Sans service supplémentaires</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="buttons">
                        <button type="button" onClick$={(event) => {event.preventDefault(); changeStep(1);}}>Previous</button>
                        <button type="button" onClick$={(event) => {event.preventDefault(); changeStep(3);}}>Suivant</button>
                    </div>
                </div>
                <div class="step-3">
                    <div class="info">
                        <h2>À quel stade en êtes vous ?</h2>
                        <div class="more">
                            <div class="choice">
                                <h3>Nom de domaine :</h3>
                                <div class="option">
                                    <input type="radio" name="domain" id="domain-yes" />
                                    <label for="domain-yes">J'ai déjà</label>
                                </div>
                                <div class="option">
                                    <input type="radio" name="domain" id="domain-no" />
                                    <label for="domain-no">Je n'en ai pas</label>
                                </div>
                            </div>
                            <div class="choice">
                                <h3>Hébergeur :</h3>
                                <div class="option">
                                    <input type="radio" name="host" id="host-yes" />
                                    <label for="host-yes">J'ai déjà</label>
                                </div>
                                <div class="option">
                                    <input type="radio" name="host" id="host-no" />
                                    <label for="host-no">Je n'en ai pas</label>
                                </div>
                            </div>
                            <div class="choice">
                                <h3>Hébergement :</h3>
                                <div class="option">
                                    <input type="radio" name="hosting" id="hosted-yes" />
                                    <label for="hosted-yes">J'ai déjà</label>
                                </div>
                                <div class="option">
                                    <input type="radio" name="hosting" id="hosted-no" />
                                    <label for="hosted-no">Je n'en ai pas</label>
                                </div>
                            </div>
                            <div class="choice">
                                <h3>Design :</h3>
                                <div class="option">
                                    <input type="radio" name="design" id="design-yes" />
                                    <label for="design-yes">J'ai déjà</label>
                                </div>
                                <div class="option">
                                    <input type="radio" name="design" id="design-no" />
                                    <label for="design-no">Je n'en ai pas</label>
                                </div>
                            </div>
                            <div class="choice">
                                <h3>Contenu visuel :</h3>
                                <div class="option">
                                    <input type="radio" name="visual-content" id="visual-yes" />
                                    <label for="visual-yes">J'ai déjà</label>
                                </div>
                                <div class="option">
                                    <input type="radio" name="visual-content" id="visual-no" />
                                    <label for="visual-no">Je n'en ai pas</label>
                                </div>
                            </div>
                            <div class="choice">
                                <h3>Contenu textuel :</h3>
                                <div class="option">
                                    <input type="radio" name="text-content" id="text-yes" />
                                    <label for="text-yes">J'ai déjà</label>
                                </div>
                                <div class="option">
                                    <input type="radio" name="text-content" id="text-no" />
                                    <label for="text-no">Je n'en ai pas</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="buttons">
                        <button type="button" onClick$={(event) => {event.preventDefault(); changeStep(2);}}>Previous</button>
                        <button type="button" onClick$={(event) => {event.preventDefault(); changeStep(4);}}>Suivant</button>
                    </div>
                </div>
                <div class="step-4">
                    <div class="info">
                        <p>Parlez nous du site que vous voulez créer avec le plus de détails possible.</p>
                        <div class="message in">
                            <div class="inputs">
                                <textarea name="message" id="message-input" cols={90} rows={10} placeholder="Votre message"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="buttons">
                        <button type="button" onClick$={(event) => {event.preventDefault(); changeStep(3);}}>Previous</button>
                        <button type="button" onClick$={(event) => {event.preventDefault(); changeStep(5);}}>Suivant</button>
                    </div>
                </div>
                <div class="step-5">
                    <div class="info">
                        <h2>Via quoi souhaitez vous être contacté ?</h2>
                        <div class="radio get-in-touch">
                            <div class="parent">
                                <input type="radio" name="contact" id="email-radio" />
                                <label for="email-radio">Adresse e-mail</label>
                            </div>
                            <div class="parent">
                                <input type="radio" name="contact" id="phone-radio" />
                                <label for="phone-radio">Numéro</label>
                            </div>
                            <div class="parent">
                                <input type="radio" name="contact" id="social-radio" />
                                <label for="social-radio">Réseau social</label>
                            </div>
                        </div>
                        <h2>Mode de paiement :</h2>
                        <div class="radio payment-methods">
                            <div class="parent">
                                <input type="radio" name="payment" id="bank-radio" />
                                <label for="bank-radio">Carte Bancaire</label>
                            </div>
                            <div class="parent">
                                <input type="radio" name="payment" id="mobile-radio" />
                                <label for="mobile-radio">Mobile Money</label>
                            </div>
                            <div class="parent">
                                <input type="radio" name="payment" id="cash-radio" />
                                <label for="cash-radio">En personne</label>
                            </div>
                        </div>
                        <div class="confidentiality">
                            <div><p>Condition de confidentialité</p></div>
                            <div class="option">
                                <input type="checkbox" name="confidentiality" id="conditions" />
                                <label for="conditions">J'ai lu(e) et j'accepte les condiditions de confidentialité</label>
                            </div>
                        </div>
                    </div>
                    <div class="buttons">
                        <button type="button" onClick$={(event) => {event.preventDefault(); changeStep(4);}}>Previous</button>
                        <button>Envoyer</button>
                    </div>
                </div>
            </form>
        </section>
    );
});


export const head: DocumentHead = {
    title: "Ohayo Dev & Design | Commande",
    meta: [
        {
            name: "description",
            content: "Commandez votre site personnalisé chez Ohayo Dev & Design. Choisissez le type de site, les services supplémentaires, et spécifiez vos besoins en détail pour une création qui vous ressemble.",
        },
    ],
};