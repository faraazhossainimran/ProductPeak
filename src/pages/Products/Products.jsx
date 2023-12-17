import React from "react";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../../components/Products/ProductCard/ProductCard";



const Products = () => {
  const [products] = useProducts();
  console.log(products);
  return (
    <div className="card  container mx-auto">
      <h1 className="text-3xl font-semibold py-12 m-4 md:m-0 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">Products</h1>
      <div className="grid m-4 md:m-0 md:grid-cols-1 gap-6">
        {products?.map((product) => (
          <ProductCard key={product._id} productCard={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
