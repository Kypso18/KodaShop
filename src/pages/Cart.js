import { CartCard } from "../components/CartCard";
import { useTitle } from "../hooks/useTitle";



export const Cart = () => {
  useTitle("Cart");
  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: "../assets/1001.png",
    },
    {
      id: 2,
      name: "Boat Rockerz 450",
      price: 49,
      image: "../assets/1002.png",
    },
  ];
  return (
    <>
      <div className="cart">
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
