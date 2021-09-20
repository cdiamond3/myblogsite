import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-github"></i>
                <i className="topIcon fab fa-linkedin"></i>
                <i className="topIcon fab fa-instagram"></i>
                <i className="topIcon fab fa-medium"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"> Home </li>
                    <li className="topListItem"> About</li>
                    <li className="topListItem"> Contact </li>
                    <li className="topListItem"> Write </li>
                    <li className="topListItem"> Logout </li>
                </ul>
            </div>
            <div className="topRight">

                <img
                    className="topImg"
                    src="https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg"
                    alt=""
                />
                <i class="topSearchIcon fas fa-search"></i>

            </div>
        </div>
    )
}
