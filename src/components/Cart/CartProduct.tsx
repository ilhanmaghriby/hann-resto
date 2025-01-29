import { FaTrash } from "react-icons/fa";
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
      title: "Do you want to remove the item?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Removed!", "", "success");
        dispatch(cartActions.removeCart(id));
      }
    });
  };

  const formatRupiah = (angka: number) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });

    return formatter.format(angka);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img className="w-full h-48 object-cover" src={img} alt={name} />
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2 text-gray-900">{name}</h5>
        <p className="text-gray-700 mb-2">{qty} Pcs</p>
        <p className="text-gray-700 font-semibold mb-4">
          {formatRupiah(price)}
        </p>
        <button
          onClick={handleRemove}
          className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          <span>Delete From Cart</span>
          <FaTrash className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
