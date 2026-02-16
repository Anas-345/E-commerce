import { useState } from "react";
import Card from "./Components/Card";
import data from "./data";

function App() {
  const [discount, setDiscount] = useState(false);
  const [feature, setFeature] = useState(false);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [value, setValue] = useState('')

  function handleDiscount() {
    setDiscount((prev) => !prev);
  }

  function handleFeature() {
    setFeature((prev) => !prev);
  }

  function handleCategory(e) {
    setCategory(e.target.value);
  }

  function handlePrice(e) {
    setPrice(e.target.value);
  }

  function handleChange(e) {
    setDiscount(false)
    setFeature(false)
    setCategory('')
    setPrice('')
    setValue(e.target.value)
  }

  function handleClick() {
    setValue('')
  }

  const discountedProducts = discount
    ? data.filter((product) => product.discount)
    : data;

  const featuredProducts = feature
    ? discountedProducts.filter((product) => product.isFeatured)
    : discountedProducts;

  const productByCategory = category
    ? featuredProducts.filter((product) => product.category === category)
    : featuredProducts;

  const productByPrice = price
    ? productByCategory.filter((product) => {
        const [min, max] = price.split("-").map((item) => Number(item));
        return product.price >= min && product.price <= max;
      })
    : productByCategory;

  const productByName = data.filter(product =>{ 
    const title = product.title.toLowerCase()
    const val = value.toLowerCase() 
    return title.includes(val)
  }
  )

  let categories = [...new Set(data.map((product) => product.category))];

  return (
    <>
      <div className="mt-10 ml-10">
        <h1 className="text-white text-4xl">Filter</h1>
        <div className="flex gap-2">
          <div>
            <input
              type="checkbox"
              checked={discount}
              id="discount"
              onChange={handleDiscount}
              className="cursor-pointer"
            />
            <label className="text-white text-xl ml-2" htmlFor="discount">
              Discount
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="feature"
              checked={feature}
              onChange={handleFeature}
              className="cursor-pointer"
            />
            <label className="text-white text-xl ml-2" htmlFor="feature">
              Featured
            </label>
          </div>
          <div>
            <select
              className="cursor-pointer outline-0"
              value={category}
              onChange={(e) => handleCategory(e)}
            >
              <option value="">---All---</option>
              {categories.map((category, index) => (
                <option value={category} key={index}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              className="cursor-pointer"
              value={price}
              onChange={(e) => handlePrice(e)}
            >
              <option value="">---All---</option>
              <option value="0-50"> 0 - 50 </option>
              <option value="50-100"> 50 - 100 </option>
              <option value="100-150"> 100 - 150 </option>
              <option value="150-200"> 150 - 200 </option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="bg-white outline-0 p-2 rounded-3xl w-sm"
              onChange={(e)=>handleChange(e)}
              value={value}
              onKeyDown={(e) => e.key === 'Enter' && handleClick()}
            />
          </div>
        </div>
      </div>
      <div className="flex mx-6 flex-wrap min-h-screen">
        { value.trim() ?
        productByName.map(product => (
          <Card
            title={product.title}
            image={product.image}
            key={product.id}
            category={product.category}
            price={product.price}
            discount={product.discount}
          />
        ))
        :
        productByPrice.map((product) => (
          <Card
            title={product.title}
            image={product.image}
            key={product.id}
            category={product.category}
            price={product.price}
            discount={product.discount}
          />
        ))

      }
      </div>
    </>
  );
}

export default App;
