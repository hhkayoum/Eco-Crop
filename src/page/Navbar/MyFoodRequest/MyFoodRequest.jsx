import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import RequestFoodCard from "./RequestFoodCard";

const MyFoodRequest = () => {
  const [requestFood, setRequestFood] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://assignment11-server-kohl.vercel.app/requestedFood/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRequestFood(data);
      });
  }, [user.email]);

  return (
    <div className="my-20">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center my-8">
        Requested Food
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
        {requestFood?.map((product) => (
          <RequestFoodCard
            key={product._id}
            product={product}
          ></RequestFoodCard>
        ))}
      </div>
    </div>
  );
};

export default MyFoodRequest;
