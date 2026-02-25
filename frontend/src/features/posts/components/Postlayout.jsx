import '../style/Postlayout.scss';
import "remixicon/fonts/remixicon.css";

const Postlayout = ({user,post}) => {    
  const likes = Math.floor(Math.random() * 10000) + 1;
  return (
    <div className="insta-post">
      <div className="insta-post__header">
        <div className="insta-post__user">
          <img src={user.profilepic} />
          <span>{user.username}</span>
        </div>
        <i className="ri-more-2-line"></i>
      </div>
      <img
        className="insta-post__image"
        src={post.img_url}
      />
      <div className="insta-post__actions">
        <div>
          <i className="ri-heart-line"></i>
          <i className="ri-chat-3-line"></i>
          <i className="ri-send-plane-line"></i>
        </div>

        <i className="ri-bookmark-line"></i>
      </div>

      <div className="insta-post__likes">{likes} likes</div>

      <div className="insta-post__caption">
        <b>{user.username}</b> My Instagram Clone 🚀
      </div>

      <div className="insta-post__time">2 HOURS AGO</div>

      <div className="insta-post__comment">
        <input placeholder="Add a comment…" />
        <button>Post</button>
      </div>

    </div>
  );
};

export default Postlayout;