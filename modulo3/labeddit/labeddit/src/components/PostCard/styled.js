import styled from "styled-components"

export const ScreenContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
margin-top: 40px;

`

export const PostContainer = styled.div`
width: 18rem;
min-height: 15rem;
height: max-content;
background-color: white;
display: flex;
justify-content: center;
flex-direction: column;
color: black;
margin-top: 20px;
border: 1px solid black;
`

export const PostHeader = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
`

export const PostBody = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
text-overflow: ellipsis;
height: 200px;

`
export const PostFooter = styled.div`
display: flex;
border: 1px solid black;
height: 35px;
`

export const commentCountDiv = styled.div`
display: flex;
margin-right: 100px;
`