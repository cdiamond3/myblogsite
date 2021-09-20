import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSmall"> React & Node </span>
                <span className="headerTitleLarge"> Blog</span>
            </div>
            <img
                className="headerImg"
                src="https://blog.ease.com/wp-content/uploads/2018/03/alphabet-arts-and-crafts-blog-459688.jpg"
                alt=""
            />
        </div>
    )
}
