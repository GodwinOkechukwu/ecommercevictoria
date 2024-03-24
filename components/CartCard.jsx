import useCart from "@/context/CartContext";
import FilledCart from "./FilledCart";

function CartCard() {
  const { cart, amount, closeCart } = useCart();
  return (
    <div
      className={`w-[90%]  bg-white rounded-lg shadow-2xl ${
        !cart ? "hidden" : ""
      }  h-[250px] m-auto absolute top-[130px] left-[5%] lg:absolute lg:right-[-950px] lg:top-14 lg:w-[300px]`}>
      <div className="flex justify-between items-center">
        <h1 className="mb-5 p-4">Cart</h1>
        <svg
          className="mx-4 cursor-pointer"
          onClick={closeCart}
          width="14"
          height="15"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            fill-rule="evenodd"
          />
        </svg>
      </div>

      <hr></hr>
      {amount === 0 ? (
        <h2 className="mt-16 text-center font-bold text-gray-500 text-[15px]">
          Your Cart is Empty
        </h2>
      ) : (
        <FilledCart />
      )}
    </div>
  );
}

export default CartCard;
