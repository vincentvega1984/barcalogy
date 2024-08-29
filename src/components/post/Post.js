import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import './post.scss';

function Post (props) {
    const [height, setHeight] = useState(0);
    const elementRef = useRef(null);
    const intro = props.body.split(" ").splice(0, props.words).join(" ");

    useEffect(() => {
        setHeight(elementRef.current.offsetHeight);
    }, []);

    return (
        <div className="post">
            <div className="post__image">
                <img src={`images/news/news${Math.floor(Math.random()*6) + 1}.webp`} alt={props.title} />
            </div>
            <div className="post__title" ref={elementRef}>
                {props.title}
                {height}
            </div>
            <div className="post__intro">
                {intro}
                <Link to={`/post/${props.id}`}>Read more</Link>
            </div>
        </div>
    )
}

export default Post