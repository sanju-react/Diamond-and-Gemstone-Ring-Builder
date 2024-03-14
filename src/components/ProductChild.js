import React, { useState } from "react";
import { Link } from "react-router-dom";
import ring1 from "../../src/pages/home/assets/images/card/Diamond1/Diamond1.webp";
import ring2 from "../../src/pages/home/assets/images/card/Diamond1/Diamond1_hover.webp";
import View360Modal from "./View360Modal";
import ZoomView from "./ZoomView";

const shapes_array = [
  "Round",
  "Oval",
  "Cushion",
  "Radiant",
  "Emerald",
  "Pear",
  "Princess",
  "Asscher",
  "Marquise",
  "Heart",
];

const share = () => {
  if (navigator.share) {
    navigator
      .share({
        title: "Share Example",
        text: "Check out this shared content!",
        url: window.location.href,
      })

      .catch((error) => {
        console.error("Error sharing:", error);
      });
  }
};

const ProductChild = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const [zoomButtonToggle, setZoomButtonToggle] = useState(false);
  const [zoomViewToggle, setZoomViewToggle] = useState(false);
  const [showImage, setShowImage] = useState(0);

  return (
    <>
      {modalToggle && (
        <View360Modal
          modalToggle={modalToggle}
          setModalToggle={setModalToggle}
        />
      )}
      {zoomViewToggle && (
        <ZoomView
          data={[ring1, ring2, ring1]}
          setZoomViewToggle={setZoomViewToggle}
          zoomViewToggle={zoomViewToggle}
        />
      )}
      <div className="mx-auto w-[95%] px-24">
        <div className="w-full  h-6 py-8 flex flex-row justify-between  items-center">
          <Link to="/diamonds">
            <span className="text-xs underline ">BACK TO COLLECTION</span>
          </Link>

          <Link to="/diamonds">
            <span className="text-xs underline ">START OVER</span>
          </Link>
          <span>&nbsp;</span>
        </div>

        <div className="   min-h-[70vh] w-full ">
          <div className=" flex h-full w-full ">
            <div className="h-full  w-[45%]  p-2 flex    ">
              <div className=" gap-2  w-1/5 flex flex-col ">
                <button
                  className={` ${
                    showImage === 0 && "border-violet-400 border-2"
                  } w-20 border focus:border-violet-400 focus:border-2 aspect-square`}
                >
                  <img
                    className="h-full w-full object-cover cursor-pointer"
                    src={ring1}
                    alt="product image"
                    onClick={() => setShowImage(0)}
                  />
                </button>
                <button className=" w-20 border aspect-square focus:border-violet-400 focus:border-2">
                  <img
                    className={`
                    ${
                      showImage === 1 && "border-violet-400 border"
                    } "h-full   cursor-pointer w-full object-cover"`}
                    src={ring2}
                    alt="product image"
                    onClick={() => setShowImage(1)}
                  />
                </button>{" "}
                <button className=" w-20 border aspect-square focus:border-violet-400 focus:border-2">
                  <img
                    className={` ${
                      showImage === 2 && "border-violet-400 border"
                    }
                    "h-full w-full object-cover cursor-pointer"`}
                    src={ring1}
                    alt="product image"
                    onClick={() => setShowImage(2)}
                  />
                </button>
                <button className=" w-20 border aspect-square cursor-pointer">
                  <img
                    className="h-full w-full object-cover "
                    src="//diamond-search-gemstone-byor-ring-builder-keyideas.myshopify.com/cdn/shop/files/360-view-icon.svg?v=9898701996318623333"
                    onClick={() => {
                      setModalToggle(true);
                    }}
                  />
                </button>
              </div>

              {/* main img */}
              <div
                className="min-h-full w-4/5 border relative"
                onMouseEnter={() => setZoomButtonToggle(true)}
                onMouseLeave={() => setZoomButtonToggle(false)}
              >
                <span
                  title=" clicked here to zoom-in"
                  onClick={() => setZoomViewToggle(true)}
                  className={` ${
                    zoomButtonToggle ? "visible" : "hidden"
                  } cursor-pointer absolute  rounded-full flex justify-center border border-slate-200 items-center p-2 top-3 left-3`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    class="bi bi-zoom-in"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
                    />
                    <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
                    <path
                      fill-rule="evenodd"
                      d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"
                    />
                  </svg>
                </span>
                <img
                  className="h-full w-full object-cover cursor-pointer"
                  src={
                    showImage === 0 ? ring1 : showImage === 1 ? ring2 : ring1
                  }
                  alt="product image"
                />
              </div>
            </div>

            {/* section 2 */}
            <div className="h-full w-[55%] pl-10">
              <h1 className="text-4xl mt-6 justify-start flex flex-col text-[#7646D7] ">
                <p> Shiera Half Bezel Solitaire </p> <p>Engagement Ring</p>
              </h1>

              <div className="flex justify-start gap-4 mt-5  h-5 w-3/5">
                <span className="text-xl">$ 1,110</span>
              </div>

              <div className=" h-5 w-3/5 mt-4  justify-start">
                <span className="text-sm text-slate-400">
                  View With Diamond Shape
                </span>
              </div>

              <div className="grid grid-cols-6 min-h-24 w-full gap-4 mt-5  ">
                {shapes_array.map((val, index) => {
                  return (
                    <button
                      className="w-24  gap-5  border border-violet-500 hover:bg-violet-200 focus:bg-[#8357DB] focus:text-white  flex justify-center items-center  "
                      key={index}
                    >
                      {val}
                    </button>
                  );
                })}
              </div>

              <div className=" mt-4 h-full full">
                <div className="bg-[#7646D7] hover:bg-violet-600 h-12 mt-5  w-3/4">
                  <a
                    className="flex justify-center text-center p-3 text-white "
                    href=""
                  >
                    CHOOSE THIS SETTING
                  </a>
                </div>

                <div className="w-full h-full my-5  ">
                  <p className="text-slate-400 font-sans">
                    The ring showcases timeless elegance with its
                    channel-setting creating a seamless and captivating display
                    of sparkling diamonds. The meticulously placed round
                    diamonds, carefully selected for their exceptional
                    brilliance, exude a mesmerizing radiance that delights the
                    senses. Each diamond seamlessly flows into the next, forming
                    a continuous stream of scintillating
                  </p>
                </div>
                <div className="h-10 w-full flex py-10  justify-start items-center">
                  <button
                    className="flex gap-3 justify-center items-center"
                    onClick={share}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-upload text-[#7646D7]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                    </svg>
                    <span className="border-b-2  border-transparent hover:border-b-purple-500 text-[#7646D7] ">
                      Share
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductChild;
