//TypeScript - Type aliases: dando apelidos aos nossos tipos
//Os Type Aliases nos permite definir tipos com qualquer nome, como um apelido.

type id = number | string; // id pode ser um number ou string


let idCustumer: id;

idCustumer = '123';
idCustumer = 123;

let idProduct: id;
idProduct = '123';
idProduct = 123;