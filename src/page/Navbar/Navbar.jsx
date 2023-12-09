// import { useContext } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FcBusinessman } from "react-icons/fc";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((res) => {
        console.log(res, "logout");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="navbar bg-[#E1EAEF] bottom-3 border-b-2 dark-bg-black px-12  ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* {navLinks} */}
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to="/" className="mr-2">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/availableFoods" className="mr-2">
                  AvailableFoods
                </NavLink>
              </li>
              {user && (
                <>
                  <li tabIndex={0}>
                    <details>
                      {/* <NavLink>Services</NavLink> */}
                      <summary>Services</summary>
                      <ul className="p-2">
                        <li>
                          <NavLink to="/addProduct" className="mr-2">
                            Add Product
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/availableFoods" className="mr-2">
                            AvailableFoods
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/manageMyFood" className="mr-2">
                            Manage My Food
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/myFoodRequest" className="mr-2">
                            My Food Request
                          </NavLink>
                        </li>
                      </ul>
                    </details>
                  </li>
                </>
              )}
            </ul>
          </ul>
        </div>
        <a className="font-bold  text-xl md:text-2xl"> </a>
        <img
          className="md:w-[150px] w-[50px]"
          src="https://i.ibb.co/VtLQC1K/367975359-840451464426745-7011457088762964155-n-removebg-preview.png"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          {/* {navLinks} */}
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/" className="mr-2">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/availableFoods" className="mr-2">
                AvailableFoods
              </NavLink>
            </li>
            {user && (
              <>
                <li tabIndex={0}>
                  <details>
                    {/* <NavLink>Services</NavLink> */}
                    <summary>Services</summary>
                    <ul className="p-2">
                      <li>
                        <NavLink to="/addProduct" className="mr-2">
                          Add Product
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/availableFoods" className="mr-2">
                          AvailableFoods
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/manageMyFood" className="mr-2">
                          ManageMyFood
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/myFoodRequest" className="mr-2">
                          MyFoodRequest
                        </NavLink>
                      </li>
                    </ul>
                  </details>
                </li>
              </>
            )}
          </ul>
        </ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="avatar"></label>

        <div className="dropdown dropdown-end">
          {user ? (
            <div>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                <div className="w-8 rounded-full">
                  {user ? (
                    <div>
                      <img src={user.photoURL} alt="" />
                    </div>
                  ) : (
                    <FcBusinessman></FcBusinessman>
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>{user.displayName}</a>
                </li>
                <li>
                  <p onClick={handleSignOut}>Logout</p>
                </li>
              </ul>
            </div>
          ) : (
            <button className="px-3 py-1 text-base md:px-5 md:py-2 md:text-lg font-semibold rounded-md bg-[#69B455] text-white">
              <Link to={"/login"}>Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
