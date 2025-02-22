import {useContext, useState} from 'react'
import { AppContext } from '../context/AppContext';

function SearchBar() {
    const {fetchUser} = useContext(AppContext);
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchUser(username);
    }
  return (
    <form onSubmit={handleSubmit} className='flex justify-center my-4 w-2xl mx-auto'>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Enter Github Username" className="px-4 py-2 border border-gray-300 w-full" />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600">Search</button>
    </form>
  )
}

export default SearchBar