import SendIcon from "../../assets/send-icon.svg";
import "./Contact.scss";

export const Contact = () => {
  
  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    return console.log(event.target.value);
  }

  function handleSubmitForm(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log(event, "evento de submit");
  }

  function handleTitleMouseEnter() {
    const title = document.getElementById("title");

    if (title) {
      title.style.color = "#f10677";
    }
  }

  function handleTitleMouseLeave() {
    const title = document.getElementById("title");

    minhaFuncao()

    if (title) {
      title.style.color = "#cccccc";
    }
  }

  function minhaFuncao() {
    console.log('Console da minha função')
  }

  return (
    <div className="container">
      <div className="header-section">
        <h1
          id="title"
          className="title"
          onMouseEnter={handleTitleMouseEnter}
          onMouseLeave={handleTitleMouseLeave}
        >
          Vamos conversar?
        </h1>
        <h2 className="subtitle">Entre em contato comigo!</h2>
      </div>
      <div className="info-contact">
        <form>
          <input
            type="text"
            id="nome"
            placeholder="Nome"
            onChange={handleChangeInput}
          />
          <input type="email" id="email" placeholder="E-mail" />
          <input type="text" id="assunto" placeholder="Assunto" />
          <textarea id="mensagem" placeholder="Mensagem"></textarea>

          <div className="submit-form">
            <button type="button" onClick={handleSubmitForm}>
              Enviar
            </button>
            <img
              src={SendIcon}
              alt="Formulário de Contato Portfólio Code Start"
            />
          </div>
        </form>
        <p id="loading" className="response-forms" style={{ display: "none" }}>
          Carregando...
        </p>
        <p
          id="success-message"
          className="response-forms"
          style={{ display: "none" }}
        >
          Mensagem enviada com sucesso
        </p>
        <p
          id="error-message"
          className="response-forms"
          style={{ display: "none" }}
        >
          Erro ao enviar mensagem. Envie um e-mail para email@test.com
        </p>
      </div>
    </div>
  );
}
