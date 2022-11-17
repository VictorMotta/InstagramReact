import Icone from "./Icone";

const NavBar = () => {
    return (
        <header>
            <div className='container-main-menu hidden'>
                <div className='logo'>
                    <Icone hrefIcon='#' nameIcon='logo-instagram' classIcon='logo-instagram' />

                    <div className='barra-logo hidden'></div>
                    <a href='#'>
                        <img src='./assets/logo.png' alt='' />
                    </a>
                </div>

                <input placeholder='Pesquisar' type='text' className='pesquisar hidden' />

                <nav>
                    <Icone hrefIcon='#' nameIcon='navigate-outline' classIcon='icones' />
                    <Icone hrefIcon='#' nameIcon='compass-outline' classIcon='icones hidden' />
                    <Icone hrefIcon='#' nameIcon='heart-outline' classIcon='icones hidden' />
                    <Icone hrefIcon='#' nameIcon='person-outline' classIcon='icones hidden' />
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
