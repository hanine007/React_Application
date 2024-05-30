import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  try {
    const res = await fetch(process.env.REACT_APP_API_URL);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (err) {
    console.error("Erreur lors de la récupération des utilisateurs :", err);
    throw err;
  }
};

const Test = () => {
  const { data, status, error } = useQuery(["users"],()=> fetchUsers());

  return (
    <div className="App">
      {status === "error" && <p>Error: {error.message}</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <div>
          {data.map((photo) => (
           <div key={photo.id}>
           <img src={photo.url} alt={photo.title} />
           <p>{photo.title}</p>
            </div>
          ))}
        
          
         </div>
      )}
    </div>
  );
};

export default Test;
