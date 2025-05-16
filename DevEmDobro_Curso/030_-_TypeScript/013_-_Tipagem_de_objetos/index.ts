type Customer = {
    name: string,
    age: number,
}

function showCustomerInfo(customer: Customer) {
    console.log(`O nome do cliente é ${customer.name} e ele tem ${customer.age} anos`);
}

//Você está correto, a função `showCustomerInfo` espera receber 
// um objeto do tipo `Customer`, mas você está passando dois 
// argumentos separados (string e number). O correto é passar 
// um objeto com as propriedades `name` e `age`. 
// Veja como deve ficar:

//Assim, o `console.log` será disparado corretamente!
showCustomerInfo({ name: 'Marcelo', age: 18 })