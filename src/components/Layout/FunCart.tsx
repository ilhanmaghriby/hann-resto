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
  function formatRupiah(angka: number) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });

    return formatter.format(angka);
  }
  return (
    <div
      key={id}
      className="max-w-xs mr-8 md:mr-0  mt-6 bg-white border border-gray-200 rounded-lg shadow"
    >
      <img className="rounded-t-lg max-h-80 w-full" src={img} alt={name} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {formatRupiah(price)}
        </p>
        <button
          onClick={addHandler}
          className="inline-flex items-center px-3 py-2 bg-[#42c2ff] hover:bg-[#85F4FF] text-sm font-medium text-center text-black  rounded-lg  "
        >
          Add To Cart
          <div className="ml-2">
            <FaCartPlus />
          </div>
        </button>
      </div>
    </div>
  );
};

export default FunCart;
