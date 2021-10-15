import React, {useEffect, useState} from "react";

function PostDetail ({postId}){
    const[comments, setComments]= useState([]);
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response=>response.json())
        .then(comments=>setComments);
    }, []);

    const list= comments.map((comment)=>{
        return(
            <li key={comment.id}>
                <p>{comment.body}</p>
            </li>
        );
    });

    return(
        <ul>
            {list}
        </ul>
    );
}

export default PostDetail;