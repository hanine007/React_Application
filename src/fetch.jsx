
const fetchp = async () => {
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
export default fetchp
