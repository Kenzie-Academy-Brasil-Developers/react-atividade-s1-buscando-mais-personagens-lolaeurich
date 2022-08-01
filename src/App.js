import {useEffect, useState} from "react";
import { Characters } from "./Components/Characters";

function App() {

    const [requestData, setRequestData] = useState({})
    const [characters, setCharacters] = useState([])
    const [currentPage, setCurrentPage] = useState('https://rickandmortyapi.com/api/character/')

    useEffect(() => {
        async function fetchData (){
            const res = await fetch(currentPage)
            const data = await res.json()

            const newState = characters.concat(data.results)
            setRequestData(data)
            setCharacters(newState)


            console.log(currentPage)
            console.log(requestData?.info?.next)
            console.log(characters)
            return data
        }
        fetchData()
    }, [currentPage])

    const handlePageUpdate = () => {
        setCurrentPage(requestData.info.next)
        return requestData.info.next
    }

  return (
    <div>
        <Characters characterList={characters}/>
        <button onClick={handlePageUpdate} > PROXIMA PAGINA </button>
    </div>
  );
}

export default App