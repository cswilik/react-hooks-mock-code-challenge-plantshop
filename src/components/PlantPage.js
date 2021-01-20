import React, { useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] =useState("")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(plantData => setPlants(plantData))
  }, [])

  function handleNewPlant(newPlant) {
    const newPlantArr = [newPlant, ...plants]
    setPlants(newPlantArr)
  }
  const filteredArr = plants.filter(plant => {
    return (plant.name.toLowerCase().includes(search.toLowerCase()))
  })

  function handleDeletePlant(id) {
   const updatedPlants = plants.filter(plant => {
      return (plant.id !== id)
    })
    setPlants(updatedPlants)
  }

  
  return (
    <main>
      <NewPlantForm onSubmitNewPlant={handleNewPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants ={filteredArr} onDeletePlant={handleDeletePlant}/>
    </main>
  );
}

export default PlantPage;
