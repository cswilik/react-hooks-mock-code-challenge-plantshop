import React, { useState } from "react";

function NewPlantForm({onSubmitNewPlant}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  const formData = {
    name: name,
    image: image,
    price: price
  }

  function handleSubmitFetch(evt) {
    evt.preventDefault()
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    
    }).then(r => r.json())
    .then(newPlant => onSubmitNewPlant(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmitFetch}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={(evt) => setName(evt.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={(evt) => setImage(evt.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={(evt) => setPrice(parseFloat(evt.target.value))}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
