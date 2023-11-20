import { AiFillCloseCircle } from "react-icons/ai";
import React from "react";
import { useCart } from "react-use-cart";
import Carousel from "../../components/Carusel";
import { useNavigate } from "react-router-dom";

function Savat() {
  const { isEmpty, totalUniqueItems, items, removeItem } = useCart();
  const navigate = useNavigate();
  if (isEmpty)
    return (
      <p className="text-center mt-7 text-xl font-semibold">
        Tanlangan maxsulotlar mavjud emas!
      </p>
    );
  const handleClik = (data) => {
    navigate("/product", {
      state: data,
    });
  };
  return (
    <div>
      <div className="flex justify-center mb-20">
        <div className="w-[95%]">
          <h1 className="mt-5 text-center text-xl font-medium">
            Tanlanganlar: ({totalUniqueItems})
          </h1>
          <div className="mt-10">
            {items.map((item, index) => {
              return (
                <div key={index + 1} className="mb-5 relative bg-white p-2">
                  <div onClick={() => handleClik(item)}>
                    <Carousel images={item.rasmlar} />
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <h1 className="text-lg font-semibold">
                      {item.nomi.length > 20
                        ? item.nomi.slice(0, 30) + "...."
                        : item.nomi}
                    </h1>
                    <h1 className="text-lg font-semibold font-sans">
                      {item.price} $
                    </h1>
                  </div>
                  <h1 className="text-lg font-semibold pt-2">
                    Shahar: {item.shahar}
                  </h1>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute bottom-2 bg-red-500 rounded p-1 text-white right-1 z-20"
                  >
                    <AiFillCloseCircle size={25} />
                  </button>
                </div>
              );
            })}
            <div className="flex justify-center">
              <button className="mt-5 bg-gray-500 text-white rounded-md py-2 px-5">
                Rasmiylashtirish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Savat;
