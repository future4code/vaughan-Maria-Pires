import { Button, TextField } from "@material-ui/core"
import useForm from "../../hooks/useForm"
import { createRecipe } from "../../services/recipe";
import { AddRecipesButtonContainer, InputsContainer, ScreenContainer } from "./styled";




const AddRecipesForm = () => {
    const [form, onChange, clear] = useForm({ title: "", description: "", image: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        createRecipe(form, clear)
        
    }

    return (
        <form onSubmit={onSubmitForm}>
            <ScreenContainer>
                <InputsContainer>
                    <TextField
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        label={"Título"}
                        variant={"outlined"}
                        fullWidth
                        required
                        autoFocus
                        margin={"normal"}
                    />
                    <TextField
                        name={"description"}
                        value={form.description}
                        onChange={onChange}
                        label={"Descrição"}
                        variant={"outlined"}
                        fullWidth
                        required
                        autoFocus
                        margin={"normal"}
                    />
                    <TextField
                        name={"image"}
                        value={form.image}
                        onChange={onChange}
                        label={"Imagem"}
                        variant={"outlined"}
                        fullWidth
                        required
                        autoFocus
                        margin={"normal"}
                    />
                    <AddRecipesButtonContainer>
                        <Button
                            color={"primary"}
                            variant={"contained"}
                            type={"submit"}
                            fullWidth>
                            Adicionar receita
                        </Button>
                    </AddRecipesButtonContainer>
                </InputsContainer>
            </ScreenContainer>
        </form>
    )
}

export default AddRecipesForm;