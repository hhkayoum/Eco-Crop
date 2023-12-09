import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

const ManageSingleFood = () => {
  const data = useLoaderData();

  const [requested, setRequested] = useState([]);
  useEffect(() => {
    fetch(`https://assignment11-server-kohl.vercel.app/Food/${data._id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRequested(data);
      });
  }, [data]);
  console.log(requested);

  return (
    <div>
      <div>dta is comeing</div>
    </div>
  );
};

export default ManageSingleFood;
