import styled from 'styled-components';


export const ScreenContainer = styled.div`
display: flex;
justify-content: center;
height: 100vh;
`

export const CardContainer = styled.div`
background-color: #ffe6e6;
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
margin-right: 25px;
`
export const CardContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const CardImage = styled.img`
border-radius: 50%;
`

