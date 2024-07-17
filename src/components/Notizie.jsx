import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/reducers/postSlice";
import Post from "./Post";
import PostForm from "./PostForm";
import { fetchProfile } from "../redux/reducers/profileSlice";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);
  const profileStatus = useSelector((state) => state.profile.status);
  const profileData = useSelector((state) => state.profile.data);

  useEffect(() => {
    if (profileStatus === "idle") {
      dispatch(fetchProfile());
    }
  }, [profileStatus, dispatch]);

  useEffect(() => {
    if (status === "idle" && profileData) {
      dispatch(fetchPosts());
    }
  }, [status, dispatch, profileData]);

  return (
    <div>
      <h1>Notizie</h1>
      {profileData && <PostForm />}
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>{error}</p>}
      {status === "succeeded" && (
        <div>
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
