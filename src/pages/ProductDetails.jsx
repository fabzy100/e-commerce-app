import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  // get the product id from url
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  //get the single product based on id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if product is not found
  if (!product) {
    return (
      <section className="flex items-center justify-center h-screen">
        Loading...
      </section>
    );
  }

  // destructure product
  const { title, price, description, image } = product;
  return (
    <section className="pt-[450px] md:pt-32 pb-[400px] md:pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        {/* image and text wrapper */}
        <div className="flex flex-col items-center lg:flex-row">
          {/* image */}
          <div className="flex items-center justify-center flex-1 mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-xs" src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
            <div className="mb-6 text-2xl font-medium text-red-500">$ {price}</div>
            <p className="mb-8">{description}</p>
            <button onClick={()=>addToCart(product, product.id)} className='px-8 py-4 text-white bg-primary'>Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;