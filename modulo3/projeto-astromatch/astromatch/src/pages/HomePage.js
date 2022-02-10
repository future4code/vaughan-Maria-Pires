import ProfileCard from "../components/ProfileCard/ProfileCard";
import styled from "styled-components";

const CardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
border: 1px solid black;
width: 80vh;
margin: auto;
`

export default function HomePage(props) {
    return (
        <div>
        <CardContainer>
            <h1>Astromatch</h1>
                <button onClick={() => props.goToMatchesPage("matches")}>Ir para a página de matches</button>
                <ProfileCard/>
                </CardContainer>
                </div>
    
    )
}