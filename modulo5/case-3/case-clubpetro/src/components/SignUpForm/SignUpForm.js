import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';

const SignUpForm = () => {
    const [countriesList, setCountriesList] = useState([])
    const [selectCountry, setSelectCountry] = useState("")
    const [localInput, setLocalInput] = useState("")
    const [date, setDate] = useState("")

    const getCountriesList = () => {
        axios.get("https://restcountries.com/v2/all")
            .then((res) => {
                setCountriesList(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    const handleSelectedCountry = (e) => {
        setSelectCountry(e.target.value);
    }

    const handleInputLocal = (e) => {
        setLocalInput(e.target.value);
    }

    const handleDate = (e) => {
        setDate(e.target.value);
    }

    const mappedCountries = !countriesList ? [] : countriesList.map((country) => {
        return <MenuItem key={country.alpha2Code} value={country.name}>{country.name}</MenuItem>
    })



    useEffect(() => {
        getCountriesList()
    }, [])


    return (
        <div>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                País
            </InputLabel>
            <Select
                value={selectCountry}
                onChange={handleSelectedCountry}
                required
                variant="outlined"
                displayEmpty>
                <MenuItem value="">Selecione...</MenuItem>
                {mappedCountries}
            </Select>

            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Local
            </InputLabel>
            <TextField
                value={localInput}
                onChange={handleInputLocal}
                required
                placeholder='Digite a cidade que deseja conhecer'
            />

            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Meta
            </InputLabel>
            <TextField 
            value={date} 
            onChange={handleDate}
            type="date"
            placeholder='mês/ano'
            />

        </div>
    );
}


export default SignUpForm;