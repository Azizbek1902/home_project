import { BsFilterCircle } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import React, { useEffect, useState } from "react";
import data from "./data";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [priceDan, setPriceDan] = useState(0);
  const [priceGacha, setPriceGacha] = useState(0);
  const [room, setRoom] = useState(0);
  const [openFilter, setOpenFilter] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const handleClik = (data) => {
    navigate("/product", { state: data });
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleRegion = (e) => {
    setRegion(e.target.value);
  };
  useEffect(() => {
    setFilterData(data.products);
  }, []);
  const handleClose = () => {
    // let dataFil = {
    //   country: country,
    //   region: region,
    //   price: {
    //     dan: priceDan,
    //     gacha: priceGacha,
    //   },
    //   room: room,
    // };
   
    // setFilterData(newData);
    setCountry("");
    setRegion("");
    setPriceDan(0);
    setPriceGacha(0);
    setRoom(0);
    setOpenFilter(false);
  };

  return (
    <div className="relative">
      <div
        className={`absolute ${
          openFilter ? "block" : "hidden"
        } top-0 left-0 bg-white w-full overflow-y-hidden z-10 overflow-hidden h-[100vh]`}
      >
        <div className="p-2">
          <div className="flex gap-28 items-start">
            <button
              className="flex py-1 px-2 font-semibold gap-1 mb-3 text-black rounded"
              onClick={() => {
                setOpenFilter(false);
              }}
            >
              <IoIosArrowBack size={25} />
            </button>
            <h1 className="text-center text-2xl font-semibold">Filter</h1>
          </div>
          <hr />
          <div className="mt-3 flex justify-between gap-3">
            <select
              onChange={handleCountry}
              name=""
              value={country}
              id=""
              className="border w-full outline-none border-gray-300 px-2 py-2 rounded-md"
            >
              <option selected>Shahar tanlang !</option>
              {data.counties.map((item, index) => {
                return (
                  <option
                    className="outline-none border border-gray-400"
                    value={item.title}
                    key={index + 1}
                  >
                    {item.title}
                  </option>
                );
              })}
            </select>
            <select
              onChange={handleRegion}
              name=""
              value={region}
              id=""
              className="border w-full outline-none border-gray-300 px-2 py-2 rounded-md"
            >
              <option selected>Tuman tanlang !</option>
              {data.regions.map((item, index) => {
                return (
                  <option
                    className="outline-none border border-gray-400"
                    value={item.title}
                    key={index + 1}
                  >
                    {item.title}
                  </option>
                );
              })}
            </select>
          </div>
          <h1 className="mt-3 mb-2 font-semibold font-sans pl-3 text-lg">
            Narx kiriting
          </h1>
          <div className="flex gap-3 justify-between">
            <input
              type="number"
              value={priceDan}
              onChange={(e) => {
                setPriceDan(e.target.value);
              }}
              className="outline-none p-2 border border-gray-300 rounded-md w-full placeholder:text-gray-500 font-semibold"
              placeholder="dan..."
            />
            <input
              type="number"
              value={priceGacha}
              onChange={(e) => {
                setPriceGacha(e.target.value);
              }}
              className="outline-none p-2 border border-gray-300 rounded-md w-full placeholder:text-gray-500 font-semibold"
              placeholder="gacha..."
            />
          </div>
          <h1 className="mt-3 mb-2 font-semibold font-sans pl-3 text-lg">
            Xonalar sonini kiriting
          </h1>
          <div className="flex gap-3 justify-between">
            <input
              type="number"
              value={room}
              onChange={(e) => {
                setRoom(e.target.value);
              }}
              className="outline-none p-2 border border-gray-300 rounded-md w-full placeholder:text-gray-500 font-semibold"
              placeholder="dan..."
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => handleClose()}
              className="mt-5 bg-gray-400 text-white text-center rounded-md py-2 text-basez px-6 font-medium"
            >
              Tasdiqlash
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          openFilter ? "hidden" : "block"
        } flex justify-center w-full mb-20`}
      >
        <div className="w-[95%] mt-3">
          <div className="flex items-center gap-2 justify-end mb-3">
            <marquee
              className="text-xl tracking-wider font-serif"
              behavior=""
              direction=""
            >
              INVEST | Ko'chmas Mulk Savdo
            </marquee>
            <button
              className="bg-slate-400 py-2 px-3 rounded"
              onClick={() => {
                setOpenFilter(true);
              }}
            >
              <BsFilterCircle size={24} />
            </button>
          </div>

          <div className="grid gap-3 grid-cols-2">
            {filterData.map((item, ind) => {
              return (
                <div onClick={() => handleClik(item)} key={ind + 1}>
                  <Card
                    img={item.rasmlar[0]}
                    title={item.nomi}
                    price={item.price}
                    country={item.shahar}
                    productState={item.holati}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
