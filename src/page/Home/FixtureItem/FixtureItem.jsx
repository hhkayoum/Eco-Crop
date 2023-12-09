import { useEffect, useState } from "react";
import FoodCart from "../FoodCart/FoodCart";
import { Link } from "react-router-dom";

const FixtureItem = () => {
  const [foodsData, setFoodsData] = useState([]);
  useEffect(() => {
    fetch(
      `https://assignment11-server-kohl.vercel.app/getFoods?sortField=food_qty&sortOrder=desc`
    )
      .then((res) => res.json())
      .then((data) => {
        setFoodsData(data);
      });
  }, []);

  return (
    <div>
      <div>
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-extrabold text-center  mt-16 mb-8">
          Featured Foods
        </h2>
        <div className="grid lg:grid-cols-4  md:grid-cols-3 grid-cols-2 max-w-6xl mx-auto gap-2 md:gap-5">
          {foodsData.map((foodData) => (
            <FoodCart key={foodData._id} foodData={foodData}></FoodCart>
          ))}
        </div>
        <div className="flex  justify-center  mb-6 mt-4 border-b-2 pb-4">
          <Link to={"/availableFoods"}>
            <button className="px-3 py-1 text-base md:px-5 mt-4 md:py-2 md:text-medium font-semibold  bg-[#F4853A] text-white rounded-lg ">
              Show All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FixtureItem;
