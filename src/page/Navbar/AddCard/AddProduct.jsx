// import { useContext } from "react";
// import { AuthContext } from "../../../AuthProvider/AuthProvider";
// import Swal from "sweetalert2";

// const AddProduct = () => {
//   const { user } = useContext(AuthContext);
//   console.log(user);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const foodImg = form.foodImage.value;
//     const foodName = form.foodName.value;
//     // const quantity = form.quantity.value;
//     const quantity = parseInt(form.quantity.value, 10);
//     const pickupLocation = form.pickupLocation.value;
//     const expiredDateTime = parseInt(form.expiredDateTime.value);

//     const additionalNotes = form.additionalNotes.value;
//     const foodDetail = {
//       foodImg,
//       foodName,
//       quantity,
//       pickupLocation,
//       expiredDateTime,
//       additionalNotes,
//       user: user.email,
//       donarName: user.displayName,
//       donarImage: user.photoURL,
//     };
//     console.log(expiredDateTime);
//     fetch("https://assignment11-server-kohl.vercel.app/foods", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(foodDetail),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.insertedId) {
//           Swal.fire({
//             position: "center",
//             icon: "success",
//             title: "Product Added Successfully",
//             showConfirmButton: false,
//             timer: 2500,
//           });
//         }
//         e.target.reset();
//       });
//   };
//   return (
//     <div>
//       <div className="bg-gray-100 py-6">
//         <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
//           <h2 className="text-3xl font-extrabold text-[#69B455] text-center mb-8">
//             Add Food Item
//           </h2>
//           <form className="mt-4" onSubmit={handleSubmit}>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label htmlFor="foodImage">Food Image URL</label>
//                 <input
//                   type="text"
//                   id="foodImage"
//                   name="foodImage"
//                   //   value={foodItem.foodImage}
//                   //   onChange={handleInputChange}
//                   className="w-full p-2 border rounded-md"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="foodName">Food Name</label>
//                 <input
//                   type="text"
//                   id="foodName"
//                   name="foodName"
//                   //   value={foodItem.foodName}
//                   //   onChange={handleInputChange}
//                   className="w-full p-2 border rounded-md"
//                 />
//                 <label htmlFor="quantity">Quantity (No. of servings)</label>
//                 <input
//                   type="number"
//                   id="quantity"
//                   name="quantity"
//                   //   value={foodItem.quantity}
//                   //   onChange={handleInputChange}
//                   className="w-full p-2 border rounded-md"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="pickupLocation">Pickup Location</label>
//                 <input
//                   type="text"
//                   id="pickupLocation"
//                   name="pickupLocation"
//                   //   value={foodItem.pickupLocation}
//                   //   onChange={handleInputChange}
//                   className="w-full p-2 border rounded-md"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="expiredDateTime">Expired Date/Time</label>
//                 <input
//                   type="date"
//                   id="expiredDateTime"
//                   name="expiredDateTime"
//                   //   value={foodItem.expiredDateTime}
//                   //   onChange={handleInputChange}
//                   className="w-full p-2 border rounded-md"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="additionalNotes">Additional Notes</label>
//                 <textarea
//                   id="additionalNotes"
//                   name="additionalNotes"
//                   //   value={foodItem.additionalNotes}
//                   //   onChange={handleInputChange}
//                   className="w-full p-2 border rounded-md"
//                 />
//               </div>
//             </div>
//             <div className="mt-4 w-full">
//               <button
//                 type="submit"
//                 className="bg-[#F4853A] text-white p-2 rounded-md w-full"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;

import { useState, useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const [expiredDate, setExpiredDate] = useState("");

  const handleDateChange = (e) => {
    const { value } = e.target;
    const formattedDate = new Date(value).toLocaleDateString("en-CA");
    setExpiredDate(formattedDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const food_img = form.foodImage.value;
    const food_name = form.foodName.value;
    const quantity = parseInt(form.quantity.value, 10);
    const pickup_location = form.pickupLocation.value;
    const additional_notes = form.additionalNotes.value;

    const foodDetail = {
      food_img,
      food_name,
      quantity,
      pickup_location,
      expired_date: expiredDate,
      additional_notes,
      user: user.email,
      donor_name: user.displayName,
      donor_image: user.photoURL,
    };
    fetch("https://assignment11-server-kohl.vercel.app/foods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(foodDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Added Successfully",
            showConfirmButton: false,
            timer: 2500,
          });
        }
        e.target.reset();
      });
  };

  return (
    <div>
      <Helmet>
        <title>EcoCrop/AddProduct</title>
      </Helmet>
      <div className="bg-gray-100 py-6">
        <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
          <h2 className="text-3xl font-extrabold text-[#69B455] text-center mb-8">
            Add Food Item
          </h2>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="foodImage">Food Image URL</label>
                <input
                  type="text"
                  id="foodImage"
                  name="foodImage"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="foodName">Food Name</label>
                <input
                  type="text"
                  id="foodName"
                  name="foodName"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="quantity">Quantity (No. of servings)</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="pickupLocation">Pickup Location</label>
                <input
                  type="text"
                  id="pickupLocation"
                  name="pickupLocation"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="expiredDateTime">Expired Date/Time</label>
                <input
                  type="datetime-local"
                  id="expiredDateTime"
                  name="expiredDateTime"
                  onChange={handleDateChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="additionalNotes">Additional Notes</label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
            <div className="mt-4 w-full">
              <button
                type="submit"
                className="bg-[#F4853A] text-white p-2 rounded-md w-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
