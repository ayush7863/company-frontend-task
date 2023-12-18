import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import axios from "axios";

// Import your default image

const styles = {
  container: {
    textAlign: "center",
  },
  postContainer: {
    maxWidth: "600px",
    margin: "100px auto",
    background: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "auto",
    marginBottom: "20px",
    borderRadius: "8px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
  },
  body: {
    fontSize: "16px",
    color: "#555",
  },
};

const SinglePost = () => {
  const { postID } = useParams();
  const [card, setCard] = useState({});

  const getData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postID}`)
      .then((res) => {
        setCard(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={styles.container}>
      <Navbar />
      {Object.keys(card).length > 0 && (
        <div style={styles.postContainer}>
          {/* Display default image */}
          <img
            src="https://images.unsplash.com/photo-1498629718354-908b63db7fb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVtbXklMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" // Use card.imageUrl if available, otherwise use defaultImage
            alt="Post"
            style={styles.image}
          />

          <h1 style={styles.title}>{card.title}</h1>
          <p style={styles.body}>{card.body}</p>
        </div>
      )}
    </div>
  );
};

export default SinglePost;
