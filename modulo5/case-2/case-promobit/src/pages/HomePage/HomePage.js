import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { API_KEY, BASE_URL } from "../../constants/urls";
import { ScreenContainer } from "./styled";

const HomePage = () => {
    const [moviesList, setMoviesList] = useState([])

    const getMovies = () => {
        axios.get(`${BASE_URL}/popular?api_key=${API_KEY}`)
            .then((res) => {
                setMoviesList(res.data.results)
                console.log(res.data.results)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    useEffect(() => {
        getMovies()
    }, [])

    const mappedMovies = !moviesList ? [] : moviesList.map((film) => {
        return <MovieCard key={film.id} movieId={film.id} title={film.title} date={film.release_date} imgSrc={`https://image.tmdb.org/t/p/w200/${film.poster_path}`}/>
      })

    return (
        <ScreenContainer>
            {mappedMovies}        
           </ScreenContainer>
    )
}

export default HomePage;