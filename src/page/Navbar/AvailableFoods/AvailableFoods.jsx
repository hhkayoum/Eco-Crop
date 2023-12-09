import { useEffect, useState } from "react";
import AvailableFoodCard from "../AvailableFoodCard/AvailableFoodCard";
import { Helmet } from "react-helmet";

const AvailableFoods = () => {
  const [sortingFoodsData, setShortingFoodsData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.search.value;
    console.log(search);

    fetch(`https://assignment11-server-kohl.vercel.app/searchFood/${search}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    fetch(
      `https://assignment11-server-kohl.vercel.app/sortingFoods?sortField=expired_date&sortOrder=asc`
    )
      .then((res) => res.json())
      .then((data) => {
        setShortingFoodsData(data);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>EcoCrop/AvailableFood</title>
      </Helmet>
      <div className="hero h-[400px] w-full ">
        <img
          src="https://i.ibb.co/LYKtmh4/Brown-Vintage-Coffee-Drink-Coffee-Festival-E-Commerce-Banner-Background-Brown-Vintage-Coffee-Backgro.jpg"
          alt=""
          className="md:object-cover object-fill w-full h-full"
        />

        <div className="hero-overlay bg-opacity-80 "></div>

        <div className="hero-content text-center text-neutral-content ">
          <div className="max-w-md">
            <h1 className="mb-1 text-3xl font-semibold">
              Search Your Favorite Food
            </h1>
            <form className="p-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="search"
                placeholder="Search..."
                className="border p-2 w-full md:w-[500px] rounded-full"
              />
              <button
                type="submit"
                className="px-3 py-1 text-base md:px-5 mt-3 w-40 md:py-2 md:text-medium font-semibold  bg-[#F4853A] text-white rounded-br-2xl"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-extrabold text-center mt-12  md:mt-40 mb-8">
          Food Items
        </h2>
        <div className="grid lg:grid-cols-4  md:grid-cols-3 grid-cols-2 max-w-6xl mx-auto gap-2 md:gap-5">
          {sortingFoodsData.map((sortingFoodData) => (
            <AvailableFoodCard
              key={sortingFoodData._id}
              sortingFoodData={sortingFoodData}
            ></AvailableFoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;
// https://assignment11-server-kohl.vercel.app/sortingFoods?sortField=expired_date&sortOrder=asc
