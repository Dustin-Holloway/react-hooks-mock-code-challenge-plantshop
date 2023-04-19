import React from "react";
import { useState } from "react";

function NewPlantForm({ renderNewPlant }) {
  const [newPlantName, setNewPlantName] = useState("");
  const [newPlantPrice, setNewPlantPrice] = useState("");
  const [newPlantImage, setNewPlantImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newPlantObj = {
      name: newPlantName,
      image: newPlantImage,
      price: newPlantPrice,
    };
    renderNewPlant(newPlantObj);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newPlantName}
          placeholder="Plant name"
          onChange={(e) => setNewPlantName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          value={newPlantImage}
          placeholder="Image URL"
          onChange={(e) => setNewPlantImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          value={newPlantPrice}
          placeholder="Price"
          onChange={(e) => setNewPlantPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
