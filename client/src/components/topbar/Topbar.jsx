import "./topbar.css"

export default function Topbar() {
  return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        </div>
        <div className="topCenter">
            <div className="topList">
                <li className="topListItem">Home</li>
                <li className="topListItem">Affilate</li>
                <li className="topListItem">Contact</li>
                <li className="topListItem">Write</li>
                <li className="topListItem">Logout</li>
            </div>
        </div>
        <div className="topRight">
            <img src="https://picsum.photos/800" alt="" className="topImg" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
