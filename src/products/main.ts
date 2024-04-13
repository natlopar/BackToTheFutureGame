import {addProduct, calcStock, products} from './product.service';

addProduct({title: 'camiseta', createdAt:new Date(2024,4, 10), stock:  3 });

addProduct({title: 'pantalón', createdAt:new Date(2024,2, 8), stock:  10 });

console.log(products);