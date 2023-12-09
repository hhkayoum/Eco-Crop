import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Update = () => {
  const { user } = useContext(AuthContext);
  const updateData = useLoaderData();
  console.log(updateData);
  const {
    _id,
    food_status,
    additional_notes,
    food_img,
    food_name,
    food_qty,
    pickup_location,
    expired_date,
  } = updateData;
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const food_img = form.foodImage.value;
    const food_name = form.foodName.value;
    const food_qty = parseInt(form.quantity.value, 10);
    const pickup_location = form.pickupLocation.value;
    const additional_notes = form.additionalNotes.value;
    const expired_date = form.expiredDateTime.value;

    const updateProduct = {
      food_img,
      food_name,
      food_status,
      food_qty,
      pickup_location,
      expired_date,
      additional_notes,
      user: user.email,
      donor_name: user.displayName,
      donor_image: user.photoURL,
    };
    console.log(updateProduct);

    fetch(`https://assignment11-server-kohl.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Update Successfully",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>EcoCrop/UpdateProduct</title>
      </Helmet>
      <div className="bg-gray-100 py-6">
        <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
          <h2 className="text-3xl font-extrabold text-[#69B455] text-center mb-8">
            Update Food Item
          </h2>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="foodImage">Food Image URL</label>
                <input
                  type="text"
                  defaultValue={food_img}
                  id="foodImage"
                  name="foodImage"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="foodName">Food Name</label>
                <input
                  type="text"
                  defaultValue={food_name}
                  id="foodName"
                  name="foodName"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="quantity">Quantity (No. of servings)</label>
                <input
                  type="number"
                  defaultValue={food_qty}
                  id="quantity"
                  name="quantity"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="pickupLocation">Pickup Location</label>
                <input
                  type="text"
                  defaultValue={pickup_location}
                  id="pickupLocation"
                  name="pickupLocation"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="expiredDateTime">Expired Date/Time</label>
                <input
                  type="datetime-local"
                  defaultValue={expired_date}
                  id="expiredDateTime"
                  name="expiredDateTime"
                  //     onChange={handleDateChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="additionalNotes">Additional Notes</label>
                <textarea
                  id="additionalNotes"
                  defaultValue={additional_notes}
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
