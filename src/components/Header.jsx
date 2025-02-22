import { useContext } from 'react'
import {AppContext} from '../context/AppContext';

function Header() {
    const {nightMode, toggleNightMode} = useContext(AppContext);

  return (
    <header className={`flex justify-between items-center w-2xl p-4 ${nightMode ? "bg-gray-900 text-white" : "bg-sky-100"}`}> 
      <h1 className="text-xl font-bold">GitHub Dev Finder</h1>
      <button onClick={toggleNightMode} className="px-4 py-2">
        {nightMode ? "☀️" : "🌙"}
      </button>
    </header>
  )
}

export default Header
