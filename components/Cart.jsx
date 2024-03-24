import useCart from "@/context/CartContext";

function Cart() {
  const { decrease, increase, amount, cart, setCartState } = useCart();
  return (
    <div className="w-full my-8 ">
      <div className="w-[80%] m-auto">
        <div className="flex w-full justify-between items-center">
          <div className="flex gap-8 items-center w-[50%] lg:w-[300px] justify-between">
            <h1 className="font-bold text-3xl"> $125.00</h1>
            <div className="bg-pink-100">
              <h2 className="font-xl text-orange-400">50%</h2>
            </div>
          </div>
          <h3 className="opacity-[0.5] line-through">$250.00</h3>
        </div>
        <div>
          <div className="w-full bg-gray-300 flex justify-between items-center rounded-lg py-2 px-3">
            <button
              className="text-orange-400 font-bold text-3xl hover:text-orange-300"
              onClick={decrease}>
              -
            </button>
            <h1 className="font-bold">{amount}</h1>
            <button
              className="text-orange-400 font-bold text-3xl hover:text-orange-300"
              onClick={increase}>
              +
            </button>
          </div>
          <button
            className="w-full bg-orange-400 rounded-lg py-3 mt-6 text-white flex justify-center hover:bg-orange-300"
            onClick={setCartState}>
            <svg
              className="text-white "
              width="22"
              height="20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fill-rule="nonzero"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
