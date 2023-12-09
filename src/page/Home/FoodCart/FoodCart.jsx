/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const FoodCart = ({ foodData }) => {
  const {
    _id,
    additional_notes,
    food_img,
    food_name,
    donor_img,
    donor_name,
    food_qty,
    pickup_location,
    expired_date,
  } = foodData;
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <div className="">
        <a href="#">
          <img
            className="rounded-t-lg w-full md:h-[160px] h-[120px] object-cover"
            src={food_img}
            alt={food_name}
          />
        </a>
        <div className="pt-5 pl-5">
          <a href="#">
            <h5 className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {food_name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {additional_notes}
          </p>

          <div className="md:hidden">
            <p>Quantity: {food_qty}</p>
            <p>Expires on: {expired_date}</p>
          </div>
          <div className="hidden md:flex">
            <div>
              <p>Quantity: {food_qty}</p>
              <p>Expires on: {expired_date}</p>
              <p>Location: {pickup_location}</p>

              <p>Donor: {donor_name}</p>
              <img src={donor_img} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="pl-5 pb-5">
        <Link to={`/singleCardDetails/${_id}`}>
          <button className="px-3 py-1 text-base md:px-5 mt-4 md:py-2 md:text-medium font-semibold  bg-[#F4853A] text-white rounded-br-2xl">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FoodCart;
