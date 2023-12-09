/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */

import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartCard = ({ product, handleDelete }) => {
  const { _id, food_img, food_name, food_status } = product;

  return (
    <>
      <tr>
        <td>
          <div className=" w-16 h-16 md:w-24 md:h-24">
            <img
              className="w-full h-full object-cover"
              src={food_img}
              alt={food_name}
            />
          </div>
        </td>
        <td className="md:text-lg">{food_name}</td>
        <td className="md:text-lg font-semibold">{food_status}</td>
        <th>
          <Link to={`/update/${_id}`}>
            <button className="p-3 rounded bg-[#69B64D] hover:bg-[#84c56d] text-white border ">
              <FaPencilAlt></FaPencilAlt>
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="p-3 rounded bg-[#F9852D] hover:bg-[#eba665] text-white border "
          >
            <FaTrash></FaTrash>
          </button>
          <Link to={`/manageSingleFood/${_id}`}>
            <button className="p-[10px] rounded bg-[#F7C54C] hover:bg-[#cca13e] text-white border ">
              Manage
            </button>
          </Link>
        </th>
      </tr>
    </>
  );
};

export default CartCard;
