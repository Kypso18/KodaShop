import { ProductCard } from "../components/ProductCard";
import { useTitle } from "../hooks/useTitle";
import image1 from '../assets/1001.png';
import image2 from '../assets/1002.png';
import image3 from '../assets/1003.png';
import image4 from '../assets/1004.png';
import image5 from '../assets/1005.png';
import image6 from '../assets/1006.png';


export const Home = () => {
  useTitle("Home");
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
    {
      id: 3,
      name: "JBL Tune 760NC",
      price: 179,
      image: image3,
    },
    {
      id: 4,
      name: "Logitech H111 Wired",
      price: 39,
      image: image4,
    },
    {
      id: 5,
      name: "APPLE Airpods Max Bluetooth Headset",
      price: 199,
      image: image5,
    },
    {
      id: 6,
      name: "ZEBRONICS Zeb-Thunder Wired",
      price: 29,
      image: image6,
    },
  ];
  return (
    <main>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};
