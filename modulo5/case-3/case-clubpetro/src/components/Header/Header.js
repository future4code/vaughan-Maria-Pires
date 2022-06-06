import { GloboImg, LogoTitle, SiteHeader } from "./styled";
import globo from "../../img/globo.png"

const Header = () => {
    return(
        <SiteHeader>
            <GloboImg src={globo}/>
            <LogoTitle>Lugares para conhecer</LogoTitle>
        </SiteHeader>
    )
}
//creditos da imagem
//<a href="https://www.flaticon.com/br/icones-gratis/globo" title="globo ícones">Globo ícones criados por Freepik - Flaticon</a>

export default Header;