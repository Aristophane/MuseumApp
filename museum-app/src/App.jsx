import { useState, useEffect } from 'react'
import './App.css'
import ImageContainer from './components/ImageContainer'
// import data from "./infosMockAPI.json"

function App() {
  const [data, setData] = useState(null);

  const apiKey = import.meta.env.VITE_API_RIJKS_API_KEY

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}`);
      const result = await response.json();
      setData(result);
    };

    fetchData();

    console.log(JSON.stringify(data))
  }, []);


  return (
    <>
    <div className="appContent">
       <ImageContainer imagesData={data.artObjects}/>
    </div>
    </>
  )
}

export default App
