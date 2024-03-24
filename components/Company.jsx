import Cart from "./Cart";

function Company() {
  return (
    <section className="mt-6 w-full m-auto lg:w-[50%]">
      <article className="space-y-6 w-[80%] m-auto">
        <h2 className="uppercase font-bold text-[16px] text-orange-500">
          Sneaker Company
        </h2>
        <h1 className="font-bold text-3xl">
          Fall Limited Edition <br></br>Sneakers
        </h1>
        <p className="text-[16px] text-gray-600">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </article>
      <Cart />
    </section>
  );
}

export default Company;
