import React from "react";

const Cart = ({ text, number, children }) => {
  return (
    <li className="top-menu-item">
      <a href="" className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <span className="mx-2">{text}</span>
        <span className="badge-circle bg-orange-400 text-white">{number}</span>
      </a>
    </li>
  );
};

export default Cart;
