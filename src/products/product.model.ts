export type Sizes = 'm' | 's' | 'l';
export type Product = {
    title: string, 
    createdAt : Date,
    stock: number, 
    size?: Sizes
};