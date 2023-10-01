// context
import { useContext, useState } from 'react';
import { PortContext } from '../context/portContext';

const PortHeader = () => {

    const {theme, setTheme} = useContext(PortContext);

    const [mobileActive, setmobileActive] = useState(false);

    const handleTheme = () => {
        setTheme(!theme);
    }

    const handleMobileActive = () => {
        setmobileActive(!mobileActive);
    }

    const handleCloseMobile = () => {
        setmobileActive(false);
    }
    
    return (
        <header className={`port-header-wrapper ${theme && 'header-dark'}`}>
            <div className='port-header-top'>
                <div className='port-header-face'>
                    <div className='port-logo'>
                        <p className='port-logo-name'>Joaquín Rodriguez</p> 
                    </div>
                    <p className={`port-logo-desc ${theme && 'portLogoDescDark'}`}>Frontend programming student</p>
                    <p className={`port-logo-desc2 ${theme && 'portLogoDesc2Dark'}`}>Create exceptional web experiences.</p>
                </div>
                <nav className='port-navbar-wrapper'>
                    <ul className='port-navbar-list'>
                        <li className='port-navbar-item'>
                            <a
                            className={`port-navbar-link ${theme && 'navbarLinksDark'}`} 
                            href="#Home">
                                <span 
                                className={`port-navbar-content ${theme && 'portNavbarContentDark'}`} 
                                data-first-letter='H'>
                                    ome.
                                </span>
                            </a>
                        </li>
                        <li className='port-navbar-item'>
                            <a
                            className={`port-navbar-link ${theme && 'navbarLinksDark'}`} 
                            href="#About">
                                <span 
                                className={`port-navbar-content ${theme && 'portNavbarContentDark'}`} 
                                data-first-letter='A'>
                                    bout.
                                </span>
                            </a>
                        </li>
                        <li className='port-navbar-item'>
                            <a
                            className={`port-navbar-link ${theme && 'navbarLinksDark'}`} 
                            href="#Proyects">
                                <span 
                                className={`port-navbar-content ${theme && 'portNavbarContentDark'}`} 
                                data-first-letter='P'>
                                    royects.
                                </span>
                            </a>
                        </li>
                        <li className='port-navbar-item'>
                            <a
                            className={`port-navbar-link ${theme && 'navbarLinksDark'}`} 
                            href="#Challenges">
                                <span 
                                className={`port-navbar-content ${theme && 'portNavbarContentDark'}`} 
                                data-first-letter='C'>
                                    hallenges.
                                </span>
                            </a>
                        </li>
                        <li className='port-navbar-item'>
                            <a
                            className={`port-navbar-link ${theme && 'navbarLinksDark'}`} 
                            href="#Contact">
                                <span 
                                className={`port-navbar-content ${theme && 'portNavbarContentDark'}`} 
                                data-first-letter='C'>
                                    ontact.
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <ul className='port-widgets-wrapper'>
                <li 
                className='port-widget-item'>
                    <button onClick={handleTheme}>
                        <i className={`bi ${theme ? 'bi-sun-fill' : 'bi-moon-fill'} iconTheme ${theme && 'iconNavbarDark'}`}></i>   
                    </button>    
                </li>
                <li 
                className='port-widget-item'>
                    <a 
                    className='port-navbar-btn'
                    data-text='go to github'
                    href='https://github.com/JoaquinRodriguez04'
                    target='BLANK'>
                        <i className={`bi bi-github iconGithub ${theme && 'iconNavbarDark'}`}></i>
                    </a>
                </li>
            </ul>
            <i 
            className="bi bi-list listMobile"
            onClick={handleMobileActive}></i>
            <div className={`port-navbar-mobile ${theme && 'portNavbarMobile'} ${mobileActive && 'navBarMobileActive'}`}>
                <i 
                className="bi bi-x closeIcon"
                onClick={handleCloseMobile}
                ></i>
                <ul className='port-navbar-mobile-links'>
                    <li className='port-navbar-item'
                        onClick={handleCloseMobile}>
                        <a
                        className={`port-navbar-link ${theme && 'navbarLinksDark'}`} 
                        href="#Home">
                            <span 
                            className={`port-navbar-content ${theme && 'portNavbarContentDark'}`} 
                            data-first-letter='H'>
                                ome.
                            </span>
                        </a>
                    </li>
                    <li className='port-navbar-item'
                        onClick={handleCloseMobile}>
                        <a
                        className={`port-navbar-link ${theme && 'navbarLinksDark'}`} 
                        href="#About">
                            <span 
                            className={`port-navbar-content ${theme && 'portNavbarContentDark'}`} 
                            data-first-letter='A'>
                                bout.
                            </span>
                        </a>
                    </li>
                    <li className='port-navbar-item'
                        onClick={handleCloseMobile}>
                        <a
                        className={`port-navbar-link ${theme && 'navbarLinksDark'}`} 
                        href="#Proyects">
                            <span 
                            className={`port-navbar-content ${theme && 'portNavbarContentDark'}`} 
                            data-first-letter='P'>
                                royects.
                            </span>
                        </a>
                    </li>
                    <li className='port-navbar-item'
                        onClick={handleCloseMobile}>
                        <a
                        className={`port-navbar-link ${theme && 'navbarLinksDark'}`} 
                        href="#Challenges">
                            <span 
                            className={`port-navbar-content ${theme && 'portNavbarContentDark'}`} 
                            data-first-letter='C'>
                                hallenges.
                            </span>
                        </a>
                    </li>
                    <li 
                    className='port-navbar-item'
                    onClick={handleCloseMobile}>
                        <a
                        className={`port-navbar-link ${theme && 'navbarLinksDark'}`} 
                        href="#Contact">
                            <span 
                            className={`port-navbar-content ${theme && 'portNavbarContentDark'}`} 
                            data-first-letter='C'>
                                ontact.
                            </span>
                        </a>
                    </li>
                </ul>
                <ul className='port-navbar-mobile-social'>
                    <li className='port-widget-item'>
                        <button onClick={handleTheme}>
                            <i className={`bi bi-moon-fill iconTheme ${theme && 'iconNavbarDark'}`}></i>   
                        </button>
                    </li>
                    <li className='port-widget-item'>
                        <a 
                        className='port-navbar-btn'
                        data-text='go to github'
                        href='https://github.com/JoaquinRodriguez04'
                        target='BLANK'>
                            <i className={`bi bi-github iconGithub ${theme && 'iconNavbarDark'}`}></i>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
};

export default PortHeader;
