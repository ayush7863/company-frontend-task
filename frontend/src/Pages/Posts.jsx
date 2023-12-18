import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/posts/actions";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Posts = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, posts } = useSelector((store) => {
    return {
      isLoading: store.postReducer.isLoading,
      isError: store.postReducer.isError,
      posts: store.postReducer.posts,
    };
  }, shallowEqual);

  useEffect(() => {
    dispatch(getData);
  }, []);
  return (
    <div>
      <Navbar />
      {isLoading && <p style={{ marginTop: "100px" }}>Loading...</p>}
      {isError && <p style={{ marginTop: "100px" }}> Error fetching posts.</p>}
      {posts && (
        <Grid container spacing={2} mt={"100px"}>
          {posts.map((post) => (
            <Grid item key={post.id} xs={12} sm={6} md={4}>
              <Link to={`/posts/${post.id}`}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s",
                    ":hover": {
                      transform: "scale(1.05)",
                    },
                    cursor: "pointer",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {post.title}
                    </Typography>
                    <Typography color="text.secondary">{post.body}</Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Posts;
