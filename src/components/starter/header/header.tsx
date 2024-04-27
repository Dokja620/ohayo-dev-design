import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import logo from '/media/logo.webp';

export default component$(() => {
    // TODO exit menu whenever I click outside when the check box is checked watch then uncheck when outside is clicked
    return (
        <header>
            <nav>
                <div class="logo"><img src={logo} alt="Logo" width={50} height={50} /></div>
                <div class="nav-links">
                    <Link href="/">Acceuil</Link>
                    
                    <div class="links">
                        <div class="menu">
                            <Link href="/commande" class="command">Commander</Link>
                        </div>
                        <div class="menu second">
                            <input type="checkbox" name="" id="" />
                            <div class="burger">
                                <div class="bur-line"></div>
                                <div class="bur-line"></div>
                                <div class="bur-line"></div>
                            </div>
                            <div class="burger-links">
                                <Link href="/pricing">Nos prix</Link>
                                <Link href="/réalisation">Nos réalisations</Link>
                                <Link href="/publication">Nos publications</Link>
                                <Link href="/more">À-propos</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </nav>
        </header>
    );
});