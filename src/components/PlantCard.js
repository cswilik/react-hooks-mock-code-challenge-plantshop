import React, { useState } from "react";

function PlantCard({plant, onDeletePlant}) {
  const [isStocked, setIsStocked] =useState(true)
  
  function handleDeletePlant() {
    const id = plant.id
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json()) 
    .then(res => onDeletePlant(id))
  }
  return (
    <li className="card">
      <img src= {plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      
      {isStocked ? (
        <button className="primary" onClick={() => {setIsStocked(!isStocked)}}>In Stock</button>
      ) : (
        <button onClick={() => {setIsStocked(!isStocked)}} >Out of Stock</button>
      )}
      <br></br>
      <button className="primary" onClick={handleDeletePlant}>Delete Plant</button>
      {/* <form className="new-plant-form">
        <h3>Update Price</h3>
        <input type="text" name="price" placeholder="new price"/>
        <button type="submit">Update Price</button>
      </form> */}
    </li>

  );
}

export default PlantCard;
