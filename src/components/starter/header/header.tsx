import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import logo from '/media/logo.webp';
import infoLogo from "../icons/IcOutlineInfo.svg"
import serviceLogo from "../icons/IcSharpMiscellaneousServices.svg"
import workLogo from "../icons/IcTwotoneWorkOutline.svg"
import postLogo from "../icons/IcOutlinePhotoSizeSelectActual.svg"

export default component$(() => {
    // TODO exit menu whenever I click outside when the check box is checked watch then uncheck when outside is clicked
    return (
        <header>
            <div class="menu-btn">
                <input type="checkbox" name="" id="nav-menu" />
                <label class="toogle-menu" for="nav-menu"></label>
                <div class="burger toggle">
                    <div class="bur-line"></div>
                    <div class="bur-line"></div>
                    <div class="bur-line"></div>
                </div>
                <div class="burger-links">
                    <div class="link">
                        <div class="ico-nav"><img src={serviceLogo} alt="info icon" width={20} height={20}/></div>
                        <Link href="/pricing">Nos services</Link>
                    </div>
                    <div class="link">
                        <div class="ico-nav"><img src={workLogo} alt="info icon" width={20} height={20}/></div>
                        <Link href="/réalisation">Nos réalisations</Link>
                    </div>
                    <div class="link">
                        <div class="ico-nav"><img src={postLogo} alt="info icon" width={20} height={20}/></div>
                        <Link href="/publication">Nos publications</Link>
                    </div>
                    <div class="link">
                        <div class="ico-nav"><img src={infoLogo} alt="info icon" width={20} height={20}/></div>
                        <Link href="/more">À-propos</Link>
                    </div>
                </div>
            </div>
            <nav>
                <div class="logo"><img src={logo} alt="Logo" width={50} height={50} /></div>
                <div class="nav-links">
                    <Link href="/">Acceuil</Link>
                    
                    <div class="links">
                        <div class="menu">
                            <Link href="/commande" class="command">Commencez maintenant</Link>
                        </div>
                        <div class="second">
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
});