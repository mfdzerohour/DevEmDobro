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
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
function respondedEmail(recipient, UserResponse) {
    // ...salvar no banco se o usuário respondeu ou não
}
respondedEmail("Caroline", UserResponse.Yes);
