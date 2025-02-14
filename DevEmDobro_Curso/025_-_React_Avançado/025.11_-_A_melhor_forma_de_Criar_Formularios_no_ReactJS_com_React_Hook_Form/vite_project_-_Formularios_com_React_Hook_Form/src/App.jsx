// import { useState } from "react";
import { useForm }from "react-hook-form"; 

function App() {
    // const [nome, setNome] = useState("");
    // const [email, setEmail] = useState("");
    // const [telefone, setTelefone] = useState("");
    // const [mensagem, setMensagem] = useState("");

    const { register, handleSubmit, formState:{errors} } = useForm();

    const handleSubmitForm = (data) => {
        console.log(data); //{nome: 'asd', email: 'asd', telefone: 'asd', mensagem: 'asd'}
    }

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
                <form id="meu-Formulario" onSubmit={handleSubmit(handleSubmitForm)}>
                    <label className="nome" />
                    <input 
                        type="text" 
                        //Apaga aqui
                        // name="nome" 
                        className="nome campo-Formulario" 
                        //title="Informe o seu nome" 
                        placeholder="Nome completo *" 
                        // Apaga as duas linhas abaixo
                        // onChange={(e) => setNome(e.target.value)}
                        // value={nome}

                        //Acrescenta estas -- INICIO --
                            {
                                ...register('nome', {
                                    required: "Campo obrigátorio", 

                                    }
                                )
                            }
                        //Acrescenta estas -- FIM --
                    />
                    { errors.name && <p>{errors.nome.message}</p>}
                    
                    <input 
                        type="email" 
                        // name="email" 
                        className="email campo-Formulario" 
                        title="Informe um endereço de e-mail" 
                        placeholder="Email *" 
                        // onChange={(e) => setEmail(e.target.value)}
                        // value={email}
                        //Acrescenta estas -- INICIO --
                        {
                            ...register('email', {
                                required: "Campo obrigátorio", 

                                }
                            )
                        }
                        //Acrescenta estas -- FIM --
                    />
                    { errors.name && <p>{errors.nome.message}</p>}

                    <input 
                        type="tel" 
                        // name="telefone" 
                        className="telefone campo-Formulario" 
                        minLength="10" 
                        maxLength="11" 
                        title="Informe um telefone ou celular" 
                        pattern="[0-9]{10,11}" 
                        placeholder="Telefone *" 
                        // onChange={(e) => setTelefone(e.target.value)}
                        // value={telefone}
                        {
                            ...register('telefone', {
                                required: "Campo obrigátorio", 

                                }
                            )
                        }
                        //Acrescenta estas -- FIM --
                    />
                    { errors.email && <p>{errors.email.message}</p>}
                        

                    <textarea 
                        // name="mensagem" 
                        className="mensagem campo-Formulario" 
                        cols="30" 
                        rows="6" 
                        maxLength="165" 
                        title="Informe uma mensagem" 
                        placeholder="Mensagem *"
                        // onChange={(e) => setMensagem(e.target.value)}
                        // value={mensagem}
                        {
                            ...register('mensagem', {
                                required: "Campo obrigátorio", 

                                }
                            )
                        }
                        //Acrescenta estas -- FIM --
                    />
                    { errors.mensagem && <p>{errors.mensagem.message}</p>}
                    
                    <label className="observacao-campo-obrigatorio">*campos obrigatórios</label>
                    <button type="button" id="btn">Enviar</button>
                </form>
            </section>
        </main>
    );
}

export default App;
