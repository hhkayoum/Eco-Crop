import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import CartCard from "./CartCard";
import Swal from "sweetalert2";

const ManageMyFood = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://assignment11-server-kohl.vercel.app/addFood/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCartProducts(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    fetch(`https://assignment11-server-kohl.vercel.app/food/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = cartProducts.filter(
                (cartProduct) => cartProduct._id !== id
              );
              setCartProducts(remaining);
            }
          });
        }
      });
  };

  return (
    <div className="max-w-screen-lg min-h-[80vh] mx-auto px-5 py-6 lg:py-16">
      {cartProducts.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table border rounded">
            {/* head */}
            <thead>
              <tr className="md:text-lg bg-[#FDF9EF] text-black font-semibold">
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts?.map((product) => (
                <CartCard
                  key={product._id}
                  product={product}
                  handleDelete={handleDelete}
                  cartProducts={cartProducts}
                ></CartCard>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="min-h-[60vh] flex justify-center items-center">
          <h2 className="text-2xl">{`You Don't have any product into Cart`}</h2>
        </div>
      )}
    </div>
  );
};

export default ManageMyFood;
