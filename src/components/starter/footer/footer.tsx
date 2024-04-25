import { component$, $ } from "@builder.io/qwik";
import ship from '/media/foot-001.webp';
import spatio from '/media/foot-002.webp';
import upArrow from '/media/nav/up-001.svg';
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
            <div class="deco ship"><img src={ship} alt="spaceship illustration" width={1500} height={844}/></div>
            <div class="deco spatio"><img src={spatio} alt="spationaute illustration" width={1500} height={844}/></div>
            <div class="separation"></div>
            <div class="get-in-touch">
                <div class="tel">
                    <p>Tel :</p>
                    <a href="tel:+261329068335">+261 32 90 683 35</a> <br />
                    <a href="tel:+261334144813">+261 33 41 448 13</a>
                </div>
                <div class="mail">
                    <p>E-mail :</p>
                    <a href="mailto:ohayodevanddesign@gmail.com">ohayodevanddesign@gmail.com</a>
                </div>
                <div class="adress">
                    <p>Adresse :</p>
                    <a href="">Madagascar, <br /> Antananarivo</a>
                </div>
            </div>
            <div class="social-media">
                <div class="ico"><a href="facebook.com" target="_blank"><img src={facebook} alt="Facebook icon" width={35} height={35}/></a></div>
                <div class="ico"><a href="whatsapp.com" target="_blank"><img src={whatsapp} alt="whatsapp icon" width={35} height={35}/></a></div>
                <div class="ico"><a href="linkedin.com" target="_blank"><img src={linkedin} alt="linkedin icon" width={35} height={35}/></a></div>
                <div class="ico"><a href="github.com" target="_blank"><img src={github} alt="github icon" width={35} height={35}/></a></div>
            </div>
            <div class="copyright">
                <p>Fait avec 💙 par Ohayo Dev & Design.</p>
            </div>

            <div class="get-to-top" onClick$={scrollToTop}>
                <img src={upArrow} alt="go to top arrow" width={35} height={35}/>
            </div>
        </footer>
    );
});
