import { CartCard } from "../components/CartCard";
import { useTitle } from "../hooks/useTitle";
import image1 from '../assets/1001.png';
import image2 from '../assets/1002.png';


export const Cart = () => {
  useTitle("Cart");
  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: image1,
    },
    {
      id: 2,
      name: "Boat Rockerz 450",
      price: 49,
      image: image2,
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
