import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import ReactInputMask from 'react-input-mask';
import useCountriesList from '../Card/hooks/useCountriesList';
import useForm from '../Card/hooks/useForm';

const SignUpForm = () => {
    const [form, handleInput] = useForm({
        selectCountry: "",
        localInput: "",
        date: ""
    })
    const [desiredTravelsList, setDesiredTravelsList] = useState([])
    const countriesList = useCountriesList()

    const mappedSelectCountry = !countriesList ? [] : countriesList.map((country) => {
        return <MenuItem key={country.alpha2Code} value={country.name}>
            <img src={country.flag} width="50px" alt="Bandeiras" />
            {country.translations.br}
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

    const removeCard = (idToDelete) => {
        const copiedList = [...desiredTravelsList]
        const deleteTravel = copiedList.filter((travel) => {
            return idToDelete !== travel.id;
        })
        setDesiredTravelsList(deleteTravel)
    }

    

    const renderCards = desiredTravelsList.map((card) => {
        return <div key={card.id}>
            {card.country}, {card.local}, {card.date}
            <button onClick={() => removeCard(card.id)}>Excluir</button>
            </div>
    })

    console.log(renderCards)

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
            <ReactInputMask
                mask="99/9999"
                value={form['date']}
                onChange={handleInput}
                name={'date'}
                placeholder='Mês/ano'
                required
            />
            <br/><br/>
            <Button variant='contained' onClick={addCard}>Adicionar</Button>
            {renderCards}


        </div>
    );
}

export default SignUpForm;