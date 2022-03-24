import { Button, TextField } from "@material-ui/core"
import { useNavigate } from "react-router-dom"
import useForm from "../../hooks/useForm"
import { signUp } from "../../services/access"
import { InputsContainer, SignUpButtonContainer } from "./styled"


const SignUpForm = () => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({ username: "", email: "", password: "" })
    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate)
        
    }
    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"username"}
                    value={form.username}
                    onChange={onChange}
                    label={"Nome de usuário"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
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
                    type={"email"}
                />
                <TextField
                    name={"password"}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    type={"password"}
                />
                <SignUpButtonContainer>
                    <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"} color={"primary"}
                    >
                        Cadastrar
                    </Button>
                </SignUpButtonContainer>

            </form>
        </InputsContainer>
    )
}

export default SignUpForm;