import React from "react";
import CharacterItems from "./CharacterItem";
import Spinner from "../ui/Spinner";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((items) => (
        <CharacterItems key={items.char_id} item={items}></CharacterItems>
      ))}
    </section>
  );
};

export default CharacterGrid;
