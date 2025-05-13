function sendMessage(userName, isLogged) {
    console.log("Ol\u00E1 ".concat(userName, ", voc\u00EA est\u00E1 ").concat(isLogged ? " não" : "", " pode logar."));
}
var userName = "Marcelo";
var isLogged = true;
sendMessage(userName, isLogged);
