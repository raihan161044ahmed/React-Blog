import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://picsum.photos/600/500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          dignissimos dolores dicta, temporibus quasi! Consectetur.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Raihan</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquam
          ducimus hic a quia nam optio nisi harum quos, culpa soluta doloribus
          perferendis amet consectetur adipisicing elit. Ab aliquam ducimus hic
          a quia nam optio nisi harum quos, culpa soluta doloribus perferendis
          amet consectetur adipisicing elit. Ab aliquam ducimus hic a quia nam
          optio nisi harum quos, culpa soluta doloribus perferendis amet
          consectetur adipisamet consectetur adipisicing elit. Ab aliquam
          ducimus hic a quia nam optio nisi harum quos, culpa soluta doloribus
          perferendis amet consectetur adipisicing elit. Ab aliquam ducimus hic
          a quia nam optio nisi harum quos, culpa soluta doloribus perferendis
          amet consectetur adipisicing elit. Ab aliquam ducimus hic a quia nam
          optio nisi harum quos, culpa soluta doloribus perferendis icing elit.
          Ab aliquam ducimus hic a quia nam optio nisi harum quos, culpa soluta
          doloribus perferendis amet consectetur adipisicing elit. Ab aliquam
          ducimus hic a quia nam optio nisi harum quos, culpa soluta doloribus
          perferendis eum praesentium quas molestiae velit rerum beatae.
        </p>
      </div>
    </div>
  );
}
