import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantList, addPlantToState, handleSearch, handleDeletePlant}) {
  return (
    <main>
      <NewPlantForm        
      addPlantToState={addPlantToState}
      />
      <Search handleSearch={handleSearch}/>
      <PlantList
       plantList={plantList}
       addPlantToState={addPlantToState}
       handleDeletePlant={handleDeletePlant}
      />
    </main>
  );
}

export default PlantPage;
