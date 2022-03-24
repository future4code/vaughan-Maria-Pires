import * as React from 'react';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { RecipeCardContainer } from './styled';


const RecipeCard = (props) => {
    return (
        <RecipeCardContainer>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component={"img"}
                    alt={props.title}
                    height={"150px"}
                    image={props.image}
                    title={props.title}
                    onClick={props.onClick}
                    
                />
                <CardContent>
                    <Typography align='center'>
                        {props.title}
                    </Typography>
                </CardContent>
            </Card>
        </RecipeCardContainer>
    );
}

export default RecipeCard;