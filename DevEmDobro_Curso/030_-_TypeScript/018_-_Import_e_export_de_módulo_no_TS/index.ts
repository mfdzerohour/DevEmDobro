import { paginationPerPage, Customer } from "./customer";

interface specialCustomer extends Customer {
    couponQuantity: number;
}

const specialCustomer: specialCustomer = {
    couponQuantity: 5,
    name: "Marie",
    age: 32
}