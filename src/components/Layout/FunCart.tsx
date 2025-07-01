import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/CartSlice";
import Swal from "sweetalert2";
import { useState } from "react";

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
  const [isAdding, setIsAdding] = useState(false);

  const addHandler = () => {
    setIsAdding(true);
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
      position: "top-end",
      title: "Added to Cart!",
      text: `${name} has been added to your cart`,
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
      toast: true,
      background: "#4BB543",
      color: "white",
    }).finally(() => {
      setIsAdding(false);
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
    <div className="max-w-xs bg-[#1e1e2f] border border-gray-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="w-full h-64 overflow-hidden relative">
        <img
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          src={img}
          alt={name}
          loading="lazy"
        />
        {type && (
          <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
            {type}
          </span>
        )}
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold text-white truncate" title={name}>
          {name}
        </h5>
        <p className="mb-4 text-lg text-yellow-400 font-bold">
          {formatRupiah(price)}
        </p>
        <button
          onClick={addHandler}
          disabled={isAdding}
          className={`w-full flex items-center justify-center ${
            isAdding ? "bg-yellow-300" : "bg-yellow-400 hover:bg-yellow-500"
          } text-black font-semibold py-3 px-4 rounded-lg transition-all duration-300`}
        >
          {isAdding ? (
            "Adding..."
          ) : (
            <>
              <span>Add To Cart</span>
              <FaCartPlus className="ml-2" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default FunCart;
