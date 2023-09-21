import { useEffect, useState } from "react";
import Navbar from "../../Components/NavBar/Navbar";
import SearchBar from "../../Components/SearchBar/Searchbar";
import "../HomePage/HomePage.css"
import Pagination from "../../Components/Pagination/Pagination";

const HomePage = () => {
    const file_path = 'https://image.tmdb.org/t/p/w300'

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=92e13641f7d1dc1375ad88b1bad6d034&page=${page}`)
        const data = await response.json();
        const results = data.results
        setData(results)
    }

    const Movies = data.map(poster => (
        <div className="Movie">
            <div className="MoviePoster">
                <img src={file_path + poster.backdrop_path} />
            </div>
            <p>{poster.vote_average} <span>&#x2606;</span></p>
            <h2>{poster.original_title}</h2>
            <h3>{poster.release_date}</h3>
        </div>
    ));


    fetchData()

    return <>
        <Navbar></Navbar>
        <SearchBar></SearchBar>
        <div className="MovieList">
            {Movies}
        </div>
        <Pagination setPage={setPage}></Pagination>
    </>

}

export default HomePage