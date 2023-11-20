import { IoIosArrowBack } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Carousel from "../../components/Carusel";
import { useCart } from "react-use-cart";

function Product() {
  const { state } = useLocation();
  const { items, removeItem } = useCart();
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();
  let newPrice = state.price.toLocaleString();
  const handleBack = () => {
    navigate("/");
  };
  const { addItem } = useCart();
  useEffect(() => {
    let data = items.filter((item) => item.id === state.id);
    if (data.length > 0) {
      setIsLiked(true);
    }
  });
  return (
    <div>
      <div className="flex justify-center mt-3 mb-20">
        <div className="w-[95%]">
          <button
            className="bg-gray-500 flex py-2 px-3 font-semibold gap-1 mb-3 text-white rounded"
            onClick={() => handleBack()}
          >
            <IoIosArrowBack size={25} />
            Qaytish
          </button>
          <Carousel images={state.rasmlar} />
          <div className="px-2">
            <h1 className="pt-3 font-medium">{state.nomi}</h1>
            <p className="font-bold text-xl">{newPrice} $</p>
            <div className="flex flex-wrap gap-1 mt-3">
              {state.shahar.length > 0 ? (
                <div className="px-3 py-1 bg-white rounded border">
                  Shahar: {state.shahar}
                </div>
              ) : (
                <></>
              )}
              {state.tuman.length > 0 ? (
                <div className="px-3 py-1 bg-white rounded border">
                  Tuman: {state.tuman}
                </div>
              ) : (
                <></>
              )}
              {state.xonalar > 0 ? (
                <div className="px-3 py-1 bg-white rounded border">
                  Xonalar soni: {state.xonalar}
                </div>
              ) : (
                <></>
              )}

              {state.umumiyMaydon > 0 ? (
                <div className="px-3 py-1 bg-white rounded border">
                  Umumiy maydon: {state.umumiyMaydon} m
                  <span className="text-[8px] relative font-bold bottom-1">
                    2
                  </span>
                </div>
              ) : (
                <></>
              )}
              {state.yashashMaydon > 0 ? (
                <div className="px-3 py-1 bg-white rounded border">
                  Yashash maydon: {state.yashashMaydon} m
                  <span className="text-[8px] relative font-bold bottom-1">
                    2
                  </span>
                </div>
              ) : (
                <></>
              )}
              {state.qavati > 0 ? (
                <div className="px-3 py-1 bg-white rounded border">
                  Qavatligi: {state.qavati}
                </div>
              ) : (
                <></>
              )}
              {state.uchastkaMaydon > 0 ? (
                <div className="px-3 py-1 bg-white rounded border">
                  Uchastka maydon: {state.uchastkaMaydon}
                </div>
              ) : (
                <></>
              )}
              {state.shiftBalandligi > 0 ? (
                <div className="px-3 py-1 bg-white rounded border">
                  Shift balandligi: {state.shiftBalandligi}
                </div>
              ) : (
                <></>
              )}
              {state.joylashuvi.length > 0 ? (
                <div className="px-3 py-1 bg-white rounded border">
                  Joylashuvi: {state.joylashuvi}
                </div>
              ) : (
                <></>
              )}
              <div className="px-3 py-1 bg-white rounded border">
                Mebel: {state.mebel ? "Bor" : "Yoq"}
              </div>
              {state.uyHolati.length > 0 ? (
                <div className="px-3 py-1 bg-white rounded border">
                  Uy holati: {state.uyHolati}
                </div>
              ) : (
                <></>
              )}
              {state.qurilishTuri.length > 0 ? (
                <div className="px-3 py-1 bg-white rounded border">
                  Qurilish turi: {state.qurilishTuri}
                </div>
              ) : (
                <></>
              )}
              {state.uyTuri.length > 0 ? (
                <div className="px-3 py-1 bg-white rounded border">
                  Uy turi: {state.uyTuri}
                </div>
              ) : (
                <></>
              )}
              {state.suv.length > 0 ? (
                <div className="px-3 py-1 bg-white rounded border">
                  Suv: {state.suv}
                </div>
              ) : (
                <></>
              )}
              <div className="px-3 py-1 bg-white rounded border">
                Elektr: {state.elektr ? "Bor" : "Yo'q"}
              </div>
              {state.isitish.length > 0 ? (
                <div className="px-3 py-1 bg-white rounded border">
                  Isitish: {state.isitish}
                </div>
              ) : (
                <></>
              )}
              {state.gaz.length > 0 ? (
                <div className="px-3 py-1 bg-white rounded border">
                  Gaz: {state.gaz}
                </div>
              ) : (
                <></>
              )}
              {state.sanuzel.length > 0 ? (
                <div className="px-3 py-1 bg-white rounded border">
                  Sanuzel: {state.sanuzel}
                </div>
              ) : (
                <></>
              )}
              {state.yili.length > 0 ? (
                <div className="px-3 py-1 bg-white rounded border">
                  Uy yili: {state.yili}
                </div>
              ) : (
                <></>
              )}
              {state.mavjudNarsalar.length > 0 ? (
                <div className="px-3 py-1 bg-white rounded border">
                  Uyda bor narsalar: {state.mavjudNarsalar}
                </div>
              ) : (
                <></>
              )}
              {state.yaqinidaJoylashgan.length > 0 ? (
                <div className="px-3 py-1 bg-white rounded border">
                  Yaqinida joylashgan: {state.yaqinidaJoylashgan}
                </div>
              ) : (
                <></>
              )}
              <div className="px-3 py-1 bg-white rounded border">
                Yaqinida joylashgan: {state.vositachilik ? "Bor" : "Yo'q"}
              </div>
            </div>
            <h1 className="my-2 text-xl font-bold">Malumot</h1>
            <h1>{state.malumot}</h1>
            {isLiked ? (
              <button
                onClick={() => {
                  removeItem(state.id);
                  setIsLiked(false);
                }}
                className="text-center mt-4 py-2 text-white font-medium text-lg bg-gray-500 rounded-md w-full"
              >
                Saqlangan
              </button>
            ) : (
              <button
                onClick={() => {
                  addItem(state);
                  setIsLiked(true);
                }}
                className="text-center mt-4 py-2 text-white font-medium text-lg bg-green-500 rounded-md w-full"
              >
                Saqlash
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
