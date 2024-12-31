import React, { useEffect, useState } from "react";
import regeneratorRuntime from "regenerator-runtime";
import styles from './Posts.module.css';
import Post from "../components/Post";
import CreatePost from "./CreatePost";
import { UsersPostsData } from '../Utils/Data';

const Posts = () => {
    const [data, setData] = useState(UsersPostsData);
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
        // setLoading(true);
        // fetchPosts();
    // },[])

    // const fetchPosts = async () => {
    //     try {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    //         const data = await res.json();
    //         setLoading(false);
    //         setData(data.reverse());
    //     } catch (error) {
    //         setLoading(false);
    //         console.log('error:', error);
    //     }
    // }


    const addNewPost = (newPost) => {
        setData([newPost, ...data]);
    }

    const handleClick = (id) => {
        console.log('clicked in Posts page',id);
    }
    
    return (
        <div className='posts-list'>
            <CreatePost addNewPost={addNewPost} />
            <div>
                {
                    data.map((post) => (<Post key={post.id} data={post} handleClick={handleClick} />))
                }
            </div>
        </div>
    )
}

export default Posts;