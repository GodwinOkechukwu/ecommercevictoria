import useCart from "@/context/CartContext";

function FilledCart() {
  const { amount } = useCart();
  return (
    <div className="mt-5">
      <article className="w-[80%] m-auto">
        <div>
          <h1 className="text-gray-500">Fall limited Edition Sneakers</h1>
          <div className="flex justify-between w-[80%] text-center ">
            <h2 className="space-x-3 flex justify-between">
              $125 * {amount}:
              <span className="font-bold px-4">${125 * amount}</span>
            </h2>
          </div>
        </div>
        <button className="w-full bg-orange-400 rounded-3xl text-white py-2 mt-5 hover:bg-orange-300">
          Check out
        </button>
      </article>
    </div>
  );
}

export default FilledCart;
