import React from "react";
import "../../../Shared/Button.scss";
import { useCreatepost } from "../hooks/createposthook";
import { useNavigate } from "react-router";
const Createpost = () => {
  const { caption, setcaption, image, setimage, createpost } = useCreatepost();
  const navigate =useNavigate()
  function sumbithandler(e) {
    e.preventDefault();
    try {
      createpost(caption, image);
    } catch (err) {
      throw err;
    }
    finally{
        setcaption('');
        setimage(null)
    }
    console.log(caption, image);
  }
  return (
    <div className="formcontainer">
      <form
        onSubmit={(e) => {
          sumbithandler(e);
        }}
      >
        <input
          type="file"
          placeholder="post img"
          onChange={(e) => setimage(e.target.files[0])}
        />
        {image && (
            <>
            <h1>{image.name}</h1>
            <img
              src={URL.createObjectURL(image)}
              style={{ width: "100%", marginTop: "10px" }}
            />
            
            </>
        )}
        <input
          type="text"
          placeholder="Enter your post caption"
          value={caption}
          onChange={(e) => {
            setcaption(e.target.value);
          }}
        />
        <button className="btn">Post</button>
      </form>

      <button className="btn" onClick={()=>{
        navigate('/')
      }}> back to posts</button>
    </div>
  );
};

export default Createpost;
