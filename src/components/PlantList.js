import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList, addPlantToState, handleDeletePlant}) {

  return (
    <ul className="cards">
      {plantList.map((plant) => 
        <PlantCard 
          key={plant.id}
          name={plant.name}
          image={plant.image}
          price={plant.price}
          id={plant.id}
          plant={plant}
          addPlantToState={addPlantToState}
          handleDeletePlant={handleDeletePlant}
          />

        )}
    </ul>
  );
}

export default PlantList;
