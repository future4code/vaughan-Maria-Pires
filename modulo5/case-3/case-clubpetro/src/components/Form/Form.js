import Card from "../Card/Card";
import { useState } from "react";
import useCountriesList from "../../hooks/useCountriesList";
import useForm from "../../hooks/useForm";
import Header from "../Header/Header";
import { AddButton, InputCity, InputDate, MenuBar, Select } from "./styled";
import { CardsContainer } from "../Card/styled";

const Form = () => {
    const [form, handleInput] = useForm({
        selectCountry: "",
        localInput: "",
        date: ""
    })
    const [desiredTravelsList, setDesiredTravelsList] = useState([])
    const countriesList = useCountriesList()

    const selectCountryOptions = !countriesList ? [] : countriesList.map((country) => {
        return <option key={country.alpha2Code} value={country.translations.br}>
            {country.translations.br}
        </option>
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
        return <Card key={card.alpha2Code} card={card} removeCard={removeCard} />
    })


    return (
        <>
            <Header />
            <MenuBar>
                <Select
                    value={form['selectCountry']}
                    onChange={handleInput}
                    name={'selectCountry'}
                    required
                >
                    <option value="">Selecione...</option>
                    {selectCountryOptions}
                </Select>

                <InputCity
                    value={form['localInput']}
                    onChange={handleInput}
                    name={'localInput'}
                    required
                    placeholder='Digite a cidade que deseja conhecer'
                    
                />
                <InputDate value={form['date']} onChange={handleInput} name={'date'}
                    mask="99/9999" placeholder="mês/ano" />
                <AddButton variant='contained' onClick={addCard}>Adicionar</AddButton>
            </MenuBar>
            <CardsContainer>
                {renderCards}
            </CardsContainer>

        </>
    )
};

export default Form;