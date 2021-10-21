import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

// const baseUrl = "http://localhost:6001"
const plantUrl = "http://localhost:6001/plants"

function App() {

  const [plantList, setPlantList] = useState([])

  useEffect(() =>{
    fetch(plantUrl)
    .then(r => r.json())
    .then(plantList => setPlantList(plantList))
  },[])

  const addPlantToState = (userAddedPlant) => {
    const newPlantList = [userAddedPlant, ...plantList]
    setPlantList(newPlantList)
    console.log(newPlantList)
  }

  return (
    <div className="app">
      <Header />
      <PlantPage 
        plantList={plantList}
        addPlantToState={addPlantToState}
      />
    </div>
  );
}

export default App;
