/*
    ==  ----  Igual  ----  a == b  ----  Verdadeiro se "a" for igual a "b"
    3 == "3" //Ele considera que o valor igual sem se importar com o tipo (numero ou texto)

    ===  ----  idêntico  ---- a === b  ---- Verdadeiro se "a" idêntico a "b"
    3 === 3 ou "3" === "3" //Ele considera o valor e tipo são iguais

    !==  ----  não idêntico  ---- a !== b  ---- Verdadeiro se "a" idêntico a "b"
    3 === "3" //Ele faz o inverso do anterior, se os numeros ou tipos forem diferentes ele considera verdadeiro, se for igual é falso, para queseja verdade um deles tem que ser falso, pode ser o número ou o tipo, se for diferente ele considera falso

    !=  ----  diferente  ---- a != b  ----  Verdadeiro se "a" diferente de "b" 
    
    4 != "5" //Ele faz o inversão do primeiro exemplo independente de ser número ou string se for diferente os valores ele é verdadeiro, ele faz o inverso do primeiro exemplo

    <  ----  menor que  ----  a < b  ---- verdadeiro quando "a" for menor que "b"
    3 < 5

    >  ----  maior que  ----  a > b  ---- verdadeiro quando "a" for maior que "b"
    3 > 5

    <=  ----  menor ou igual que  ----  a <= b  ---- verdadeiro quando "a" for menor ou igual que "b"
    5 <= 5

    =>  ----  maior ou igual que  ----  a => b  ---- verdadeiro quando "a" for maior ou igual que "b"
    3 => 3
*/

// const a = 4;
// const b = "4";

// console.log(a != b)

// A segunda parte é referente a esta abaixo

/*
&& - E
No caso do && ambas tem que ser verdadeiros
*/
const a = 2
const b = 2

console.log (a === b && a <= b )
//              V     e    V    = Verdadeiro  

console.log (a === b && a < b )
//              V     e    F    = Falso  

console.log (a > b && a === b )
//             F    e    V    = Falso  

console.log (a > b && a < b )
//             F    e   F    = Falso  

/*
|| (OR) - OU
No caso do && apenas uma tem que ser verdadeira
*/

console.log (a === b || a <= b )
//              V     e    V    = Verdadeiro  

console.log (a === b || a < b )
//              V     e    F    = Verdadeiro  

console.log (a > b || a === b )
//             F    e    V    = Verdadeiro  

console.log (a > b || a < b )
//             F    e   F    = Falso  

/*
! (NOT) - NÃO
Ele inverte o valor como abaixo
*/

console.log (!(a === b))
//          (Not(Verdade)) = Falso

console.log (!(a > b))
//          (Not(Falso)) = Verdadeiro