import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../../constants/urls";

const CheckboxFilter = () => {
    const [genre, setGenre] = useState([])

    const getAllGenres = () => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
        .then((res) => {
            console.log(res.data.genres)
            setGenre(res.data.genres)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    useEffect(() => {
        getAllGenres()
    }, [getAllGenres])

    const checkboxGenres = genre.map((movie) => {
        return <><input type="checkbox" name={movie.name}/>{movie.name} &nbsp;&nbsp;</>
    })

    return(
        <div>
            {checkboxGenres}
        </div>
    )
}

export default CheckboxFilter;