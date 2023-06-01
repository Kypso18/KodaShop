import "./ProductCard.css";

//

export const ProductCard = ({ product }) => {
  const { name, price, image } = product;
  return (
    <>
      <div className="productCard">
        <img src={image} alt={name} />
        <div className="name">{name}</div>
        <div className="action">
          <p>$ {price}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
};
