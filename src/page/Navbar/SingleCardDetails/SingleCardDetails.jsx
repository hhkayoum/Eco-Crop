import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const SingleCardDetails = () => {
  const data = useLoaderData();
  const {
    _id,
    email,
    food_status,
    additional_notes,
    food_img,
    food_name,
    donor_img,
    donor_name,
    food_qty,
    pickup_location,
    expired_date,
  } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const resiver_note = form.additionalNote.value;
    const donation_amount = form.number.value || 0;
    const foodData = {
      email,
      food_id: _id,
      resiver_note,
      donation_amount,
      additional_notes,
      food_img,
      food_name,
      donor_img,
      donor_name,
      food_qty,
      pickup_location,
      expired_date,
      food_status,
    };
    axios
      .post(
        "https://assignment11-server-kohl.vercel.app/requestedFood",
        foodData
      )
      .then((data) => {
        if (data.data.insertedId) {
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
    <div className="py-14 flex justify-center">
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={food_img}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Food Name : {food_name}
          </h5>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Location : {pickup_location}
          </h5>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Donar Name : {donor_name}
          </h5>
          <img src={donor_img} alt="" />
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {additional_notes}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Expired In : {expired_date}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Food Qty : {food_qty}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Food Status : {food_status}
          </p>

          <button
            className="bg-[#F4853A]  text-white px-4 py-2 mt-4 rounded-md hover:bg-[#E07728]"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Request For Food
          </button>
          <dialog id="my_modal_5" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg text-center">
                Plz Filup This Form
              </h3>
              <form
                className="bg-white p-6 rounded-lg shadow-md"
                onSubmit={handleSubmit}
              >
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional Notes
                </label>
                <textarea
                  id="text"
                  name="additionalNote"
                  rows="4"
                  required
                  className="w-full mt-2 p-2 border rounded-md"
                ></textarea>

                <label
                  htmlFor="number"
                  className="block text-sm font-medium text-gray-700 mt-4"
                >
                  Donation Amount
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  className="w-full mt-2 p-2 border rounded-md"
                />

                <button
                  type="submit"
                  className="bg-[#F4853A] text-white px-4 py-2 mt-4 rounded-md hover:bg-[#E07728]"
                >
                  Request For Food
                </button>
              </form>
            </div>
          </dialog>
        </div>
      </a>
    </div>
  );
};

export default SingleCardDetails;
