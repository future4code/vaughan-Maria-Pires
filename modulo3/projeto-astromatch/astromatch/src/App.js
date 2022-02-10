import React from "react";
import HomePage from "./pages/HomePage";
import MatchesPage from "./pages/MatchesPage";


export default class App extends React.Component{
  state = {
    currentScreen: "home"
  }

  choosePage = () => {
    switch(this.state.currentScreen){
      case "home":
        return <HomePage goToMatchesPage = {this.changePage}/>
      case "matches":
        return <MatchesPage goBackToHomePage = {this.changePage}/>
      default:
        return <HomePage/>
    }
  }

  changePage = (pageName) => {
    this.setState({currentScreen: pageName})
  }

  render(){
    return(
      <div>
        {this.choosePage()}
      </div>
    )
  }
}

