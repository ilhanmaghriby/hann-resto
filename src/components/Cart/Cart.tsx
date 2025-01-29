import { useDispatch, useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import Swal from "sweetalert2";
import { cartActions } from "../../store/CartSlice";

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

  const dispatch = useDispatch();

  const alert = () => {
    Swal.fire({
      title: "Do you want to buy the item in the cart?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (cartItems.length === 0 && result.isConfirmed) {
        Swal.fire("No Items in the cart", "", "error");
      } else if (result.isConfirmed) {
        dispatch(cartActions.resetCart());
        Swal.fire("Thanks For Buying!", "", "success");
      }
    });
  };

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
      <div className="text-center ml-14 lg:ml-24">
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

      {cartItems.length > 0 && (
        <div className="ml-28 md:ml-32 mt-4">
          <button
            type="button"
            className="text-black bg-[#42c2ff] hover:bg-[#85F4FF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={alert}
          >
            Buy now
          </button>
        </div>
      )}
    </section>
  );
};

export default Cart;
