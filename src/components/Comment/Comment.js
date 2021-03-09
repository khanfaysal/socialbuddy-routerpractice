import React from 'react';

const Comment = (props) => {
    const{email, postId} = props.comment;
    return (
        <p>
            {/* <h5>user email : {comment.email}</h5>
            <h5>user postId : {comment.postId}</h5> */}
            {email}: {postId}
        </p>
    );
};

export default Comment;