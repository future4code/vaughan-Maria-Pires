export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToSignUp = (navigate) => {
    navigate("/cadastro")
}

export const goToRecipesList = (navigate) => {
    navigate("/")
}

export const goToRecipeDetails = (navigate, id) => {
    navigate(`/detalhe/${id}`)
}

export const goToAddRecipes = (navigate) => {
    navigate("/adicionar-receita")
}
