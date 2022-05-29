import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../../constants/urls";
import { CheckboxContainer } from "./styled";

const CheckboxFilter = () => {
    const [genre, setGenre] = useState([])
    const [selectedGenres, setSelectedGenres] = useState([])

    const getAllGenres = () => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt-BR`)
            .then((res) => {
                setGenre(res.data.genres)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    useEffect(() => {
        getAllGenres()
    }, [selectedGenres])

    const handleCheckbox = (event) => {
        if(event.target.checked){
            setSelectedGenres([...selectedGenres], event.target.value);
        } else {
            setSelectedGenres(selectedGenres.filter((movie) => {
                return movie !== event.target.value;
            }))
        }
    }

    const checkboxGenres = genre.map((movie) => {
        return <><input type="checkbox" value={movie.id} onChange={handleCheckbox}/>{movie.name} &nbsp;&nbsp;</>
    })



    return (
        <CheckboxContainer>
            {checkboxGenres}
        </CheckboxContainer>
    )
}

export default CheckboxFilter;