import { useEffect, useState } from "react";


function App() {
  const [info , setInfo] = useState([])
  useEffect(()=>{
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc").then(response => response.json()).then(data => setInfo(data.results)).catch(err => console.error(err))
  },[])
  console.log(info)
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      {info.map((items) =>(<div className="max-w-lg bg-white p-12 rounded-md shadow-md flex dark:bg-gray-800 dark:hover:bg-gray-700">
      {/* Image Section on the Left */}
      <div className="mr-8">
        <img src={items.picture.large} alt="User Image" className="w-32 h-32 rounded-md" />
      </div>

      {/* Personal Information on the Right */}
      <div>
        <p className="text-lg font-bold tracking-tight mb-2 dark:text-white">First Name: <span className="font-normal text-gray-700 dark:text-gray-400">{items.name.first}</span></p>
        <p className="text-lg font-bold tracking-tight mb-2 dark:text-white">Last Name: <span className="font-normal text-gray-700 dark:text-gray-400">{items.name.last}</span></p>
        <p className="text-lg font-bold tracking-tight mb-2 dark:text-white">Gender: <span className="font-normal text-gray-700 dark:text-gray-400">{items.gender}</span></p>
        <p className="text-lg font-bold tracking-tight mb-2 dark:text-white">Mobile Number: <span className="font-normal text-gray-700 dark:text-gray-400">{items.cell}</span></p>
      </div>
    </div>))}
    </div>
  );
}

export default App;
