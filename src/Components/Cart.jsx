import CartItem from "./CartItem";

export default function Cart({ cart }) {
  let bill = cart.reduce(
    (sum, item) => sum + item.quantity * item.finalPrice,
    0,
  );

  return (
    <>
      <h1 className="text-4xl mt-10">Cart</h1>
      <div className="bg-stone-700 p-4 mx-4 rounded-xl shadow-2xl w-full max-w-xl flex flex-col items-center space-y-2 mt-5">
        {cart.length ? (
          cart.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.finalPrice}
              quantity={item.quantity}
            />
          ))
        ) : (
          <h2>There is nothing in Cart</h2>
        )}
        {bill > 0 && <h3>Total Bill: {bill}</h3>}
      </div>
    </>
  );
}
