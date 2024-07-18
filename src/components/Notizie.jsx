import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost } from "../redux/reducers/postSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PostForm from "./PostForm";

const Posts = ({ userId }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  return (
    <div>
      <PostForm></PostForm>

      {postStatus === "loading" && <div>Loading...</div>}
      {postStatus === "failed" && <div>{error}</div>}
      {postStatus === "succeeded" &&
        posts
          .slice()
          .reverse()
          .map((post) => (
            <Card key={post._id}>
              <Card.Body>
                <Card.Title>{post.username}</Card.Title>
                <Card.Text>{post.text}</Card.Text>
                <Card.Text>Created at: {new Date(post.createdAt).toLocaleString()} </Card.Text>
                {post.userId === userId && (
                  <Button variant="danger" onClick={() => handleDelete(post._id)}>
                    Delete
                  </Button>
                )}
              </Card.Body>
            </Card>
          ))}
    </div>
  );
};

export default Posts;
