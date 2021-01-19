import React, { useState } from "react";

function PlantCard({plant}) {
  const [isStocked, setIsStocked] =useState(true)
  
  console.log(isStocked)
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
    </li>
  );
}

export default PlantCard;
