import React, {useState} from "react";


function PlantCard({plant, name, image, price, handleDeletePlant}) {

  const [inventory, setInventory] = useState(true)


  const updateInventory = () => setInventory(!inventory)

// console.log(handleDeletePlant)
  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inventory ? (
        <button className="primary" onClick={updateInventory}>In Stock</button>
      ) : (
        <button onClick={updateInventory}>sold out</button>
      )}
      <button className="button delete" onClick={() => handleDeletePlant(plant)}>Delete</button>
    </li>
  );
}

export default PlantCard;
