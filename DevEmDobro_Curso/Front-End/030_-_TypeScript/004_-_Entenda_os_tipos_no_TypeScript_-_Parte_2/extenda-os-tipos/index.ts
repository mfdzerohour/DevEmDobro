// function sendMessage(userName: string, isLogged: boolean) {
//     console.log(
//         `Olá ${userName}, você ${!isLogged ? "não" : ""} pode logar.`
//     );
// }

// const userName = "Marcelo";
// const isLogged = true;

// sendMessage(userName, isLogged);


//TIPOS PRIMITIVOS
let nome: string;// = "Marcelo";
let idade: number = 36;
let mandouEmail: boolean = true;

nome = "Aline";

console.log(`Nome: ${nome}, Idade: ${idade}, Mandou e-mail: ${mandouEmail}`);

//TIPOS PRIMITIVOS
//ARRAY OU VETOR
let idades: number [] = [36, 30, 25, 40];
let nomes: string[] = ["Marcelo", "Aline", "Lucas", "Ana"];

//ou assim - Este baixo seria o GENERICS que sera abordado mais a frente
let idades2: Array<number> = [36, 30, 25, 40];
let nomes2: Array<string> = ["Marcelo", "Aline", "Lucas", "Ana"];

//any - quando não quer tipar e que ele seja qualquer coisa
let qualquerCoisa: any = "Marcelo";
//Todos ele aceitou o valor se fosse antes tipado daria erro
qualquerCoisa = 36;
qualquerCoisa = true;

//TIPOS OBJETOS

//A anotação de tipo do parâmetro é um tipo de objeto
function imprimirCoordenadas(pt: {x: number, y: number}) {
    console.log("The cordinate's X value is: " + pt.x);
    console.log("The cordinate's Y value is: " + pt.y);
}
imprimirCoordenadas({ x: 10, y: 20 });

//Poderia ser assim também
let pt: { x: number; y: number } = { x: 10, y: 20 };
imprimirCoordenadas(pt);