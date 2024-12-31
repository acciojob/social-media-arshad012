import React, { useEffect, useState, useContext } from "react";
// import regeneratorRuntime from 'regenerator-runtime'
import { RefreshContext } from "../Context/RefreshContext";
import { UsersPostsData } from "../Utils/Data";

const Notification = () => {
    const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(false);
    const {setRefreshButtonDisabled, clickCount} = useContext(RefreshContext);

    useEffect(() => {
        setRefreshButtonDisabled(false);
        
        return () => {
            setRefreshButtonDisabled(true);
        }
    },[])

    useEffect(() => {
        if(clickCount > 0) {
            // setLoading(true);
            // fetchNotification();
            getNotifications();
        }
    },[clickCount]);

    const getNotifications = () => {
        setData(UsersPostsData);
    }


    // const fetchNotification = async () => {
    //     try {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    //         const data = await res.json();
    //         setData(data);
    //         setLoading(false);
    //     } catch (error) {
    //         console.log(error);
    //         setLoading(false);
    //     }
    // }
    
    return (
        <div>
            <h1>Notification</h1>
            <div>
                {
                    data.map((user) => (
                        <div key={user.id}>User {user.id} says Hii..</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Notification;
