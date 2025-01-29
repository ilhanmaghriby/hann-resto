import { useSelector } from "react-redux";
import FunCart from "./FunCart";

type CartType = {
  id: number;
  name: string;
  price: number;
  img: string;
  qty: number;
  type: string;
};

type CardProps = {
  typeFilter: string;
};

const CardList = ({ typeFilter }: CardProps) => {
  const cartItems = useSelector((state: any) => state.cart.items);

  const filterItemsByType = (type: string) => {
    return cartItems.filter((item: CartType) => item.type === type);
  };

  const filteredItems = filterItemsByType(typeFilter);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 mb-10 mr-4">
      {filteredItems.map((item: CartType) => {
        return (
          <FunCart
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
            qty={item.qty}
            type={item.type}
          />
        );
      })}
    </div>
  );
};

export default CardList;
