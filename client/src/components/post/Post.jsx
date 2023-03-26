import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img src="https://picsum.photos/700/" alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Affilate Network</span>
                <span className="postCat">Affilate Program</span>
            </div>
            <span className="postTitle">
                Lorem ipsum, dolor sit amet 
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nisi doloribus cumque veniam! Excepturi nisi, quae numquam nesciunt facilis soluta est dolores eius culpa dolor sit, amet consectetur adipisicing elit. Corporis nisi doloribus cumque veniam! Excepturi nisi, quae numquam nesciunt facilis soluta est dolores eius culpa dolor sit, amet consectetur adipisicing elit. Corporis nisi doloribus cumque veniam! Excepturi nisi, quae numquam nesciunt facilis soluta est dolores eius culpa ratione autem dicta quod maxime aut.</p>
    </div>
  )
}
