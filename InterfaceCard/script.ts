type Product = {
  id : number;
  name: string;
  price: number;
  category: string;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
  { id: 2, name: "Shirt", price: 20, category: "Clothing" },
  { id: 3, name: "Shoes", price: 50, category: "Footwear" },
  { id: 4, name: "Book", price: 10, category: "Books" },
  { id: 5, name: "Mobile", price: 500, category: "Electronics" }, 
  { id: 6, name: "Pants", price: 30, category: "Clothing" },
  { id: 7, name: "Socks", price: 5, category: "Footwear" },
  { id: 8, name: "Pen", price: 2, category: "Office Supplies" },
  { id: 9, name: "Keyboard", price: 50, category: "Electronics" },
  { id: 10, name: "Jeans", price: 40, category: "Clothing" },
];

function getMostExpensiveProduct(products: Product[]): Product | undefined{
  if (products.length === 0) return undefined;
  let mostExpensiveProduct = products[0];
  for (const product of products) {
    if (product.price > mostExpensiveProduct.price) {
      mostExpensiveProduct = product;
    }
  }
  return mostExpensiveProduct;
}



console.log(getMostExpensiveProduct(products));