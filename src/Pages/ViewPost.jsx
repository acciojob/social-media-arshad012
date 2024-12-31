import React, { useEffect, useState } from "react";
import { UsersPostsData } from "../Utils/Data";
import { useParams } from "react-router-dom";
import Post from "../components/Post";

const ViewPost = () => {
    const [post, setPost] = useState({});
    const {postId} = useParams();
    
    useEffect(() => {
        let clickedPost;
        for(let el of UsersPostsData) {
            if(el.id == postId) {
                clickedPost = el;
                break;
            }
        }

        setPost(clickedPost);
    }, []);

    const handleClick = (id) => {
        console.log('clicked in view post page',id);
    }

    // console.log(post);

    return (
        <div>
            <h1>View Post</h1>
            <Post data={post} handleClick={handleClick} />
        </div>
    )
}

export default ViewPost;