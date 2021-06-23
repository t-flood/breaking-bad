import React from "react";
import CharacterItems from "./CharacterItem";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((items) => (
        <CharacterItems key={items.char_id} item={items}></CharacterItems>
      ))}
    </section>
  );
};

export default CharacterGrid;
