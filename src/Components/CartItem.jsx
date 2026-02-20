import CartItemInfo from "./CartItemInfo";

export default function CartItem({ id, title, price, quantity }) {
  return (
    <>
      <div className="flex items-center justify-between w-[80%] gap-4 p-2 border-b border-white last:border-0">
        <div className="w-6 text-left">
          <CartItemInfo itemDetail={id + "."} />
        </div>
        <div className="flex-1 text-left">
          <CartItemInfo itemDetail={title} />
        </div>
        <div className="w-12 text-center">
          <CartItemInfo itemDetail={quantity + "x"} />
        </div>
        <div className="w-16 text-right">
          <CartItemInfo itemDetail={"$" + price} />
        </div>
      </div>
    </>
  );
}
