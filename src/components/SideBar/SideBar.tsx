import { useState } from "react";
import "./sidebar.css";
import logo from "../../assets/img/logo.png";
import {
  FaHamburger,
  FaIceCream,
  FaArrowRight,
  FaShoppingCart,
} from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";
import { BiBowlRice } from "react-icons/bi";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className={`sidebar ${sidebarOpen ? "" : "close"}`}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src={logo} alt="Profile" />
            </span>

            <div className="text logo-text">
              <span className="name">Hann Resto</span>
            </div>
          </div>

          <i className="bx bx-chevron-right toggle" onClick={toggleSidebar}>
            <FaArrowRight />
          </i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              {/* Rice */}
              <li className="nav-link">
                <Link to={"/rice"}>
                  <i className="bx bx-bar-chart-alt-2 icon">
                    <BiBowlRice />
                  </i>
                  <span className="text nav-text">Rice</span>
                </Link>
              </li>
              {/* Noodles */}
              <li className="nav-link">
                <Link to={"/noodles"}>
                  <i className="bx bx-bar-chart-alt-2 icon">
                    <GiNoodles />
                  </i>
                  <span className="text nav-text">Noodles</span>
                </Link>
              </li>
              {/* Fast Food */}
              <li className="nav-link">
                <Link to={"/fastfood"}>
                  <i className="bx bx-home-alt icon">
                    <FaHamburger />
                  </i>
                  <span className="text nav-text">Fast Food</span>
                </Link>
              </li>
              {/* Ice Cream */}
              <li className="nav-link">
                <Link to={"/icecream"}>
                  <i className="bx bx-bar-chart-alt-2 icon">
                    <FaIceCream />
                  </i>
                  <span className="text nav-text">Ice Cream</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="bottom-content">
            <li className="">
              <Link to={"/cart"}>
                <i className="bx bx-log-out icon">
                  <FaShoppingCart />
                </i>
                <span className="text nav-text">Cart</span>
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
