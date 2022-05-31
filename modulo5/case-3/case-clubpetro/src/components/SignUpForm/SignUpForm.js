import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const SignUpForm = () => {
    const [countriesList, setCountriesList] = useState([])
    const [selectCountry, setSelectCountry] = useState("")
    const [localInput, setLocalInput] = useState("")
    const [date, setDate] = useState("")
    const [travelsList, setTravelsList] = useState([])

    const getCountriesList = () => {
        axios.get("https://restcountries.com/v2/all")
            .then((res) => {
                setCountriesList(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                alert(err.message)
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

    const addCard = () => {
        const newCard = {
            id: Math.random(),
            country: selectCountry,
            local: localInput,
            date: date
        }
        const copy = [...travelsList, newCard]
        setTravelsList(copy)
    }

    const renderCards = travelsList.map((card) => {
        return <div key={card.id}>{card.country}, {card.local}, {card.date}</div>
    })

    useEffect(() => {
        getCountriesList();
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
            <br/><br/>
            <Button variant='contained' onClick={addCard}>Adicionar</Button>
            {renderCards}

        </div>
    );
}


export default SignUpForm;