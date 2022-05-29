import styled from "styled-components";

export const MoviesContainer = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
@media(max-width: 600px){
grid-template-columns: repeat(2, 1fr);
} 
`

export const PaginationDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;

`