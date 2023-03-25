import Header from "../../header/Header"
import Sidebar from "../../sidebar/Sidebar"
import Posts from "../../posts/Posts"
import "./home.css"

export default function Home() {
  return (
        <>
        <Header/>
    <div className="home">
        <Posts/>
        <Sidebar/>
    </div>
        </>
  )
}
