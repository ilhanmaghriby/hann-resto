import { useDispatch, useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import Swal from "sweetalert2";
import { cartActions } from "../../store/CartSlice";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

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

  const handleCheckout = () => {
    Swal.fire({
      title: "Confirm Purchase",
      html: `You're about to purchase <b>${
        cartItems.length
      }</b> item(s) for <b>${formatRupiah(totalPrice)}</b>`,
      icon: "question",
      background: "#1e1e2f",
      color: "#fff",
      showCancelButton: true,
      confirmButtonColor: "#facc15", // yellow-400
      cancelButtonColor: "#ef4444", // red-500
      confirmButtonText: "Yes, checkout now!",
      cancelButtonText: "Continue shopping",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(cartActions.resetCart());
        Swal.fire({
          title: "Thank You!",
          text: "Your order has been placed successfully",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
          background: "#1e1e2f",
          color: "#fff",
        });
      }
    });
  };

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <section
      className={`pl-[88px] transition-all duration-300 min-h-screen ${
        cartItems.length > 0 ? "py-6" : "py-12"
      } bg-[#12121a] text-white`}
    >
      <div className="px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-6 md:mb-8">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-400">
            Your Shopping Cart
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <FaShoppingCart className="text-gray-500 text-5xl md:text-6xl mb-4" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-400 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-6 text-center">
              Looks like you haven't added anything to your cart yet
            </p>
            <Link
              to="/rice"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg transition-colors text-sm md:text-base"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
              {cartItems.map((item: CartType) => (
                <CartProduct
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  qty={item.qty}
                  price={item.price}
                  img={item.img}
                />
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-[#1e1e2f] rounded-lg shadow-md p-4 md:p-6 max-w-2xl mx-auto mt-6 md:mt-8 border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg md:text-xl font-semibold text-yellow-400">
                  Order Summary
                </h3>
                <span className="text-gray-400 text-sm md:text-base">
                  {cartItems.length} item(s)
                </span>
              </div>

              <div className="flex justify-between items-center py-3 md:py-4 border-t border-b border-gray-600">
                <span className="font-medium text-sm md:text-base text-white">
                  Subtotal
                </span>
                <span className="font-bold text-base md:text-lg text-yellow-400">
                  {formatRupiah(totalPrice)}
                </span>
              </div>

              <div className="mt-4 md:mt-6">
                <button
                  onClick={handleCheckout}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 md:py-3 px-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg text-sm md:text-base"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
