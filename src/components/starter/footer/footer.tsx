import { component$, $ } from "@builder.io/qwik";
import ship from '/public/media/foot-001.webp';
import spatio from '/public/media/foot-002.webp';
import upArrow from '/public/media/nav/up-001.svg';
import facebook from '../icons/facebook.webp';
import whatsapp from '../icons/whatsapp.webp';
import linkedin from '../icons/linkedin.webp';
import github from '../icons/github.webp';

export default component$(() => {
    const scrollToTop = $(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    return (
        <footer>
            <div class="deco ship"><img loading="lazy" src={ship} alt="spaceship illustration" width={1500} height={844}/></div>
            <div class="deco spatio"><img loading="lazy" src={spatio} alt="spationaute illustration" width={1500} height={844}/></div>
            <div class="separation"></div>
            <div class="get-in-touch">
                <div class="tel">
                    <a href="tel:+261329078335">+261 32 90 783 35</a> <br />
                    <a href="tel:+261334144813">+261 33 41 448 13</a>
                </div>
                <div class="mail">
                    <a href="mailto:agence@ohayo-dev-design.com">agence@ohayo-dev-design.com</a>
                </div>
                <div class="adress">
                    <a href="">Madagascar, <br /> Antananarivo</a>
                </div>
            </div>
            <div class="social-media">
                <div class="ico"><a href="facebook.com" target="_blank"><img loading="lazy" src={facebook} alt="Facebook icon" width={35} height={35}/></a></div>
                <div class="ico"><a href="whatsapp.com" target="_blank"><img loading="lazy" src={whatsapp} alt="whatsapp icon" width={35} height={35}/></a></div>
                <div class="ico"><a href="linkedin.com" target="_blank"><img loading="lazy" src={linkedin} alt="linkedin icon" width={35} height={35}/></a></div>
                <div class="ico"><a href="github.com" target="_blank"><img loading="lazy" src={github} alt="github icon" width={35} height={35}/></a></div>
            </div>
            <div class="copyright">
                <p>Fait avec 💙 par Ohayo Dev & Design.</p>
            </div>

            <div class="get-to-top" onClick$={scrollToTop}>
                <img loading="lazy" src={upArrow} alt="go to top arrow" width={35} height={35}/>
            </div>
        </footer>
    );
});
