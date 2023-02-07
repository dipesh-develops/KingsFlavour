import { useSelector, useDispatch } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log(cartItems);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <h1 className="inline mr-7">cart Items - {cartItems.length}</h1>
      <button
        className="bg-red-400 rounded-md w-32 h-9"
        onClick={() => {
          handleClearCart();
        }}
      >
        Clear Cart
      </button>
      {cartItems.map((item) => (
        <FoodItems key={item.id} {...item} />
      ))}
    </>
  );
};
export default Cart;
