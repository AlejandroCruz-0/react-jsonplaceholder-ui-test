import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import endpoints from "../endpoints";

const SinglePost = () => {
  const [Post, setPost] = useState({});
  let params = useParams();

  const getData = (postId) => {
    /*eslint quotes: ["error", "double", { "allowTemplateLiterals": true }]*/
    const apiEndpoint = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    console.log(apiEndpoint);

    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData(params.id);
  }, [params.id]);

  return (
    <div>
      <p>userId: {Post.userId}</p>
      <p>Id: {Post.id}</p>
      <p>title: {Post.title}</p>
      <p>body: {Post.body}</p>
    </div>
  );
};

export default SinglePost;
