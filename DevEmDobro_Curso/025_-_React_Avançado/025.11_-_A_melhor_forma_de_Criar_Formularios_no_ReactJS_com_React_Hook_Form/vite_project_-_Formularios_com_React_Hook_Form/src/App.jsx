import { useState } from "react";

function App() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");

    return (
        <main>
            <section className="duvida">
                <h1>
                    FICOU COM DÚVIDA? <br />
                    NOS MANDE UMA MENSAGEM!
                </h1>
                <p>
                    caso tenha ficado com qualquer dúvida basta nos mandar uma mensagem e entraremos em contato em menos de 24h.
                </p>
            </section>

            <section className="formulario">            
                <form id="meu-Formulario">
                    <label className="nome" />
                    <input 
                        type="text" 
                        name="nome" 
                        className="nome campo-Formulario" 
                        //title="Informe o seu nome" 
                        placeholder="Nome completo *" 
                        onChange={(e) => setNome(e.target.value)}
                        value={nome}
                    />
                    <p className="campo-obrigatorio nome">Nome campo obrigatório *</p> 

                    <input 
                        type="email" 
                        name="email" 
                        className="email campo-Formulario" 
                        title="Informe um endereço de e-mail" 
                        placeholder="Email *" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <label className="campo-obrigatorio email">campo obrigatório</label>

                    <input 
                        type="tel" 
                        name="telefone" 
                        className="telefone campo-Formulario" 
                        minLength="10" 
                        maxLength="11" 
                        title="Informe um telefone ou celular" 
                        pattern="[0-9]{10,11}" 
                        placeholder="Telefone *" 
                        onChange={(e) => setTelefone(e.target.value)}
                        value={telefone}
                        />
                    <label className="campo-obrigatorio telefone">campo obrigatório</label>

                    <textarea 
                        name="mensagem" 
                        className="mensagem campo-Formulario" 
                        cols="30" 
                        rows="6" 
                        maxLength="165" 
                        title="Informe uma mensagem" 
                        placeholder="Mensagem *"
                        onChange={(e) => setMensagem(e.target.value)}
                        value={mensagem}
                        ></textarea>
                    <label className="campo-obrigatorio mensagem">campo obrigatório</label> <br />

                    <label className="observacao-campo-obrigatorio">*campos obrigatórios</label>
                    <button type="button" id="btn">Enviar</button>
                </form>
            </section>
        </main>
    );
}

export default App;
