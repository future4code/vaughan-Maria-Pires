import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, BASE_URL } from "../../constants/urls";

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
        <div>
            <h2>Página de detalhes</h2>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
            <h2>{movie.title} (ano)</h2>
            <p>{movie.overview}</p>

        </div>
    )
}

export default DetailsPage;