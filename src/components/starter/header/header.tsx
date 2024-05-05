import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import logo from '/media/logo-md-1.webp';
// import infoLogo from "../icons/IcBaselineInfo.svg"
// import serviceLogo from "../icons/IcSharpMiscellaneousServices.svg"
// import workLogo from "../icons/IcRoundFolderShared.svg"
// import postLogo from "../icons/IcBaselinePhotoSizeSelectActual.svg"
// import orderLogo from "../icons/IcBaselineAppRegistration.svg"

export default component$(() => {
    // TODO exit menu whenever I click outside when the check box is checked watch then uncheck when outside is clicked
    return (
        <header>
            <nav>
                <div class="logo">
                    <Link href='/' class="ico-planet"><img src={logo} alt="aze" width={378} height={172}/></Link>
                </div>

                <div class="nav-links">
                    <div class="link"><Link href='/'>Réalisations</Link></div>
                    <div class="link"><Link href='/'>Services</Link></div>
                    <div class="link"><Link href='/'>Publications</Link></div>
                    <div class="link"><Link href='/'>A-propos</Link></div>
                </div>

                <div class="link command"><Link href='/'>Concevoir</Link></div>

                <input type="checkbox" name="burger" id="burger-toggle" class="burger-btn"/>
                <label for="burger-toggle" id="toggle-off"></label>

                <div class="burger-menu">
                    <span></span>
                    <div><span></span><span></span></div>
                    <span></span>
                </div>
            </nav>
        </header>
    );
});