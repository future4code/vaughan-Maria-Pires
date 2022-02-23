import React from "react";
import { Button } from "@material-ui/core";
import useProtectedPage from "../../hooks/useProtectedPage";

const RecipesListPage = () => {
    useProtectedPage()
    return (
        < div >
            <h1>Lista de receitas</h1>
            <Button variant="contained" color="primary">Primary</Button>
        </div >
    )
}

export default RecipesListPage;