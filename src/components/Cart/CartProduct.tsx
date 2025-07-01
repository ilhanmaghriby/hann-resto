import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/CartSlice";
import Swal from "sweetalert2";

type CartType = {
  id: number;
  name: string;
  price: number;
  img: string;
  qty: number;
};

const CartProduct = ({ id, img, name, qty, price }: CartType) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    Swal.fire({
      title: "Remove Item",
      text: `Are you sure you want to remove ${name}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
      background: "#1e1e2f",
      color: "#fff",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(cartActions.removeCart(id));
        Swal.fire({
          title: "Removed!",
          text: "Item has been removed from your cart.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
          background: "#1e1e2f",
          color: "#fff",
        });
      }
    });
  };

  const handleIncrement = () => {
    dispatch(cartActions.addToCart({ id, name, price, img, qty: 1 }));
  };

  const handleDecrement = () => {
    dispatch(cartActions.removeSingleItem(id));
  };

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);
  };

  const subtotal = price * qty;

  return (
    <div className="bg-[#1e1e2f] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-700">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={img}
          alt={name}
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-black rounded-full p-1 shadow-sm">
          <span className="text-sm font-bold px-2">{qty}x</span>
        </div>
      </div>

      <div className="p-5">
        <h3
          className="text-lg font-bold text-white mb-1 line-clamp-1"
          title={name}
        >
          {name}
        </h3>

        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-300">Unit Price:</span>
          <span className="font-medium text-yellow-400">
            {formatRupiah(price)}
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-300">Subtotal:</span>
          <span className="font-bold text-yellow-400">
            {formatRupiah(subtotal)}
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center border border-gray-600 rounded-lg">
            <button
              onClick={handleDecrement}
              disabled={qty <= 1}
              className={`px-3 py-1 ${
                qty <= 1 ? "text-gray-500" : "text-red-400 hover:bg-red-900/30"
              }`}
            >
              <FaMinus size={14} />
            </button>
            <span className="px-3 py-1 border-x border-gray-600 font-medium text-white">
              {qty}
            </span>
            <button
              onClick={handleIncrement}
              className="px-3 py-1 text-green-400 hover:bg-green-900/30"
            >
              <FaPlus size={14} />
            </button>
          </div>
        </div>

        <button
          onClick={handleRemove}
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200"
        >
          <FaTrash />
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
