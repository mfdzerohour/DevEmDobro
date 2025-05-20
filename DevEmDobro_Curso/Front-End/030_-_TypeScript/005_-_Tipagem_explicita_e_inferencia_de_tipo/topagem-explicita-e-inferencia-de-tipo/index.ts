//Quando explicitamente estou definindo o tipo de uma variável, 
// não preciso usar o operador "as" para fazer a conversão de tipos.
let nome: string = "Marcelo"; //Implicito
let nome2 = "Marcelo"; //Inferencia ele ATRIBUI o :string automaticamente ele tenta fazer isto

function sendMessage(userName: string, isLogged: boolean) {
    console.log(`Olá ${userName}, você ${!isLogged ? "não" : ""} pode logar!`)  
}

const userName: string = "Marcelo";
const isLogged: boolean = true;

sendMessage(userName, isLogged);