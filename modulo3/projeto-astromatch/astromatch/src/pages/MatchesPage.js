import MatchesList from "../components/MatchesList/MatchesList";

export default function MatchesPage(props){
    return(
        <div>
            <h1>Página de matches</h1>
            <button onClick={() => props.goBackToHomePage("home")}>Voltar para a home</button>
            <MatchesList></MatchesList>
        </div>
    )
}