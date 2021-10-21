import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

// const baseUrl = "http://localhost:6001"
const plantUrl = "http://localhost:6001/plants"

function App() {

  const [plantList, setPlantList] = useState([])
  const [search, setSearch] = useState("")

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

  const handleSearch = (input) => setSearch(input)

  const filterResults = () => {
    if (search.length > 0) {
      return plantList.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
    } else {
      return plantList
    }
  }

  return (
    <div className="app">
      <Header />
      <PlantPage 
        plantList={filterResults()}
        handleSearch={handleSearch}
        addPlantToState={addPlantToState}
      />
    </div>
  );
}

export default App;
