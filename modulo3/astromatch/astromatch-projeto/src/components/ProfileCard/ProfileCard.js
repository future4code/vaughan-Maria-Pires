import { Button } from '@material-ui/core';
import People from '@material-ui/icons/People';
import { useNavigate } from 'react-router-dom';
import { CardContainer, CardFooter, CardHeader, CardMedia, ScreenContainer } from "./styled";
import { goToMatchesPage } from '../../routes/coordinator';
import { Close, Favorite } from '@material-ui/icons';
import { Text } from './styled';


const ProfileCard = (props) => {
    const navigate = useNavigate()
    return (
        <ScreenContainer>
            <CardContainer>
                <CardHeader>
                    <h2>Astromatch</h2>
                    <Button onClick={() => goToMatchesPage(navigate)}><People /></Button>
                </CardHeader>
                <hr/>
                <CardMedia
                    src={props.prof.photo}
                />
                <Text>
                    <h3>{props.prof.name}, {props.prof.age}</h3>
                    <p>{props.prof.bio}</p>
                </Text>
                <CardFooter>
                    <Button onClick={props.dislike}>
                        <Close />
                    </Button>
                    <Button onClick={props.like}>
                        <Favorite />
                    </Button>
                </CardFooter>
            </CardContainer>
        </ScreenContainer>
    )
}


export default ProfileCard;