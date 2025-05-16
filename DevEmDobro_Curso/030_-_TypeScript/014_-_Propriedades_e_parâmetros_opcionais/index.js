var newCostumer = {
    firstName: 'Lucas',
    // lastName: 'Lima',
    age: 23
};
console.log(newCostumer);
//funções podem ter valores opcionais também, por exemplo:
function printName(firstName, lastName) {
    console.log("O primeiro nome \u00E9: ".concat(firstName, " e o ultimo nome \u00E9 ").concat(lastName));
}
printName('Lucas');
