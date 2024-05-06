import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import logo from '/media/logo-md-1.webp';
import infoLogo from "../icons/IcBaselineInfo.svg"
import serviceLogo from "../icons/IcSharpMiscellaneousServices.svg"
import workLogo from "../icons/IcRoundFolderShared.svg"
import postLogo from "../icons/IcBaselinePhotoSizeSelectActual.svg"
import orderLogo from "../icons/IcBaselineAppRegistration.svg"

export default component$(() => {
    return (
        <header>
            <nav>
                <div class="logo">
                    <Link href='/' class="ico-planet"><img src={logo} alt="aze" width={378} height={172}/></Link>
                </div>

                <input type="checkbox" name="burger" id="burger-toggle" class="burger-btn"/>
                <label for="burger-toggle" id="toggle-off"></label>

                <div class="nav-links">
                    <div class="link order"><span class="ico-nav"><img src={orderLogo} alt="" width={20} height={20}/></span><Link href='/'>Concevoir</Link></div>
                    <div class="link"><span class="ico-nav"><img src={serviceLogo} alt="" width={20} height={20}/></span><Link href='/'>Services</Link></div>
                    <div class="link"><span class="ico-nav"><img src={workLogo} alt="" width={20} height={20}/></span><Link href='/'>Réalisations</Link></div>
                    <div class="link"><span class="ico-nav"><img src={postLogo} alt="" width={20} height={20}/></span><Link href='/'>Publications</Link></div>
                    <div class="link"><span class="ico-nav"><img src={infoLogo} alt="" width={20} height={20}/></span><Link href='/'>A-propos</Link></div>
                </div>

                <div class="link command"><Link href='/'>Concevoir</Link></div>


                <div class="burger-menu">
                    <div class="line"></div>
                    <div class="double"><div class="line"></div><div class="line"></div></div>
                    <div class="line"></div>
                </div>
            </nav>
        </header>
    );
});