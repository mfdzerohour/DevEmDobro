/*
    && ----  E              ---- A && B  ---- verdadeiro se ambas as situações A e B forem iguais
    const a = 2
    const b = 2

    O mesmo da tabela verdade

            RESULTADO
    P | Q | P && Q
    V | V |   V
    V | F |   F
    F | V |   F
    F | F |   F
        
    VERDADEIRO
    console.log (a === b && a <= b )    // A iGUAL a B e A igual ou menor B
    
    FALSO
    console.log (a === b && a < b )    // A iGUAL a B e A menor B

    FALSO
    console.log (a === b && a > b )    // A iGUAL a B e A maior B

    FALSO
    console.log (a > b && a === b )    // A maior a B e A igual B

    FALSO
    console.log (a > b && a < b )    // A maior a B e A ou menor B
*/


/*
|| (OR) - OU
No caso do && apenas uma tem que ser verdadeira

    O mesmo da tabela verdade do OU

            RESULTADO
    P | Q | P && Q
    V | V |   V
    V | F |   V
    F | V |   V
    F | F |   F
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