import { Fab } from "@material-ui/core"
import styled from "styled-components"

export const RecipeCardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 15vw;
margin-top: 8vh;
margin-left: 2vh;
max-width: 600px;
min-width: 300px
`

export const RecipeListContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 30px;
justify-content: center;

`

export const AddRecipeButton = styled(Fab)`
position: fixed !important;
right: 20px;
bottom: 20px;
z-index: 3;
`