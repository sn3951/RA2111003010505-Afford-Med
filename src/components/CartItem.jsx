import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/cartSlice';
import { toast } from 'react-hot-toast';
const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch()
  const removeFromCart = () => {
    dispatch(remove(item.id))
    toast.success("Item Removed")
  }
  return (
    <div className="flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500 mt-2 mb-2 md:mx-5">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div>
          <img className="w-full md:w-64" src={item.image} alt="Product" />
        </div>
        <div className="md:ml-5 self-start space-y-2 w-full md:w-3/4">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <h1 className="text-base text-slate-700 font-medium">
            {item.description.length > 100
              ? item.description.substring(0, 100) + '...'
              : item.description}
          </h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">${item.price}</p>
            <div
              className="bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
              onClick={removeFromCart}
            >
              <MdDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default CartItem;
