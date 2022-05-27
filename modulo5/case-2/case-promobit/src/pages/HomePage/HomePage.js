import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { API_KEY, BASE_URL } from "../../constants/urls";
import { ScreenContainer } from "./styled";
import Header from "../../components/Header/Header";
import CheckboxFilter from "../../components/CheckboxFilter/CheckboxFilter";


const HomePage = () => {
    const [moviesList, setMoviesList] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [pages, setPages] = useState()


    const getMovies = () => {
        axios.get(`${BASE_URL}/popular?api_key=${API_KEY}&page=${pageNumber}`)
            .then((res) => {
                setMoviesList(res.data.results)
                setPages(res.data.total_pages)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }


    useEffect(() => {
        getMovies();
    }, [getMovies()])

    const arrayOfPages = Array.from(Array(pages))
    const mappedArrayOfPages = arrayOfPages.map((p, index) => {
        return <button value={index + 1} onClick={(event) => setPageNumber(event.target.value)}>{index + 1}</button>
    })


    const mappedMovies = !moviesList ? [] : moviesList.map((film) => {
                return <MovieCard key={film.id} movieId={film.id} title={film.title} date={film.release_date} imgSrc={`https://image.tmdb.org/t/p/w200/${film.poster_path}`} />
            })

            return(
                <ScreenContainer>
                    <Header/>
                    <CheckboxFilter/>
                    {mappedMovies}
                </ScreenContainer>
            )
}

export default HomePage;