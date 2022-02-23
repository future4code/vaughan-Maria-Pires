import * as React from 'react';
import { AppBar } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { StyledToolbar } from './styled';
import { goToLogin, goToRecipesList } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <StyledToolbar>
                    <Button color="inherit" onClick={() => goToRecipesList(navigate)}>Cookenu</Button>
                    <Button color="inherit" onClick={() => goToLogin(navigate)}>Login</Button>
                </StyledToolbar>
            </AppBar>
        </Box >
    );
}
export default Header;