import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const plantElement = plants.map((plant) => (
    <PlantCard key={plant.id} plant={plant} />
  ));

  return <ul className="cards">{plantElement}</ul>;
}

export default PlantList;
