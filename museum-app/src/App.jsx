import { useState, useEffect } from 'react'
import './App.css'
import ImageContainer from './components/ImageContainer'
// import data from "./infosMockAPI.json"

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const apiKey = import.meta.env.VITE_API_RIJKS_API_KEY

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch(`https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}`);
      const result = await response.json();
      setData(result);
      setIsLoading(false);
    };

    fetchData();
  }, []);


  return (
    <>
      <div className="appContent">
        {isLoading ? "LOADING" : <ImageContainer imagesData={data.artObjects} />}
      </div>
    </>
  )
}

export default App
