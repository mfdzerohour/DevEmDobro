//DOCUMENTAÇÃO
//www.typescriptlang.org/docs/handbook/enums.html
//www.typescriptlang.org/pt/play#example/enums

// enum Colors {
//     RED,
//     GREEN,
//     BLUE,
//     YELLOW,
//     BLACK,
//     WHITE,
// }

// function showColor(color) {
//     console.log(color);
// }
// showColor(Colors.RED);
// showColor(Colors.GREEN);
// showColor(Colors.BLUE);
// showColor(Colors.YELLOW);
// showColor(Colors.BLACK);
// showColor(Colors.WHITE);

//podemos percorrer o enum usando o FOR
// for (const key in Colors) {
//     console.log(key);
// }

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// enum UserResponse {
//     No = 0,
//     Yes = 1,
// }

// function respondedEmail(recipient: String, UserResponse: UserResponse): void {
//     // ...salvar no banco se o usuário respondeu ou não
// }

// respondedEmail("Caroline", UserResponse.Yes);

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// enum TradeType{
//     ACAO = 9281,
//     TESOURO_DIRETO = 3221,
//     TESOURO_SELIC = 6554,
//     CDB = 1234,
// }

// saveTrade(TradeType.ACAO, 1000);

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
https: https: enum StatusCodes {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
}

StatusCodes.BadRequest;

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
enum gender{
    M = 'Masculino',
    F = 'Feminino',
    O = 'Outro',
}

//Pegar os valores do enum
const ok = StatusCodes.OK; //200
const indexOK = StatusCodes['OK']; //200
const stringBadRequest = StatusCodes[400]; //BadRequest