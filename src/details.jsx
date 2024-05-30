import {Link}from'react-router-dom'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import fetchp from './fetch'
const Detail =()=>{
    const { data, status, error } = useQuery(["users"],()=> fetchp());
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/search');
    }
    return (
      <div className="App">
        {status === "error" && <p>Error: {error.message}</p>}
        {status === "loading" && <p>Fetching data...</p>}
        {status === "success" && (
          <div>
            {data.map((user) => (
             <div key={user.id}>
             <p>{user.username}{user.name}</p>
              </div>
            ))}
          
           </div>
            
            
            
            
           
        )}
        <button onClick={handleClick} >Go back</button>
      </div>

       
    );
  };

export default Detail;
