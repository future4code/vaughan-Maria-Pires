import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { AddRecipeButton, RecipeListContainer } from "../../components/RecipeCard/styled";
import { goToAddRecipes } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { goToRecipeDetails } from "../../routes/coordinator";

const RecipesListPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)

    const onClickCard = (id) => {
        goToRecipeDetails(navigate, id)
    }

    const recipeCards = recipes.map((recipe) => {
        return <Button><RecipeCard
            key={recipe.recipe_id}
            title={recipe.title}
            image={recipe.image}
            onClick={() => onClickCard(recipe.recipe_id)}
        />
        </Button>
    })
    return (
        <RecipeListContainer>
            {recipeCards}
            <AddRecipeButton
            color={"primary"}
            onClick={() => goToAddRecipes(navigate)}
            >
            <big><big><big><big>+</big></big></big></big>
            </AddRecipeButton>
        </RecipeListContainer>
    )
}

export default RecipesListPage;