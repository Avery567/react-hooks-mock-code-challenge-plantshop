import React, {useState} from "react";

function NewPlantForm({addPlantToState}) {

  const [plantname, setPlantName] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [price, setPrice] = useState("")

  const addPlantName = (e) => setPlantName(e.target.value)
  const addImageUrl = (e) => setImageUrl(e.target.value)
  const addPrice = (e) => setPrice(e.target.value)

  const addPlant = (e) => {
    e.preventDefault()
    const newPlant = {
      // id: {} ,
      plantname: plantname,
      imageUrl: imageUrl,
      price: price
    }
    // console.log("submitted")
    addPlantToState(newPlant)
    // console.log(newPlant)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={addPlant}>
        <input type="text" name="name" placeholder="Plant name" onChange={addPlantName}/>
        <input type="text" name="image" placeholder="Image URL" onChange={addImageUrl}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={addPrice}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
