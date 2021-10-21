import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList, addPlantToState}) {

  return (
    <ul className="cards">
      {plantList.map((plant) => 
        <PlantCard 
          key={plant.id}
          name={plant.name}
          image={plant.image}
          price={plant.price}
          addPlantToState={addPlantToState}
          />

        )}
    </ul>
  );
}

export default PlantList;
