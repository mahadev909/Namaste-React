import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCard";
import { Link } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartdata = useSelector((store) => store.cart.Items);
  console.log("cart", cartdata);
  const cartLength = cartdata.length;
  const disPatch = useDispatch();
  const handleClick = () => {
    disPatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl mb-2">Your Cart</h1>
      {cartLength !== 0 && (
        <button
          className="bg-slate-200 p-3 mb-2 w-26 h-auto"
          onClick={() => handleClick()}
        >
          clearCart
        </button>
      )}
      {cartLength !== 0 ? (
        <div>
          <div className="w-6/12 m-auto border border-b-8">
            <ItemCards cardData={cartdata} />
          </div>
          <div className="mt-6">
            <Link to="/">
              <button className="bg-green-200 m-1 p-2">Add More Items </button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <p className="m-2">Your Cart is Empty!!!. Add Items to your cart </p>
          <div className="mt-6">
            <Link to="/">
              <button className="bg-green-200 m-1 p-2">Add Items </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
