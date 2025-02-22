import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function UserCard() {
    const { user, nightMode } = useContext(AppContext);
    // console.log(user);

    if(!user) {
        return null;
    }

  return (
    <div className={`w-2xl p-10 gap-5 shadow-lg flex ${nightMode ? "bg-gray-900 text-white" : "bg-sky-100"}`}>
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-24 h-24 rounded-full mt-7"
      />
      <div className="text-left">
        <h2 className="text-2xl font-bold mt-4">
            {user.name || user.login}
        </h2>
        <p className="mt-2">{user.bio}</p>
        <div className="flex justify-around mt-4 border border-gray-600 p-2">
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
            <p>Repos: {user.public_repos}</p>
        </div>
      </div>
    </div>
  )
}

export default UserCard