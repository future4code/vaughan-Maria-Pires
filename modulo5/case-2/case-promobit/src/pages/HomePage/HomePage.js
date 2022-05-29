import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { API_KEY, BASE_URL } from "../../constants/urls";
import { MoviesContainer } from "./styled";
import { P, Text, TMDBNavBar } from "../../components/Header/styled";
import CheckboxFilter from "../../components/CheckboxFilter/CheckboxFilter";


const HomePage = () => {
    const [moviesList, setMoviesList] = useState([])
    const [pageNumber, setPageNumber] = useState(18)
    const [pages, setPages] = useState()


    const getMovies = () => {
        axios.get(`${BASE_URL}/popular?api_key=${API_KEY}&page=${pageNumber}`)
            .then((res) => {
                setMoviesList(res.data.results)
                setPages(res.data.total_pages)
            })
            .catch((err) => {
                alert(err.message)
            })
    }


    useEffect(() => {
        getMovies();
    }, [getMovies()])

 
    const mappedMovies = !moviesList ? [] : moviesList.map((film) => {
        return <MovieCard key={film.id} movieId={film.id} title={film.title} date={film.release_date} imgSrc={`https://image.tmdb.org/t/p/w200/${film.poster_path}`} />
    })

    return (
        <>
            <TMDBNavBar>
                <Text>Milhões de filmes, séries e pessoas pra descobrir. Explore já.</Text>
                <P>Filtre por:</P>
                <CheckboxFilter />
            </TMDBNavBar>
            <MoviesContainer>
                {mappedMovies}
            </MoviesContainer>
        </>
    )
}

export default HomePage;