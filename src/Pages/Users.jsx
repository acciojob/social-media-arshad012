import React, { useEffect, useState } from "react";
import regeneratorRuntime from "regenerator-runtime";
import { Link } from 'react-router-dom';
import { UsersPostsData } from "../Utils/Data";

const Users = () => {
    const [data, setData] = useState(UsersPostsData);
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true);
    //     fetchUsers();
    // },[])

    // const fetchUsers = async () => {
    //     try {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    //         const data = await res.json();
    //         setLoading(false);
    //         setData(data);
    //     } catch (error) {
    //         console.log('error:', error);
    //         setLoading(false);
    //     }
    // }
    
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {
                    data.map((user) => <li key={user.id}><Link to={'/users/'+user.id}>user {user.id}</Link></li>)
                }
            </ul>
        </div>
    )
}

export default Users;