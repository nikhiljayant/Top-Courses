import { useState, useEffect } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import Spinner from "./components/Spinner"
import { apiURL, filterData } from "./data";
import { toast } from "react-toastify";

function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cateogary, setCateogary] = useState(filterData[0].title);

    async function fetchData() {
      setLoading(true); // jab tak data process hokar UI par render hoga jab tak loading aajayega
      try {
        let response = await fetch(apiURL);
        let output = await response.json();
        setCourses(output.data);
      } catch (error) {
          toast.error("Error");
      }
      setLoading(false); // ab data aagya hn toh loading nhi aani chahiye
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className='min-h-screen flex flex-col bg-rose-500'>
      <div>
        <Navbar />
      </div>
      <div className='bg-rose-500'>
        <div>
          <Filter filterData={filterData} cateogary={cateogary} setCateogary={setCateogary} />
        </div>
        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
          {
            loading ? (<Spinner />) : (<Cards courses={courses} cateogary={cateogary} />)
          }
        </div>
      </div>
    </div>
  );
};

export default App;
