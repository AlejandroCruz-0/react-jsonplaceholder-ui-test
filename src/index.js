import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/home/Home";
import Albums from "./components/Albums/Albums";
import Posts from "./components/posts/Posts";
import SinglePost from "./components/posts/SinglePost";
import MyNavbar from "./components/Navbar/MyNavbar";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

/* import MyNavbar from "./Navbar/MyNavbar";
import Posts from "posts/Posts";
import SinglePost from "posts/SinglePost" */ import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyNavbar />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />}></Route>
          <Route path="posts/:id" element={<SinglePost />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>NO HAY NADA ACA</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
