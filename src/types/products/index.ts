export type Product = {
    _id: string,
    title: string,
    price: number,
    image: string,
    description: string,
    category: string,
    rate: number,
}
 
export const initalProduct: Omit<Product, "_id"> = {
    title: "",
    image: "",
    price: 0,
    description: "",
    category: "",
    rate: 0
  }