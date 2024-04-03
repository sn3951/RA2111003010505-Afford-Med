import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart } = useSelector((state) => state)
  const [totalAmount, setTotalAmount] = useState(0)
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])
  return (
    <div>
      {
        cart.length > 0 ?
          (
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">

              <div className="w-[100%] md:w-[60%] flex flex-col p-2 mt-[50px]">
                {
                  cart.map((item, index) => {
                    return <CartItem key={item.id} item={item} itemIndex={index} />
                  })
                }
              </div>

              <div className="w-[100%] md:w-[40%] mt-5 flex flex-col">
                <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
                  <div className="flex flex-col gap-5 ">
                    <div className="font-semibold text-xl text-green-800"
                    >YOUR CART</div>
                    <div className="font-semibold text-5xl text-green-700  -mt-5">SUMMARY</div>
                    <p className="text-xl">
                      <span className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <p className="text-xl font-bold">Total Amount: <span className="text-gray-700 font-semibold">${totalAmount}</span></p>
                    <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white 
            transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                      Checkout Now
                    </button>
                  </div>
                </div>
              </div>


            </div>) :
          <div className="flex flex-col justify-center items-center w-full h-full fixed top-0 left-0 z-50">
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart is Empty</h1>
              <p className="text-lg text-gray-600 mb-8">Start shopping and add some amazing products to your cart!</p>
              <Link to={"/"}>
                <button className="bg-green-500 text-white rounded-lg py-3 px-8 text-lg shadow-md hover:bg-green-600 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Explore Products
                </button>
              </Link>
            </div>
          </div>



      }
    </div>
  );
};

export default Cart;
