import React, { useState } from "react";
import styles from './Post.module.css';
import { Link } from "react-router-dom";

const Post = ({data, handleClick}) => {
    const {id, title, body} = data;
    const [thumsUp, setThumsUp] = useState(0);
    const [fire, setFire] = useState(0);
    const [heart, setHeart] = useState(0);
    const [rocket, setRocket] = useState(0);
    const [eyes, setEyes] = useState(0);

    return (
        <div className={styles.post}>
            <h2>{body}</h2>
            <p>By user {id}</p>
            <p>{title}</p>
            <div className={styles.reaction_section}>
                <button onClick={() => setThumsUp(thumsUp + 1)}>👍 {thumsUp}</button>
                <button onClick={() => setFire(fire + 1)}>🎉 {fire}</button>
                <button onClick={() => setHeart(heart + 1)}>❤️ {heart}</button>
                <button onClick={() => setRocket(rocket + 1)}>🚀 {rocket}</button>
                <button onClick={() => setEyes(eyes + 1)}>👀 {eyes}</button>
            </div>
            <Link to={'/posts/'+id}>
                <button onClick={() => handleClick(id)} style={{marginBlock:'20px'}}>View Post</button>
            </Link>
        </div>
    )
}

export default Post;