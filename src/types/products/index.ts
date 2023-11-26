export type ProductRate = {
    rate: number,
    count: number
}
export type Product = {
    id: number,
    title: string,
    price: number,
    image: string,
    description: string,
    category: string,
    rating: ProductRate
}
 
export const initalProduct: Product = {
    id: 0,
    title: "",
    image: "",
    price: 0,
    description: "",
    category: "",
    rating: {
      rate: 0,
      count: 0,
    }
  }