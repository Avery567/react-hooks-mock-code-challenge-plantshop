import React, {useState} from "react";


function PlantCard({name, image, price}) {

  const [inventory, setInventory] = useState(true)

  const updateInventory = () => setInventory(!inventory)

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
    </li>
  );
}

export default PlantCard;
