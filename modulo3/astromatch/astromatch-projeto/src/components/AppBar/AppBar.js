import { Button } from '@material-ui/core';
import { PeopleAlt } from '@material-ui/icons';
import React from 'react';
import { AppBarContainer, H2} from './styled';

const AppBar = () => {
    return (
        <AppBarContainer>
            <H2>AstroMatch</H2>
                <Button><PeopleAlt fontSize='large' /></Button>
        </AppBarContainer>
    )
}

export default AppBar;