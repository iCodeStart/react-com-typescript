import Logo from '../../assets/logo.svg';
import Github from '../../assets/github.svg';
import Twitter from '../../assets/twitter.svg';
import Linkedin from '../../assets/linkedin.svg';

import './Footer.scss'

export function Footer(){
    return (
        <footer>
        <div className="container">
            <div className="first-infos-footer">
                <div className="logo">
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className="container-right-footer">
                    <p className="cellphone-footer">+55 99999 - 9999</p>
                    <p className="email-footer">contato@fulano.com</p>
                    <div className="icons-menu">
                        <a href="#" target="_blank"><img src={Github} alt="GitHub Code Start"/></a>
                        <a href="#" target="_blank"><img src={Twitter} alt="Twitter Code Start"/></a>
                        <a href="#" target="_blank"><img src={Linkedin} alt="Linkedin Code Start"/></a>
                    </div>
                </div>
            </div>
            <div className="second-infos-footer">
                <nav className="menu-footer">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#aboutme">Sobre</a></li>
                        <li><a href="#tecnologies">Tecnologias</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
                <p className="copyright">Todos os direitos reservados @ Code Start 2024</p>
            </div>
        </div>
    </footer>
    )
}