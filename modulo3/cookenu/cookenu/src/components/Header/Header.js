import React from 'react';
import { AppBar } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { StyledToolbar } from './styled';
import { goToLogin, goToRecipesList } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';



const Header = ({rightButtonText, setRightButtonText}) => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if(token){
            logout()
            setRightButtonText("Login")
            goToLogin(navigate)
        } else {
            goToLogin(navigate)
        }
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <StyledToolbar>
                    <Button color="inherit" onClick={() => goToRecipesList(navigate)}>Cookenu</Button>
                    <Button color="inherit" onClick={rightButtonAction}>{rightButtonText}</Button>
                </StyledToolbar>
            </AppBar>
        </Box >
    );
}
export default Header;