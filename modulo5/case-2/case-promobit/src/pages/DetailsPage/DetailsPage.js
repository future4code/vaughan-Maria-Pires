import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TMDBNavBar } from "../../components/Header/styled";
import { API_KEY, BASE_URL } from "../../constants/urls";
import { Div, H2, H2Cast, H4, OverviewText, Poster, ReleaseDate } from "./styled";

const DetailsPage = () => {
    const [movie, setMovie] = useState({})
    const params = useParams()

    const getMovieDetails = () => {
        axios.get(`${BASE_URL}/${params.id}?api_key=${API_KEY}`)
            .then((res) => {
                console.log(res.data)
                setMovie(res.data)
            })
            .catch((err) => {
                alert(err.message)
            })
    }


    useEffect(() => {
        getMovieDetails()
    }, [])

    return (
        <Div>
            <TMDBNavBar>
                <Poster src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
            </TMDBNavBar>
            <H2>{movie.title} ({moment(movie.release_date).format("YYYY")})</H2>
            <ReleaseDate>{moment(movie.release_date).format("DD/MM/YYYY")} (BR) | {movie.vote_average} | {movie.runtime}min | {(movie.original_language).toUpperCase()}</ReleaseDate>
            <H4>Sinopse</H4>
            <OverviewText>{movie.overview}</OverviewText>

            
    


        </Div>
    )
}

export default DetailsPage;