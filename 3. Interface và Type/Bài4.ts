type OptionalFields<T> = {
    [P in keyof T]?: T[P];
};
interface Product {
    productId: string;
    productName: string;
    price: number;
    description?: string; 
}

type FlexibleProduct = OptionalFields<Product>;

const product1: FlexibleProduct = {
    productId: "P001",
    productName: "Laptop X1"
};

const product2: FlexibleProduct = {
    price: 1500,
    description: "Ultra-thin laptop"
};

console.log("Product 1 (FlexibleProduct):", product1);
console.log("Product 2 (FlexibleProduct):", product2);