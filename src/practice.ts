(()=>{
let productPrice = 100;
productPrice = 12;
console.log('productPrice', productPrice);

let customerAge : number = 28;
// customerAge = customerAge + '1'
customerAge = customerAge + 1;

let productInStock : number;
console.log('productInStock', productInStock) //me avisa de que aun no tiene ningun valor asignado

if (productInStock > 10) {
    console.log ('is greater')
}


let discount = parseInt('123');
console.log(discount);

let hex = 0xfff;
console.log(hex)
let bin = 0b1010;
console.log(bin);

//boolean

let isEnable: boolean = true;
isEnable= false;

const random = Math.random();
isEnable = random <= 1 ? true : false;
const concat= `hola
hola
gola ${random} así concateno`;

const string: string = 'hola';

//arrays

let prices = [1,2,3,4, 'hola', true];
let mixed : (number | string | Object) [] = ['hola'];

//any

let myDynamicVar : any; //NO USAR!!
//type: para crear nuestros propios tipos; con camelCase

type UserId = string | number | boolean;
let userId: UserId;
function greeting (userId: UserId, size: Sizes) {
    if(typeof userId === 'string'){
        console.log (`string${userId.toLowerCase()}`)
    }
}

//Literal types
// type Sizes = 'm' | 's' | 'l';
// type Product = {
//     title: string, 
//     createdAt : Date,
//     stock: number, 
//     size?: Sizes
// }
let shirtSize: Sizes;
shirtSize = 'm';
shirtSize = 's';
shirtSize = 'l';
shirtSize = 'fkdsf';

greeting(111, 's'); //solo va a aceptar el userID q es numero/string/bool y las tallas que yo he tipado


//null y undefined

function hi(name: string | null){
    let hello = 'hola';
    hello += name?.toLowerCase() || 'nobody';// me autocompleta y pone ? ; porque solo puede poner toLowerCase en caso de que name no sea nulo, 
    console.log(hello)
}

//funciones

const  createProductToJson = (
    title: string, 
    createdAt: Date, 
    stock: number,
    size?: Sizes
) => {
    return {
        title, 
        createdAt, 
        stock, 
        size
    }
}

const product1 =createProductToJson('p1', new Date(), 12,);
console.log(product1.size)


//retorno de fx. void

const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach((item)=>{
        total += item;
    });
    return total;
}

const rta = calcTotal([1,2,1,2,1]);


// fx con objetos

const login = (data : {email:string, password: string}) => {
    console.log(data.email, data.password);
}

})