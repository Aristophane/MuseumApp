import { useState, useEffect } from 'react'
import './App.css'
import ImageContainer from './components/ImageContainer'
import LoaderComponent from './components/Loader';
import MainContent from './components/MainContent';
// import data from "./infosMockAPI.json"

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState();

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

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch(`https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&q=${searchTerm}`);
      const result = await response.json();
      setData(result);
      setIsLoading(false);
    };
    fetchData();
  }, [searchTerm]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  }

  return (
    <>
      <div className="appContent">
        {isLoading ? <LoaderComponent></LoaderComponent> : <MainContent handleSearch={handleSearch} imagesData={data.artObjects}></MainContent>}
      </div>
    </>
  )
}

export default App
