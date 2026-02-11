export default function Card({ title, image, category, price, discount }) {
  return (
    <>
      <div className="bg-stone-700 p-4 mx-6 rounded-xl shadow-2xl w-92.5 flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform duration-300 ease-in-out mt-9">
        <h2 className="text-white text-3xl">{title}</h2>
        <img src={image} alt={title} className="rounded-2xl h-62.5 w-75" />
        <h3 className="text-xl">{category}</h3>
        {discount ? (
          <h3>${Math.round(price - (price * discount) / 100)}</h3>
        ) : (
          <h3>${price}</h3>
        )}
      </div>
    </>
  );
}
