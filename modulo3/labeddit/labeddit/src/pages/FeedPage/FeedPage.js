import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "../../components/PostCard/PostCard";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { goToPost } from "../../routes/coordinator";


 
const FeedPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const postsList = useRequestData([], `${BASE_URL}/posts`)
    console.log(postsList)

    const onClickCard = (id) => {
        goToPost(navigate, id)
    }
    
    const postsCard = postsList.map((posts) => {
        return (
            <Button><PostCard
            key={posts.id}
            username={posts.username}
            body={posts.body}
            voteSum={posts.voteSum}
            commentCount={posts.commentCount}
            onClick={() => onClickCard(posts.id)}
            />
            </Button>
        )
    })
    return(
        <div>
            {postsCard}
        </div>
    )
}

export default FeedPage;