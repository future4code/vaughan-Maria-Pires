import styled from 'styled-components';

export const ScreenContainer = styled.div`
display: flex;
justify-content: center;
`

export const CardContainer = styled.div`
background-color: #f2ccff;
border-radius: 10px;
max-width: 350px;
position: absolute;
top: 50%;
width: 100%;
transform: translateY(-50%);

`
export const CardHeader = styled.div`
display: flex;
justify-content: space-between;
margin-left: 15px;
text-align: center;
`

export const CardMedia = styled.img`
width: 100%;
height: 250px;
`;

export const Text = styled.div`
margin-left: 15px;
`


export const CardFooter = styled.div`
height: 30px;
display: flex;
align-items: center;
justify-content: space-between;
margin: 10px 5px;
`
