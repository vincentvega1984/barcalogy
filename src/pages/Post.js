import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Post () {
    const {postId} = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setPost(data);
            });
    }, [postId]);

    return (
        <>
            <h1 className="page-title">{post.title}</h1>
            <p>{post.body}</p>
        </>
    )
}

export default Post