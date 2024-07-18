import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost } from "../redux/reducers/postsSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Posts = ({ userId }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);
  const profileData = useSelector((state) => state.profile.data);

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
                {post.userId === profileData._id && (
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
