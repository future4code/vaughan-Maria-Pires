import { Img1, PageHeader, Title } from "./styled";
import dragaoFogo from "../../img/dragaoFogo.png"

const Header = () => {
    return (
        <PageHeader>
            <Img1 src={dragaoFogo} />
            <Title>Lista de Dragões</Title>
        </PageHeader>
    )
}

export default Header;