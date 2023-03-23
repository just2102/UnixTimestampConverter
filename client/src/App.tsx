import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import DateToUnix from './DateToUnix'
import UnixToDate from './UnixToDate'
import Snackbar from '@mui/material/Snackbar'
import { converterAPI } from './API'

function App() {
  const [count, setCount] = useState(0)

  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [isConverting, setIsConverting] = useState(false);

  const dateToUnix = async(dateString:string) => {
    setIsConverting(true)
    const response = await converterAPI.dateToUnix(dateString);
    if (response.data.status === 'OK') {
      setIsConverting(false)
      return response.data.unix;
    } else setIsConverting(false)
  }


  const unixToDate = async(unixTimestamp:number) => {
    setIsConverting(true)
    const response = await converterAPI.unixToDate(unixTimestamp)
    if (response.data.status === 'OK') {
      setIsConverting(false)
      return response.data.date;
    } else setIsConverting(false)
  }

  const handleCopy = (result:string|number|Date) => {
    navigator.clipboard.writeText(result.toString());
    setSnackbarOpen(true);
  }

  return (
    <div className="App">
      <Snackbar
      open={snackbarOpen}
      autoHideDuration={1200}
      onClose={()=>setSnackbarOpen(false)}
      message="Copied!"></Snackbar>
      <div className="selector">
        <NavLink to={"/dateToUnix"}><button>Date → Unix</button></NavLink>

        <NavLink to={"/unixToDate"}><button>Unix → Date</button></NavLink>
      </div>
      <Routes>
        <Route path='/dateToUnix' 
        element={<DateToUnix isConverting={isConverting} handleCopy={handleCopy} dateToUnix={dateToUnix}/>}></Route>

        <Route path='/unixToDate' 
        element={<UnixToDate isConverting={isConverting} handleCopy={handleCopy} unixToDate={unixToDate}/>}></Route>
      </Routes>
    </div>
  )
}

export default App
