import React, {useEffect, useState} from 'react';
// import regeneratorRuntime from "regenerator-runtime";
import { useParams } from 'react-router-dom';
import { UsersPostsData } from '../Utils/Data';

const UserPosts = () => {
    const [data, setData] = useState([]);
    const {id} = useParams();
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true);
    //     fetchSingleUser(id);
    // },[])

    // const fetchSingleUser = async (id) => {
    //     try {
    //         const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    //         const data = await res.json();
    //         const allPosts = data.title.split(' ');
    //         setLoading(false);
    //         setData(allPosts);
    //     } catch (error) {
    //         console.log('error:', error);
    //         setLoading(false);
    //     }
    // }

    useEffect(() => {
        getUser();
    },[]);

    const getUser = () => {
        let user;
        for(let el of UsersPostsData) {
            if(el.id == id) {
                user = el;
                break;
            }
        }

        let data = user.title.split(' ');
        setData(data);
    }

    return (
        <>
            <h1>User {id} posts</h1>
            <ul>
                {
                    data.map((post, index) => <li key={index}>{post}</li>)
                }
            </ul>
        </>
    )
}

export default UserPosts;