import { Button, Img, ScreenContainer } from "./styled";
import computer from "../../img/computer.png";
import { useNavigate } from "react-router-dom";
import { goToDragonsListPage } from "../../router/coordinator";


const ErrorPage = () => {
    const navigate = useNavigate()
    return(
        <ScreenContainer>
            <h2>A página que você tentou acessar não existe :-(</h2>
        <Img src={computer}/>
        <Button onClick={() => goToDragonsListPage(navigate)}>Voltar para a home</Button>
        </ScreenContainer>
    )
}

export default ErrorPage;