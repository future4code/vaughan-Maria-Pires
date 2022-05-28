import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TMDBNavBar } from "../../components/Header/styled";
import { API_KEY, BASE_URL } from "../../constants/urls";
import { Button, Div, GrayDiv, H2, H4, MovieInfos, OverviewText, Poster, Span } from "./styled";

const DetailsPage = () => {
    const navigate = useNavigate()
    const [movie, setMovie] = useState({})
    const params = useParams()

    const getMovieDetails = () => {
        axios.get(`${BASE_URL}/${params.id}?api_key=${API_KEY}`)
            .then((res) => {
                setMovie(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                alert(err.message)
            })
    }


    useEffect(() => {
        getMovieDetails()
    }, [])

    const genres = movie.genres

    return (
        <Div>
            <TMDBNavBar>
                <Poster src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
            </TMDBNavBar>
            <H2>{movie.title} ({moment(movie.release_date).format("YYYY")})</H2>
            <MovieInfos>{moment(movie.release_date).format("DD/MM/YYYY")} (BR) | {movie.vote_average} | {movie.runtime}min | 
                 {genres && genres.map((film, index) => <Span key={film.id}>{(index ? ', ' : '') +film.name}</Span>

                )}</MovieInfos>
            <H4>Sinopse</H4>
            <OverviewText>{movie.overview}</OverviewText>
            <Button onClick={() => navigate(-1)}>Voltar à página inicial</Button>
            <GrayDiv/>

        </Div>
    )
}

export default DetailsPage;