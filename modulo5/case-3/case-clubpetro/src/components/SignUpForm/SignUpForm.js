import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useForm from '../Card/hooks/useForm';

const SignUpForm = () => {
    const [countriesList, setCountriesList] = useState([])
    const [desiredTravelsList, setDesiredTravelsList] = useState([])
    const [form, handleInput] = useForm({
        selectCountry: "",
        localInput: "",
        date: ""
    })

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

    const mappedSelectCountry = !countriesList ? [] : countriesList.map((country) => {
        return <MenuItem key={country.alpha2Code} value={country.name}>
            <img src={country.flag} width="50px" />
            {country.name}
        </MenuItem>
    })


    const addCard = () => {
        const newCard = {
            id: Math.random(),
            country: form['selectCountry'],
            local: form['localInput'],
            date: form['date']
        }
        const copy = [...desiredTravelsList, newCard]
        setDesiredTravelsList(copy)
    }

    const renderCards = desiredTravelsList.map((card) => {
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
                value={form['selectCountry']}
                onChange={handleInput}
                name={'selectCountry'}
                required
                variant="outlined"
                displayEmpty>
                <MenuItem value="">Selecione...</MenuItem>
                {mappedSelectCountry}
            </Select>

            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Local
            </InputLabel>
            <TextField
                value={form['localInput']}
                onChange={handleInput}
                name={'localInput'}
                required
                placeholder='Digite a cidade que deseja conhecer'
            />

            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Meta
            </InputLabel>
            <TextField
                value={form['date']}
                onChange={handleInput}
                name={'date'}
                type="date"
                placeholder='mês/ano'
            />
            <br /><br />
            <Button variant='contained' onClick={addCard}>Adicionar</Button>
            {renderCards}

        </div>
    );
}

export default SignUpForm;