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

  const removeHandler = () => {
    Swal.fire({
      title: "Do you want to remove the item?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Removed!", "", "success");
        dispatch(cartActions.removeCart(id));
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
    <div
      key={id}
      className="max-w-xs mr-8 md:mr-0  mt-6 bg-white border border-gray-200 rounded-lg shadow"
    >
      {/* List Card */}
      <img
        className="rounded-t-lg max-h-80 w-full"
        src={img}
        alt="double burger"
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {qty} Pcs
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {formatRupiah(price)}
        </p>
        <button
          onClick={removeHandler}
          className="inline-flex items-center px-3 py-2 bg-red-500 hover:bg-red-400 text-sm font-medium text-center text-black  rounded-lg  "
        >
          Delete From Cart
          <div className="ml-2">
            <FaTrash />
          </div>
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
