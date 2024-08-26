import Profile from '../../assets/profile.svg'
import './Presentation.scss'

export function Presentation(){
    return (
        <section id="apresentation">
        <div className="container">
            <div className="info-apresentation">
                <h1>
                    Olá!<br />
                    Meu nome é Fulano<br />
                    e eu sou<br />
                    <span>Desenvolvedor Web</span>
                </h1>
                <div className="profile-photo">
                    <img src={Profile} alt="Alan Code Start" />
                </div>
            </div>
        </div>
    </section>
    )
}