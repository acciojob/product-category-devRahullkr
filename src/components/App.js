
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  let male = ["Shirts","Facial-grooming kits","Hair styling","Jeans","Shoes"]
  let female = ["Tops","Skirts","Makeup items","Jewellery","Sandals"]
  const [data,setData] = useState([])
  const [category,setCategory] = useState("")
  useEffect(() => {
    if(category === "male"){
      setData(male)
    }else if(category === "female"){
      setData(female)
    }else{
      setData([])
    }
  },[category])
  return (
    <div>
        {/* Do not remove the main div */}
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <ul>
          {
            data.map((item,index) => {
              return (
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
    </div>
  )
}

export default App
