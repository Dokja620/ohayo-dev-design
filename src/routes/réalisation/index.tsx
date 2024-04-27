import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";
import malala from '/media/work/malala/003-desktop.png';
import malalaM from '/media/work/malala/001-mobile.png';
import malalaT from '/media/work/malala/002-tablette.png';
import responsive from '/media/work/responsive.png';

export default component$(() => {

    return (
        <section id="works" class="container">
            <h1>Voici un aperçu des projets que nous avions réalisé :</h1>
            <div class="products">
                {/* <div class="site">
                    <div class="prev">
                        <div class="img"><img src={malala} alt="Malala website" height={742} width={1080}/></div>
                    </div>
                    <div class="descrip">
                        <h2>Malala Evasion</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veritatis culpa, nisi architecto, perferendis repellat provident nam est maiores, aliquid molestias id! Amet ipsam quisquam esse nulla adipisci. Excepturi dolore, dolor nulla atque obcaecati veniam id ratione deleniti reprehenderit quam, impedit magni! Quam natus ipsam sapiente, sed provident quia maxime.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veritatis culpa, nisi architecto, perferendis repellat provident nam est maiores, aliquid molestias id! Amet ipsam quisquam esse nulla adipisci.
                        </p>
                        <a href="/malala" target="_blank">Voir le site</a>
                    </div>
                </div> */}
                <div class="site">
                    <div class="prev">
                        <div class="responsive">
                            <img src={responsive} alt="responsive boxes" width={1398} height={665}/>
                            <div class="mobile"><img src={malalaM} alt="mobile malala evasion website prev" width={293} height={650}/></div>
                            <div class="tablette"><img src={malalaT} alt="mobile malala evasion website prev" width={384} height={512}/></div>
                            <div class="desktop"><img src={malala} alt="mobile malala evasion website prev" width={742} height={1080}/></div>
                        </div>
                    </div>
                    <div class="descrip">
                        <h2>Malala Evasion</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veritatis culpa, nisi architecto, perferendis repellat provident nam est maiores, aliquid molestias id! Amet ipsam quisquam esse nulla adipisci.
                        </p>
                        <a href="/malala" target="_blank">Voir le site</a>
                    </div>
                </div>
            </div>
        </section>
    );
});


export const head: DocumentHead = {
    title: "Ohayo Dev & Design - Nos réalisation",
    meta: [
        {
            name: "description",
            content: "Homepage ohayo dev & design",
        },
    ],
};