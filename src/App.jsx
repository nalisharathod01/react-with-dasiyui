
import { useEffect, useState } from 'react'
import Card  from './components/Card'
import './App.css'

function App() {

  const [image , setImage] = useState([]);
  const [currentPage , setCurrentPages] = useState(1);
  const [itemsPerPage , setitemsPerPage] = useState(5);

  const getData = async() => {
    const resp = await fetch(`https://picsum.photos/v2/list`);
    const data = await resp.json();
    setImage(data)

    console.log(data);
  }

  useEffect(() => {
    getData()
  }, [])

  const indexofLastItem = currentPage * itemsPerPage;
  const firstIndex = indexofLastItem - itemsPerPage;

  const currentItems = image.slice(firstIndex, indexofLastItem)

 const totalPages = Math.ceil(image.length / itemsPerPage)

const pages = [];
for(let i = 1; i <= totalPages; i++){
  pages.push(i)
}

  return (
    <div className="App">
    <div>
      {
        currentItems.map(
          i=> {
            return (
              <Card img={i.download_url} authorName={i.author} author />
            )
          }
        )
      }

      {
        pages.map(i=> {
          return(
            <div className="btn-group">
  <button onClick={() => setCurrentPages(i)} className="btn">{i}</button>
</div>
          )
        })
      }
    </div>
    </div>
  )
}

export default App
