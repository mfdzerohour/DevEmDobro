function sendMessage(userName: string, isLogged: boolean) {
    console.log(`Olá ${userName}, você ${!isLogged ? "não" : ""} pode logar.`);
}

const userName = "Marcelo";
const isLogged = true;

sendMessage(userName, isLogged);
