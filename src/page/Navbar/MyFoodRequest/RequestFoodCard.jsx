/* eslint-disable react/prop-types */

const RequestFoodCard = ({ product }) => {
  console.log(product);
  const {
    donor_name,

    donation_amount,
    food_status,
    expired_date,
    pickup_location,
    food_img,
  } = product;
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={food_img} alt="Donor" className="w-full h-64 object-cover" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{donor_name}</div>
          <p className="text-gray-700 text-base mb-2">
            Pickup Location: {pickup_location}
          </p>
          <p className="text-gray-700 text-base mb-2">
            Expiry Date: {expired_date}
          </p>
          <p className="text-gray-700 text-base mb-2">
            Donation Amount: {donation_amount}
          </p>
          <p className="text-gray-700 text-base mb-2">Status: {food_status}</p>
        </div>
        <div className="px-6 py-4">
          {food_status === "delivered" ? (
            <button
              // onClick={handleCancel}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          ) : (
            <button
              // onClick={handleCancel}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestFoodCard;
