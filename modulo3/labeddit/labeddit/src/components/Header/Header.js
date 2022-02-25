import * as React from 'react';
import { AppBar } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { StyledToolBar } from './styled';
import { goToFeed, goToLogin } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolBar>
          <Button onClick={() => goToFeed(navigate)}
          color="inherit">
            Labeddit
          </Button>
          <Button onClick={() => goToLogin(navigate)}
          color="inherit">Login</Button>
        </StyledToolBar>
      </AppBar>
    </Box>
  );
}
export default Header;