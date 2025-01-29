import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/CartSlice";
import Swal from "sweetalert2";

type ItemType = {
  id: number;
  name: string;
  price: number;
  img: string;
  qty: number;
  type: string;
};

const FunCart = ({ id, img, name, price, qty, type }: ItemType) => {
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
        img,
        qty,
        type,
      })
    );
    Swal.fire({
      title: "Added to Cart!",
      icon: "success",
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
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 ">
      <div className="w-full h-64 overflow-hidden">
        <img className="w-full h-full object-cover" src={img} alt={name} />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold text-gray-900">{name}</h5>
        <p className="mb-4 text-gray-700 font-semibold">
          {formatRupiah(price)}
        </p>
        <button
          onClick={addHandler}
          className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          <span>Add To Cart</span>
          <FaCartPlus className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default FunCart;
