import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";



const AddRecipesPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1>Página de adicionar receitas</h1>



        </div>
    )
}

export default AddRecipesPage;