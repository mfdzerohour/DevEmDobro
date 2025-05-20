//TypeScript - Interfaces: mais uma forma de nomear tipos de objetos
//Nessa aula, vamos aprender a criar Interfaces. Da mesma forma que usamos o Type para criar
// um tipo, podemos utilizar a Interface para criar um tipo, mas a diferença entre eles é que
// a Interface pode ser estendida para outras Interfaces.

//USANDO INTERFACE
interface InterfaceCustomer {
    name: string;
    age: number;
}


interface InterfaceAddress{
    street: string;
    city: string;
    state: string;
    zip: string;
}
    
interface InterfaceCustomerProfile extends InterfaceCustomer, InterfaceAddress { 
    id: number | string;
}

const newProfilçe: InterfaceCustomerProfile = {
    id: 1,
    name: 'John',
    age: 30,
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001'
}


//USANDO TYPE
type TypeCustomer = {
    name: string;
    age: number;
}


type TypeAddress = {
    street: string;
    city: string;
    state: string;
    zip: string;
}

type TypeCustomerProfile = TypeCustomer & TypeAddress;

const newProfile2: TypeCustomerProfile = {
    name: 'John',
    age: 30,
    street: '123 Main St',  
    city: 'New York',   
    state: 'NY',
    zip: '10001'
}