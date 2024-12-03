import './App.css'
import ImageContainer from './components/ImageContainer'
import data from "./infosMockAPI.json"

function App() {
// console.log(data.artObjects)

  return (
    <>
    <div className="appContent">

       <ImageContainer imagesData={data.artObjects}/> 
       
    </div>
    </>
  )
}

export default App
