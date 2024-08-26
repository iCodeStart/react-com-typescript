import './AboutMe.scss'

export function AboutMe(){
    return (
        <section id="aboutme">
        <div className="container">
            <div className="info-aboutme">
                <div className="header-section">
                    <h1 className="title">Sobre mim</h1>
                    <h2 className="subtitle">Um desenvolvedor apaixonado por novos conhecimentos</h2>
                </div>
                <p>👋 Meu nome é Alan Costa Braulio, mas pode me chamar de Copolla! Tenho 24 anos e sou apaixonado por
                    futebol! Gosto de sentar com os amigos e conversar sobre qualquer assunto, desde que seja
                    acompanhado daquela boa música e uma cervejinha!</p>
                <p>👨‍💻 Estou há um pouco mais de 5 anos desenvolvendo e programando interfaces com JavaScript, React
                    JS e Typescript.</p>
                <p>🎓 Sou graduado em Engenharia de Computação pela PUC Minas.</p>
                <p>💡 Meus interesses na área de programação são no Front-end com React JS, Next JS e Vue JS.</p>
                <p>🚀 No momento estou adquirindo novos conhecimentos estudando desenvolvimento mobile com Flutter</p>
            </div>
        </div>
    </section>
    )
}