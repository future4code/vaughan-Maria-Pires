import React from 'react';
import { PostBody, PostContainer, PostHeader, PostFooter, ScreenContainer, commentCountDiv } from './styled';
import { ArrowUpward } from '@material-ui/icons';
import { ArrowDownward } from '@material-ui/icons';

const PostCard = (props) => {
    return (
        <ScreenContainer>
            <PostContainer>
                <PostHeader>
                    {props.username}
                </PostHeader>
                <PostBody>
                    {props.body}
                </PostBody>
                <PostFooter>
                    <ArrowUpward />
                    {props.voteSum}
                    <ArrowDownward />
                </PostFooter>
            </PostContainer>
        </ScreenContainer>
    );
}

export default PostCard;