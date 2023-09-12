import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

type CartType = {
  id: number;
  name: string;
  price: number;
  img: string;
  qty: number;
};

const Cart = () => {
  const cartItems = useSelector((state: any) => state.cart.product);
  const totalPrice = useSelector((state: any) => state.cart.totalPrice);

  function formatRupiah(angka: number) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });

    return formatter.format(angka);
  }

  return (
    <section className=" mt-10 mb-20">
      <div className="text-center">
        <h1 className="font-bold text-3xl">Your Cart</h1>
        <p className="text-gray-500">
          Total Price : {formatRupiah(totalPrice)}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 ml-28 md:ml-32">
        {cartItems.map((item: CartType) => {
          return (
            <CartProduct
              id={item.id}
              name={item.name}
              qty={item.qty}
              price={item.price}
              img={item.img}
              key={item.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Cart;
