import { useEffect, useState } from "react";

import Post from "../post/Post";

import './posts.scss';

function Posts () {

    const INTRO_WORDS_LIMIT = 20
    const POSTS_PER_PAGE = 9

    const [news, setNews] = useState([]);
    const [nextLoad, setNextLoad] = useState(POSTS_PER_PAGE);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setNews(data);
            });
    }, []);

    function handleMore() {
        setNextLoad(nextLoad + POSTS_PER_PAGE)
    }

    const postsList = news?.slice(0, nextLoad)?.map((post) => 
        <Post key={post.id} body={post.body} title={post.title} id={post.id} words={INTRO_WORDS_LIMIT}/>
    )

    return (
        <>
            <div className="posts">
                {postsList}
            </div>
            <div className="posts__load-more">
                {nextLoad < news.length ?
                    <button className="btn-primary" onClick={handleMore}>Load more</button> :
                    null
                }
            </div>
        </>
    )
}

export default Posts