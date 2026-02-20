import AddItem from "./AddItem";
import DeleteItem from "./DeleteItem";

export default function Card({ title, image, category, price, discount, cart, setCart }) {

  let finalPrice = discount? Math.round(price - (price * discount) / 100) : price

  let value = cart.reduce((val, item)=> item.title === title? item.quantity: val, 0)

  return (
    <>
      <div className="bg-stone-700 p-4 mx-4 rounded-xl shadow-2xl w-90 flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform duration-300 ease-in-out mt-9">
        <h2 className="text-white text-3xl">{title}</h2>
        <img src={image} alt={title} className="rounded-2xl h-62.5 w-75" />
        <h3 className="text-xl">{category}</h3>
          <h3>${finalPrice}</h3>
        <div className="flex gap-6 bg-amber-700 px-10 py-2 text-white rounded-2xl">
          <DeleteItem setCart={setCart} title={title}/>
          <p>{value}</p>
          <AddItem cart={cart} setCart={setCart} title={title} finalPrice={finalPrice}/>
        </div>
      </div>
    </>
  );
}
