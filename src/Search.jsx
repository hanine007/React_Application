import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const SearchParams = () => {
 

    const [location,setlocation ]= useState('Alger');
    const [animal,setanimal ]= useState('dog');
    function handlelocation(e){
        setlocation(e.target.value);
    }
    const navigate = useNavigate();

  const handleClick = () => {
    navigate('/detail');
  }







    return (
      <div className="search-params">
        <form onSumbit={(e)=>{e.preventDefault();request}} >
          <label htmlFor="location">
            Location
            <input id="location" onChange={handlelocation} value={location} placeholder="Location" />
          </label>

        <label htmlFor="Animals">
            <select
            id ="animals"
            value={animal}
            onChange={(e)=>setanimal(e.target.value)}
            >
        
        </select>
        </label>
        
        






          <button>Submit</button>
        </form>
        <button onClick={handleClick} >
      Go to Details
    </button>
        
        
      </div>
    );
  };
  
  export default SearchParams;