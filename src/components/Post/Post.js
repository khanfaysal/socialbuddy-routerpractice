import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const{id, title, body} = props.post;
    const history = useHistory();
    const showComments = id =>{
        const url = `post/${id}`;
        history.push(url);
    }
    return (
        <div>
            {/* <h2>This is post</h2> */}
            <h3>id:<strong>{id}</strong> title: {title}</h3>
            <p>{body}</p>
            <button onClick = {()=>showComments(id)}>show comments</button>

        </div>
    );
};

export default Post;