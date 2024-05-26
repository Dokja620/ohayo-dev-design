import { component$, Slot } from "@builder.io/qwik";

export const Step03 = component$(() => {
    return (
        <div class="step-3">
            <h2>À quel stade en êtes vous ?</h2>
            <div class="third-step">
                <div class="feature">
                    <p>Hébèregement :</p>
                    <div>
                        <span>
                            <input type="radio" name="host" id="yes-host" />
                            <label for="yes-host">J'ai déjà</label>
                        </span>
                        <span>
                            <input type="radio" name="host" id="no-host" />
                            <label for="no-host">Je n'en ai pas</label>
                        </span>
                    </div>
                </div>
                <div class="feature">
                    <p>Design :</p>
                    <div>
                        <span>
                            <input type="radio" name="design" id="yes-design" />
                            <label for="yes-design">J'ai déjà</label>
                        </span>
                        <span>
                            <input type="radio" name="design" id="no-design" />
                            <label for="no-design">Je n'en ai pas</label>
                        </span>
                    </div>
                </div>
                <div class="feature">
                    <p>Visuels :</p>
                    <div>
                        <span>
                            <input type="radio" name="visual" id="yes-visual" />
                            <label for="yes-visual">J'ai déjà</label>
                        </span>
                        <span>
                            <input type="radio" name="visual" id="no-visual" />
                            <label for="no-visual">Je n'en ai pas</label>
                        </span>
                    </div>
                </div>
                <div class="feature">
                    <p>Textes :</p>
                    <div>
                        <span>
                            <input type="radio" name="texts" id="yes-texts" />
                            <label for="yes-texts">J'ai déjà</label>
                        </span>
                        <span>
                            <input type="radio" name="texts" id="no-texts" />
                            <label for="no-texts">Je n'en ai pas</label>
                        </span>
                    </div>
                </div>
            </div>
            <Slot />
        </div>
    )
});