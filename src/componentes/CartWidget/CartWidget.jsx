import { useContext } from "react";
import { BiCart } from "react-icons/bi";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { totalItems } = useContext(CartContext)
  return (
    <div>
      <BiCart size={40}/>
      <strong>
        {totalItems}
      </strong>
      </div>
    
  )
}
