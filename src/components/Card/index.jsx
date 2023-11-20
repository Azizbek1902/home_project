import React from "react";

function Card({ img, title, price, country, productState }) {
  let newPrice = price.toLocaleString();
  return (
    <div>
      <div className="bg-white rounded-md">
        <img
          src={img}
          className="w-full rounded-md h-40"
          alt=""
        />
        <div className="p-3">
          <h1 className="text-base font-medium pb-2">
            {title.length > 30 ? title.slice(0, 30) + "..." : title}
          </h1>
          <h2 className="w-12 mb-2 text-center py-1 rounded bg-gray-200 text-xs">{productState}</h2>
          <h2 className="font-bold">{newPrice} $</h2>
          <span className="pt-4 text-xs font-normal">{country}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
