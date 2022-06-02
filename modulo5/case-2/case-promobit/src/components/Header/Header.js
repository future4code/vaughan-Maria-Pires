import { Button } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../Router/coordinator";
import { HeaderTitle, TMDBHeader, TMDBShape } from "./styled";



const Header = () => {
    const navigate = useNavigate()
    return(
        <>
        <TMDBHeader>
            <Button onClick={() => goToHomePage(navigate)}><HeaderTitle>TMDB</HeaderTitle></Button>
            <TMDBShape/>
        </TMDBHeader>
        </>
        

    )
}

export default Header;