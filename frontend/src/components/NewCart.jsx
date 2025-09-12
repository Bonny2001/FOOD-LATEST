import React, { useContext } from "react";
import { cartContext } from "./cartContext";
import { useNavigate } from "react-router-dom";

function NewCart({ showData }) {
  const { addCart, setAddCart } = useContext(cartContext);
  const navigator = useNavigate();

  const RemoveAllItem = () => {
    setAddCart([]);
  };

  // Group items and count duplicates → used only for display
  const groupedCart = addCart.reduce((acc, item) => {
    if (acc[item.idMeal]) {
      acc[item.idMeal].quantity += 1;
    } else {
      // IMPORTANT: always start at 1, ignore any existing quantity field on raw items
      acc[item.idMeal] = { ...item, quantity: 1 };
    }
    return acc;
  }, {});
  const cartItems = Object.values(groupedCart);

  // Add: push one more copy of this product into the raw cart
  const ADDItem = (id) => {
    // try to find the product definition (prefer original data if available)

    // First choice: if it’s an array and contains the product, take it.
    // addCart → If not found in showData, check the current raw cart list.
    // cartItems → If still not found, fallback to your grouped cart items (already aggregated view).

    // (Array.isArray(showData) && showData.find((p) => p.idMeal === id)) ||
    //   addCart.find((p) => p.idMeal === id) ||

    const base = cartItems.find((p) => p.idMeal === id);

    if (!base) return; // nothing to add if we can't find it

    // push a fresh copy (no need to manage quantity here)

    console.log(base);
    
    setAddCart((prev) => [...prev, { ...base }]);
  };

  // Decrease: remove exactly one occurrence of the product from raw cart
  const DECREASEItem = (id) => {
    // This ensures that only the first matching occurrence is removed, not all of them.
    let removedOne = false;
    const updated = addCart.filter((item) => {
      // If we haven’t removed anything yet (!removedOne)
      if (!removedOne && item.idMeal === id) {
        removedOne = true; // skip this one = remove 1 occurrence ,mark that we removed one
        return false;// exclude this item from the new array
      }
      return true; // Otherwise → return true so the item stays in the cart. keep all other items. 
    });
    console.log(updated);
    
    setAddCart(updated);
  };

  return (
    <div className="mt-20">
      {addCart.length === 0 ? (
        <div className="text-center mt-50 ">
          <h1 className="font-bold">Your myCart is Empty</h1>
          <div onClick={() => navigator("/")}>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded my-5 w-fit">
              Click here to Shop More
            </button>
          </div>
        </div>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.idMeal}
            className="my-10 h-90 bg-white border border-gray-200 rounded-xl shadow-2xs sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
          >
            <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
              <img
                className="size-fit rounded-4xl absolute top-5 left-5 start-0 object-cover "
                src={item.strMealThumb}
                alt={item.strMeal}
              />
            </div>

            <div className="flex flex-wrap">
              <div className="p-4 flex flex-col h-full sm:p-7">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {item.strMeal}{" "}
                  <span className="text-sm text-red-500">(x{item.quantity})</span>
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-400">
                  Category: {item.strCategory}
                </p>

                <div className="mt-5 sm:mt-auto">
                  <div className="pb-1">
                    <button
                      className="bg-primary text-white font-bold px-4 m-1 rounded-full border"
                      onClick={() => ADDItem(item.idMeal)}
                    >
                      +
                    </button>

                    <button className="bg-green-700 text-white font-bold px-4 m-1 rounded-md border">
                      {item.quantity}
                    </button>

                    <button
                      className="bg-primary text-white font-bold px-4 m-1 rounded-full border"
                      onClick={() => DECREASEItem(item.idMeal)}
                    >
                      -
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 dark:text-neutral-500">
                    Ingredient:
                    {item.strIngredient1}
                    {item.strIngredient2}
                    {item.strIngredient3}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      <div className="col-4 absolute fixed right-5 bottom-5 py-1 px-3 bg-primary font-bold rounded-lg text-white">
        <div className="row">
          {/* total items = sum of duplicates */}
          <h5>Total Items: {addCart.length}</h5>
        </div>
      </div>

      <div className="text-center fixed bottom-5 left-1/2 -translate-x-1/2">
        {addCart.length > 0 && (
          <button
            className="bg-primary text-gray-100 curser-pointer hover:scale-105 duration-300 py-1 px-6 rounded-full relative z-10"
            onClick={RemoveAllItem}
          >
            Remove All
          </button>
        )}
      </div>
    </div>
  );
}

export default NewCart;
