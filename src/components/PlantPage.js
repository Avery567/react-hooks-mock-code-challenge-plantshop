import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantList, addPlantToState}) {
  return (
    <main>
      <NewPlantForm        
      addPlantToState={addPlantToState}
      />
      <Search />
      <PlantList
       plantList={plantList}
       addPlantToState={addPlantToState}
      />
    </main>
  );
}

export default PlantPage;
