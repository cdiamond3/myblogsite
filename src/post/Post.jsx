import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img
                src="https://venngage-wordpress.s3.amazonaws.com/uploads/2020/10/Anatomy-of-the-Perfect-Blog-Post.png"
                alt=""
                className="postImg"
            />
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCategories"> Music </span>
                    <span className="postCategories"> Life </span>
                </div>
                <span className="postTitle">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
                <hr />
                <span className="postDate"> 1 Hour Ago </span>
            </div>
            <p className="postDescription">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Omnis, autem, nobis esse architecto deserunt molestiae officia culpa atque repudiandae ipsa placeat.
                Sint quas voluptates dolores quasi reprehenderit, possimus blanditiis recusandae?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Omnis, autem, nobis esse architecto deserunt molestiae officia culpa atque repudiandae ipsa placeat.
                Sint quas voluptates dolores quasi reprehenderit, possimus blanditiis recusandae?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Omnis, autem, nobis esse architecto deserunt molestiae officia culpa atque repudiandae ipsa placeat.
                Sint quas voluptates dolores quasi reprehenderit, possimus blanditiis recusandae?
            </p>
        </div>
    )
}
