import {createContext, useState} from 'react';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [nightMode, setNightMode] = useState(false);
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);

    const toggleNightMode = () => {
        setNightMode(!nightMode);
    };

    const fetchUser = async (username) => {
        try { 
            const userResponse = await fetch(`https://api.github.com/users/${username}`);
            const userData = await userResponse.json();
            setUser(userData);

            const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
            const reposData = await reposResponse.json();
            setRepos(reposData);
        }catch (error) {
            console.error("Error Fetching Data", error);
        }
    };

    return (
        <AppContext.Provider value={{nightMode, toggleNightMode, user, fetchUser, repos}}>
        {children}
        </AppContext.Provider>
    );
};
