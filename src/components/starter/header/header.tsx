import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import logo from '/media/logo-md-1.webp';
import infoLogo from "../icons/IcBaselineInfo.svg"
import serviceLogo from "../icons/IcSharpMiscellaneousServices.svg"
import workLogo from "../icons/IcRoundFolderShared.svg"
// import postLogo from "../icons/IcBaselinePhotoSizeSelectActual.svg"
import orderLogo from "../icons/IcBaselineAppRegistration.svg"

export default component$(() => {
    function splitTextToChars(text: string) {
    return text.split('').map((char, index) => (
        <span key={index}>{char}</span>
    ));
}
    return (
        <header>
            <nav>
                <div class="logo">
                    <Link href='/' class="ico-planet"><img src={logo} alt="aze" width={378} height={172}/></Link>
                </div>

                <input type="checkbox" name="burger" id="burger-toggle" class="burger-btn"/>
                <label for="burger-toggle" id="toggle-off"></label>

                <div class="nav-links">
                    <div class="link order-link"><span class="ico-nav"><img src={orderLogo} alt="" width={20} height={20}/></span><Link href='/concevoir-site-web'>{splitTextToChars('Concevoir')}</Link></div>
                    <div class="link"><span class="ico-nav"><img src={serviceLogo} alt="" width={20} height={20}/></span><Link href='/services-web'>{splitTextToChars('Services')}</Link></div>
                    <div class="link"><span class="ico-nav"><img src={workLogo} alt="" width={20} height={20}/></span><Link href='/portefolio'>{splitTextToChars('Réalisations')}</Link></div>
                    <div class="link"><span class="ico-nav"><img src={infoLogo} alt="" width={20} height={20}/></span><Link href='/a-propos'>{splitTextToChars('A-propos')}</Link></div>
                </div>

                <div class="link command"><Link href='/concevoir-site-web'>{splitTextToChars('Concevoir')}</Link></div>

                <div class="burger-menu">
                    <div class="line"></div>
                    <div class="double"><div class="line"></div><div class="line"></div></div>
                    <div class="line"></div>
                </div>
            </nav>
        </header>
    );
});