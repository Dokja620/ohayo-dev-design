import { component$, Slot } from "@builder.io/qwik";

export const Step03 = component$(() => {
    return (
        <div class="step-3">
            <h2>À quel stade en êtes vous ?</h2>
            <p>Lesquels de ces options vous avez déjà ?</p>
            <div class="third-step">
                <span class="feature">
                    <input type="checkbox" name="host" id="host" />
                    <label for="host"><span>Hébergement</span></label>
                </span>
                <span class="feature">
                    <input type="checkbox" name="design" id="design" />
                    <label for="design"><span>Design</span></label>
                </span>
                <span class="feature">
                    <input type="checkbox" name="visual" id="visual" />
                    <label for="visual"><span>Visuel</span></label>
                </span>
                <span class="feature">
                    <input type="checkbox" name="textss" id="textss" />
                    <label for="textss"><span>Textes</span></label>
                </span>
            </div>
            <Slot />
        </div>
    )
});