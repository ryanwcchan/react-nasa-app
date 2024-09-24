import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Main from './components/Main'
import SideBar from './components/SideBar'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  
  useEffect(()=> {
    async function fetchPicture() {
      const API_KEY = import.meta.env.VITE_NASA_API_KEY
      const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
      
      try {
        const response = await fetch(API_URL)
        const apiData = await response.json()
        setData(apiData)
        console.log(apiData)
      } catch (err) {
        console.error(err.message)
      }      
    }
    fetchPicture()
  }, [])

  function handleToggleModal() {
    setShowModal(!showModal)
  }

  return (
    <>
      {data ? (<Main data={data} />): (
        <div className="loading">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
      <Footer data={data} showModal={showModal} handleToggleModal={handleToggleModal} />
    </>
  )
}

export default App
