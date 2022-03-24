import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";


const PostPage = () => {
    useProtectedPage()
    return (
        <h1>Página do post!!!!!</h1>
    )
}

export default PostPage;