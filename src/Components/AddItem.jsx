export default function AddItem({ cart, setCart, title, finalPrice }) {
  function handleClick() {
    let check = false;
    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      if (element.title === title) {
        check = true;
      }
    }
    check
      ? setCart((prev) =>
          prev.map((item) =>
            item.title === title
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        )
      : setCart((prev) => [
          ...prev,
          {
            title,
            finalPrice,
            quantity: 1,
            id: cart.length + 1,
          },
        ]);
  }

  return (
    <>
      <button className="cursor-pointer" onClick={handleClick}>
        +
      </button>
    </>
  );
}
