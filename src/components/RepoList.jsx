import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function RepoList() {
  const { repos, nightMode } = useContext(AppContext);
  // console.log(repos);

  if(!repos || repos.length===0) {
    return null;
  }

  return (
    <div className={`w-2xl my-6 p-6 shadow-lg ${nightMode ? "bg-gray-900 text-white" : "bg-sky-100"}`}>
      <h3 className="text-xl font-bold mb-4">Repositories</h3>
      <ul>
        {
          repos.map(repo => (
            <li key={repo.id} className="border-b border-gray-200 py-2">
              <a href={repo.html_url} className="text-blue-500 hover:underline">{repo.name}</a>
              <p className="">Repo Clone URL : {repo.clone_url}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default RepoList