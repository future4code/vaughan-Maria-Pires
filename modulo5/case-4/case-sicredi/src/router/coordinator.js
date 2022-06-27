export const goToDetailsPage = (navigate, id) => {
    navigate(`/detalhe/${id}`)
}

export const goToSignUpPage = (navigate) => {
    navigate("/cadastro")
}

export const goToSignUpDragonPage = (navigate) => {
    navigate("/cadastro-dragao")
}

export const goToLoginPage = (navigate) => {
    navigate("login")
}

export const goToDragonsListPage = (navigate) => {
    navigate("/")
}

export const goToEditPage = (navigate, id) => {
    navigate(`/editar-dragao/${id}`)
}