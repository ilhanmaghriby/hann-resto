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

  // Empty state UI
  if (filteredItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="text-2xl font-bold text-gray-300 mb-2">
          No Items Found
        </div>
        <p className="text-gray-400">
          Try another category or check back later
        </p>
        <div className="mt-4 w-16 h-1 bg-yellow-400 rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      {/* Category title */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white capitalize">
          {typeFilter} Menu
        </h2>
        <div className="mt-2 w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredItems.map((item: CartType) => (
          <FunCart
            key={`${item.id}-${item.type}`}
            id={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
            qty={item.qty}
            type={item.type}
          />
        ))}
      </div>

      {/* Footer spacing */}
      <div className="mt-12"></div>
    </div>
  );
};

export default CardList;
