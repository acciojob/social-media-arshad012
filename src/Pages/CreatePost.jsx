import React, { useState } from "react";

const CreatePost = ({addNewPost}) => {
    const [formData, setFormData] = useState({
        title:'',
        body:''
    })

    const handleChange = (e) => {
        const {value, name} = e.target;
        setFormData((prev) => ({...prev, [name]:value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newPostId = (Math.floor(Math.random()*100)+formData.title);
        addNewPost(({...formData, id:newPostId}));
    }

    const authors = ['Arshad', 'Fareed', 'Ashar', 'Suhail', 'Azam'];

    return (
        <div>
            <h1>Add a New Post</h1>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="postTitle">Post title: </label>
                    <input id="postTitle" name="title" type="text" placeholder="What's on your mind?" required onChange={handleChange} />
                    <label htmlFor="postAuthor">Author</label>
                    <select name="postAuthor" id="postAuthor">
                        <option selected disabled>Select Author</option>
                        {
                            authors.map((author, index) => <option key={index} value={author}>{author}</option>)
                        }
                    </select>
                    <label htmlFor="postContent"></label>
                    <textarea name="body" id="postContent" onChange={handleChange} required></textarea>
                    <button type="submit">Save Post</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost;