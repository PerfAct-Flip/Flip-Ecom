import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import ProductData from "../db/ProductData.js";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulating fetch from local JSON
    setProducts(ProductData);
  }, []);

  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
          category={product.category}
          subCategory={product.subCategory}
          sizes={product.sizes}
          bestseller={product.bestseller}
          date={product.date}
          currency="₹" // Pass currency if needed
        />
      ))}
    </div>
  );
};

export default ProductsList;
