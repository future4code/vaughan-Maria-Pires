import { Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { RecipeContainer, RecipeImage, ScreenContainer } from "./styled";

const RecipeDetailsPage = () => {
    useProtectedPage()
    const params = useParams()
    const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0]
    return (
        <ScreenContainer>
            {recipe &&
                <RecipeContainer>
                    <RecipeImage src={recipe.image} />
                    <h3>{recipe && recipe.title}</h3>
                    <Typography align={"center"}>{recipe.description}</Typography>
                </RecipeContainer>
            }
        </ScreenContainer>
    )
}

export default RecipeDetailsPage;