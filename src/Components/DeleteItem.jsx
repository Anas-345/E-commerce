export default function DeleteItem({ setCart, title }) {
  function handleClick() {
    setCart((prev) =>
      prev
        .map((item) =>
          item.title === title
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity !== 0),
    );
  }

  return (
    <>
      <button className="cursor-pointer" onClick={handleClick}>
        -
      </button>
    </>
  );
}
