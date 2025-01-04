import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../components/providers/AuthProvider";
import { space } from "postcss/lib/list";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [cart] = useCart();
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>

      <li>
        <NavLink to="/order/salad">Order food</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign up</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/cart">
          <button className="btn btn-ghost">
            <FaShoppingCart className="mr-3"></FaShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 w-11/12 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">RR Restaurant</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button className="btn btn-ghost">
              <FaShoppingCart className="mr-3"></FaShoppingCart>
              <div className="badge badge-secondary">+{cart.length}</div>
            </button>
            <img
              className="w-10 mr-2 rounded-full"
              src={user?.photoURL}
              alt=""
            />
            {/* <span className="mr-2">{user.email}</span> */}
            <button onClick={logout}>logout</button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
