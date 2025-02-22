import './App.css'
import Header from "./components/Header";
import {AppProvider} from './context/AppContext';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import RepoList from './components/RepoList';
function App() {

  return (
    <AppProvider>
      <div className="items-center justify-center flex flex-col">
        <Header />
        <SearchBar/>
        <UserCard/>
        <RepoList/>
      </div>
    </AppProvider>
  )
}

export default App
