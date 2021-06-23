import React from "react";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((items) => (
        <h1>{items.name}</h1>
      ))}
    </section>
  );
};

export default CharacterGrid;
