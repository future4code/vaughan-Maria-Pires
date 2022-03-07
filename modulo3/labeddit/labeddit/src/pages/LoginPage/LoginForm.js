import { Button, TextField } from "@material-ui/core";
import React from "react";
import { InputsContainer, SignInButtonContainer } from "./styled";
import useForm from "../../hooks/useForm";
import { login } from "../../services/access";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate)
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    type={"email"}
                    required
                />
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    type={"password"}
                    required
                />
                <SignInButtonContainer>
                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"} color={"primary"}
                    >Entrar
                    </Button>
                </SignInButtonContainer>

            </form>
        </InputsContainer>
    )
}

export default LoginForm;