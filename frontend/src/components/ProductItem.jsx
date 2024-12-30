/* eslint-disable react/prop-types */
import "./Product.css";

const ProductItem = ({
  id,
  name,
  description,
  price,
  image,
  category,
  subCategory,
  sizes,
  bestseller,
  date,
  currency,
}) => {
  return (
    <div className="card-container">
      <a
        href={`/product/${id}`}
        onClick={() => scrollTo(0, 0)}
        className="product-link"
      >
        <div className="product-image-container">
          <img
            className="product-image"
            src={image[0]}
            alt={name}
          />
        </div>
        <div className="product-details">
          <h2 className="product-name">{name}</h2>
          <p className="product-description">{description}</p>
          <p className="product-category">
            {category} / {subCategory}
          </p>
          <p className="product-sizes">
            Available Sizes: {sizes.join(", ")}
          </p>
          {bestseller && <p className="product-bestseller">Bestseller</p>}
          <p className="product-price">
            {currency}
            {price}
          </p>
          <p className="product-date">
            Added On: {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </a>
    </div>
  );
};

export default ProductItem;
