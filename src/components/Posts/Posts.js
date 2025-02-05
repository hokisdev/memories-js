import React from "react";
import Post from "./Post/Post";
import * as styles from './styles'

import { useSelector } from "react-redux";

const Posts = () => {
    const posts = useSelector((state) => state.posts);

    console.log(posts);
    
    return(
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
            <Post />
            <Post />
        </>
    );
}

export default Posts;