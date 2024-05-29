import { component$, Slot } from "@builder.io/qwik";

export const Step02 = component$(() => {
    return (
        <div class="step-2">
            <h2>De quel genre de site avez vous besoin ?</h2>
            <div class="second-step">
                <p>Type de site :</p>
                <div class="site-type">
                    <span>
                        <input type="radio" name="site-type" id="full-code" />
                        <label for="full-code">Site Full-code</label>
                    </span>
                    <span>
                        <input type="radio" name="site-type" id="low-code" />
                        <label for="low-code">Site Low-code</label>
                    </span>
                </div>
                <p>Services supplémentaires :</p>
                <div class="options">
                    <span>
                        <input type="checkbox" name="responsive" id="ui-design" />
                        <label for="ui-design">Design UI/UX</label>
                    </span>
                    <span>
                        <input type="checkbox" name="responsive" id="redactor" />
                        <label for="redactor">Rédaction</label>
                    </span>
                    <span>
                        <input type="checkbox" name="responsive" id="back-end" />
                        <label for="back-end">Services Back-End</label>
                    </span>
                    <span>
                        <input type="checkbox" name="responsive" id="seo" />
                        <label for="seo">Réferencement naturel</label>
                    </span>
                    <span>
                        <input type="checkbox" name="responsive" id="extra-services" />
                        <label for="extra-services">Sans service supplémentaires</label>
                    </span>
                </div>
            </div>
            <Slot />
        </div>
    )
});