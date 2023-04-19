import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  const renderNewPlant = (newPlantObj) => {
    console.log(newPlantObj);
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: newPlantObj.name,
        price: newPlantObj.price,
        image: newPlantObj.image,
      }),
    })
      .then((res) => res.json())
      .then((data) => setPlants([...plants, data]));
  };

  function handleSearch(e) {
    setText(e.target.value);
    console.log(e.target.value);
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(text.toLowerCase())
  );
  console.log(filteredPlants);

  return (
    <main>
      <NewPlantForm renderNewPlant={renderNewPlant} />
      <Search handleSearch={handleSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
