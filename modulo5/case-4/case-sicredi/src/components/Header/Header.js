import { Button, Img1, PageHeader, Title } from "./styled";
import dragaoFogo from "../../img/dragaoFogo.png"
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../../router/coordinator";

const Header = () => {
    const { signOut } = useAuth()
    const navigate = useNavigate()
    return (
        <PageHeader>
            <Img1 src={dragaoFogo} />
            <Title>Lista de Dragões</Title>
            <Button onClick={() => [signOut(), goToLoginPage(navigate)]}>Logout</Button>
        </PageHeader>
    )
}

export default Header;