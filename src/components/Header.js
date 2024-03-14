import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import KI_LOGO from "../assets/images/header/KI_LOGO.png";
import AllFilters from "./AllFilters";
import SearchBar from "./SearchBar";
import SideMenu from "./SideMenu";

const menuList = [
  {
    title: "HOME",
    to: "/",
  },
  {
    title: "DIAMONDS",
    to: "/diamonds",
  },
  {
    title: "GEMSTONES",
    to: "/gemstones",
  },
  {
    title: "ENGAGEMENT",
    to: "/engagement",
  },
];

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [menuToggle, setMenuToggle] = useState(false);
  const [SearchModal, setSearchModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.querySelector("body").style.overflowY = "scroll";
      document.querySelector("body").style.overflowX = "hidden";
      document.querySelector("body").style.scrollBehavior = "smooth";
    };
    if (SearchModal || menuToggle) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      handleBodyOverflow();
    }
  }, [SearchModal, menuToggle]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <header className=" w-full h-[15vh]  bg-white">
        <div className="h-1/3 w-full bg-[#FFFFFF] border-b flex justify-center items-center">
          <h1 className="text-sm font-serif  text-[#333641]">
            Welcome to our store
          </h1>
        </div>
        <div className="h-2/3 border-b  flex justify-center items-center px-5 lg:px-10  gap-5 ">
          <div className="w-1/4 lg:hidden flex justify-start items-center">
            <button onClick={() => setMenuToggle(!menuToggle)}>
              {menuToggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              )}
            </button>
          </div>
          <Link
            to="/"
            className=" h-full w-1/2 lg:w-1/3 flex gap-2  justify-center items-center "
          >
            <div className="w-1/2 text-right flex justify-center items-center border-r-black border-r">
              <p className="font-bold text-sm text-[#5724C5]">
                Diamond & Gemstone <br /> Ring Builder
              </p>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <div className="w-full h-full ">
                <h1 className=" font-thin">POWERED BY</h1>

                <img src={KI_LOGO} className="object-left w-3/4" alt="" />
              </div>
            </div>
          </Link>
          <nav className=" h-full  w-1/3 hidden lg:block ">
            <ul className="flex  justify-between gap-5 items-center h-full w-full font-light">
              {menuList?.map((val, i) => {
                return (
                  <li
                    key={i}
                    className={`decoration-1 hover:underline hover:underline-offset-4  hover:decoration-[#5724C5] ${
                      location.pathname === val.to &&
                      // "underline underline-offset-8"
                      " decoration-[#5724C5] underline underline-offset-4 decoration-1 hover:decoration-2 "
                    }`}
                  >
                    <Link to={val.to}> {val.title}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <section className=" h-full w-1/4 lg:w-1/3 flex justify-end items-center">
            <ul className="flex justify-center items-center gap-5">
              <Link onClick={() => setSearchModal(!SearchModal)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-search hover:fill-[#5724C5]  scale-90 hover:scale-100 transition-all duration-500 cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </Link>
              <Link to={"/cart"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-bag hover:fill-[#5724C5] scale-90 hover:scale-100 transition-all duration-500 cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                </svg>
              </Link>
            </ul>
          </section>
        </div>
      </header>
      <div className="relative">
        {menuToggle && (
          <SideMenu
            data={menuList}
            setMenuToggle={setMenuToggle}
            path={location.pathname}
          />
        )}
      </div>

      {/* search modal  */}
      {SearchModal && (
        <div className="z-50 fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-50">
          <div className="h-[15vh]">
            <div className="h-1/3 py-5 w-full bg-[#FFFFFF] border-b flex justify-center items-center">
              <h1 className="text-sm font-serif  text-[#333641]">
                Welcome to our store
              </h1>
            </div>
            <div className="h-2/3 w-full  bg-white flex justify-center items-center gap-3 ">
              <SearchBar />
              <svg
                onClick={() => setSearchModal(false)}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-x-lg cursor-pointer "
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
