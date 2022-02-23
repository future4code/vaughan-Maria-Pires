import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/user";
import { InputsContainer, SignUpButtonContainer } from "../LoginPage/styled";


const SignUpForm = () => {
    const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })
    const navigate = useNavigate()
    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate)
    }
    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    label={"Nome"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"text"}
                />
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}
                />
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"password"}
                />
                <SignUpButtonContainer>
                <Button
                type={"submit"}
                fullWidth
                variant={"contained"}
                color={"primary"}
                >
                    Cadastrar
                </Button>
                </SignUpButtonContainer>


            </form>





        </InputsContainer>
    )
}

export default SignUpForm;