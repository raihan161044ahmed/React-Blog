import "./write.css";

export default function Write() {
  return (
    <div className="write">
        <img src="https://picsum.photos/900/600" alt="" className="writeImg" />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell us your story....."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
