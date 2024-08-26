import Logo from '../../assets/logo.svg';
import GitHub from '../../assets/github.svg';
import Twitter from '../../assets/twitter.svg';
import Linkedin from '../../assets/linkedin.svg';

import './Header.scss';

export function Header(){
    return (
        <header>
        <div className="container">
            <div className="info-header">
                <div>
                    <img src={Logo} alt="Logo Code Start" />
                </div>
                <div className="info-menu">
                    <nav className="menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#aboutme">Sobre</a></li>
                            <li><a href="#tecnologies">Tecnologias</a></li>
                            <li><a href="#projects">Projetos</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </nav>
                    <div className="icons-menu">
                        <a href="#" target="_blank"><img src={GitHub} alt="Github Code Start" /></a>
                        <a href="#" target="_blank"><img src={Twitter} alt="Twitter Code Start" /></a>
                        <a href="#" target="_blank"><img src={Linkedin} alt="Linkedin Code Start" /></a>
                    </div>
                </div>
                <div className="mobile-menu-icon">&#9776;</div>
            </div>
        </div>
    </header>
    )
}
