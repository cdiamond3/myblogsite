import "./sidebar.css"

export default function SideBar() {
    return (
        <div className="sideBar">
            <div className="sideBarItem">
                <span className="sideBarTitle"> About Me </span>
                <img src="https://image.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg"
                    alt=""
                />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maxime odio recusandae debitis consequatur quasi nostrum architecto,
                ipsum vero explicabo, fugiat, earum repudiandae repellat aliquam temporibus deserunt delectus omnis doloremque et!
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle"> CATEGORIES </span>
                <ul className="sideBarList">
                    <li className="sideBarListItem"> Life </li>
                    <li className="sideBarListItem"> Food </li>
                    <li className="sideBarListItem"> Music</li>
                    <li className="sideBarListItem"> Fashion</li>
                    <li className="sideBarListItem"> Cinema </li>
                </ul>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle"> FOLLOW ME </span>
                <div className="sideBarSocial">
                    <i className="sideBarIcon fab fa-github"></i>
                    <i className="sideBarIcon fab fa-linkedin"></i>
                    <i className="sideBarIcon fab fa-instagram"></i>
                    <i className="sideBarIcon fab fa-medium"></i>
                </div>
            </div>
        </div>
    )
}
