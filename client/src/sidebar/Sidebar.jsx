import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img src="http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_brown.png" alt=""/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, perferendis odio! Delectus, neque similique unde commodi tenetur aliquid! </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Affilate Network</li>
                <li className="sidebarListItem">Affilate Program</li>         
            </ul>
        </div>
    </div>
  )
}
