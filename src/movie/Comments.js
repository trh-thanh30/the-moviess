import React, { useEffect, useState } from "react";
import heartRed from "../assets/image/heart-red.svg";
import heart from "../assets/image/heart-white.svg";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

const Comments = () => {
  const fakeAPI = [
    {
      id: 4,
      image:
        "https://yt3.googleusercontent.com/fMx4Byd097J-seUkhanyC6RUXYNuUvnZnh27hS-IVd7sHDLfGYsGk4wJnRyGgi6glP7p8lsbmg=s900-c-k-c0x00ffffff-no-rj",
      name: "EM CHE",
      comment: "Phim da khoc toi rat hay",
      liked: false,
      date: new Date().toLocaleDateString() + "",
    },
  ];
  const [loading, setLoading] = useState(false);
  const [commentAPI, setCommentAPI] = useState(fakeAPI);
  const [visibleComments, setVisibleComments] = useState(5);
  const handLiked = (photoId) => {
    const updateArray = commentAPI.map((liked) => {
      if (liked.id === photoId) {
        return { ...liked, liked: !liked.liked };
      }
      return liked;
    });
    setCommentAPI(updateArray);
    localStorage.setItem("fakeAPI", JSON.stringify(updateArray));
    // localStorage.setItem("liked", JSON.getItem(updateArray));
  };

  const [user, setUser] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    const unsubscrie = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscrie;
  }, []);

  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const handleSubmitComment = () => {
    if (newComment.trim() !== "") {
      setLoading(true);
      const date = new Date().toLocaleDateString() + "";
      const newCommentObject = {
        id: comments.length + 1,
        image: user
          ? "https://inkythuatso.com/uploads/thumbnails/800/2023/03/6-anh-dai-dien-trang-inkythuatso-03-15-26-36.jpg"
          : "https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/anonymous-512.png",
        name: user ? user.displayName : "Anonymous",
        comment: newComment,
        liked: false,
        date: date,
      };
      setLoading(false);
      setComments([...comments, newCommentObject]);
      setCommentAPI([...commentAPI, newCommentObject]);
      toast.success("Successful response !");
      const updatedFakeAPI = [...commentAPI, newCommentObject];
      localStorage.setItem("fakeAPI", JSON.stringify(updatedFakeAPI));
      setNewComment("");
    }
  };
  useEffect(() => {
    const storedFakeAPI = JSON.parse(localStorage.getItem("fakeAPI"));
    if (storedFakeAPI) {
      setCommentAPI(storedFakeAPI);
    }
  }, []);
  const handleLoadMore = () => {
    setLoading(true);
    setVisibleComments((prev) => prev + 5);
    setLoading(false);
  };
  return (
    <div className="mt-8 md:mt-12">
      <h1 className="mb-3 text-base font-semibold uppercase md:mb-8 md:text-xl">
        Comments
      </h1>
      <div className="mb-3 text-base font-medium">
        {user ? (
          <>
            <strong className="name__user">{user.displayName}</strong>
          </>
        ) : (
          <>
            <div className="flex items-center gap-x-4">
              <p className="text-lg font-semibold text-slate-500">Anmonymus</p>
              <NavLink
                to={"/sign-up"}
                className="p-2 text-sm font-medium text-green-500 rounded-lg md:text-base bg-green-50">
                Sign Up
              </NavLink>
            </div>
          </>
        )}
      </div>
      <div className="flex items-center gap-x-3">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          type="text"
          placeholder="Write your comments here....."
          className="w-[816px] md:p-4 p-2 border border-green-500 rounded-lg outline-none text-slate-500 md:text-base text-xs bg-green-50"
        />
        <button
          onClick={handleSubmitComment}
          className="p-2 text-white bg-green-500 rounded-lg md:p-4">
          {loading ? <div className="loader"></div> : "SEND"}
        </button>
      </div>
      {commentAPI.length > 0 &&
        commentAPI.slice(0, visibleComments).map((item) => (
          <div
            key={item.id}
            className="flex lg:mt-4 md:mt-3 mt-2 gap-x-2  xl:w-[80%] lg:w-[90%] md:w-[100%] comment_user p-2">
            <img
              src={item.image}
              alt=""
              className="md:w-[40px] rounded-full md:h-[42px] h-[24px]"
            />
            <div className="flex-col felx gap-y-2">
              <h3 className="text-xs font-semibold md:text-sm lg:text-base">
                {item.name}
              </h3>
              <p className="text-xs md:text-sm lg:text-base">{item.date}</p>
              <p className="text-xs md:text-sm lg:text-base">{item.comment}</p>
              <button
                className="mt-1 cursor-pointer"
                onClick={() => handLiked(item.id)}>
                {item.liked ? (
                  <img className="md:w-[20px] w-[14px]" src={heartRed} alt="" />
                ) : (
                  <img className="md:w-[20px] w-[14px]" src={heart} alt="" />
                )}
              </button>
            </div>
          </div>
        ))}
      {visibleComments < commentAPI.length && (
        <button
          onClick={handleLoadMore}
          className="block p-2 mx-auto mt-5 text-sm text-white uppercase bg-green-500 rounded-lg md:p-3 md:text-base">
          {loading ? <div className="loader"></div> : "Load More"}
        </button>
      )}
    </div>
  );
};

export default Comments;
