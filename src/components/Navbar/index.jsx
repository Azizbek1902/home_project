import { AiOutlineHeart } from "react-icons/ai";
import { BsFilterCircle } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeNav, setActiveNav] = useState("1");
  const navitems = [
    {
      id: 1,
      icon: <AiOutlineHome size={30} />,
      title: "  E'Lonlar",
      path: "/",
    },
    {
      id: 2,
      icon: <AiOutlineHeart size={30} />,
      title: "Yoqtirganlar",
      path: "/savat",
    },
  ];
  return (
    <div>
      <div className="fixed z-50 bottom-0 right-0 left-0 w-full">
        <div className="flex justify-center shadow-md bg-slate-300 w-full py-2">
          <div className="w-[95%] flex justify-evenly">
            {navitems.map((item, ind) => (
              <Link key={ind + 1} to={item.path}>
                <button
                  className="items-center flex flex-col justify-center"
                  onClick={() => {
                    setActiveNav(item.id);
                  }}
                >
                  {item.icon}
                  <span
                    className={`text-[12px] text-gray-500 ${
                      activeNav ? "font-bold" : "font-semibold"
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
