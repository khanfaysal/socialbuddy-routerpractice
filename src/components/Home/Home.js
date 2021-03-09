import React, { useEffect, useState } from 'react';
import Post from '../Post/Post.js';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const url = `http://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
            <h2>This is Home</h2>
            <h3>Post Number is : {posts.length}</h3>
            {
                posts.map(post =><Post post ={post}></Post>)
            }
          
        </div>
    );
};

export default Home;