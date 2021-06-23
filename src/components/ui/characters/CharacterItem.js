import React from "react";

export const CharacterItems = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-font">
          <img src={item.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CharacterItems;
