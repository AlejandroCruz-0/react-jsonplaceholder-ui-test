import "./App.css";

import { React, useEffect, useState } from "react";

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    document.title = "react-jsonplaceholder-ui-test";

    let update = true;

    if (update) {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then((response) => response.json())
        .then((data) => {
          setPost(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

    return () => {
      update = false;
    };
  });

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            post?.map(({ id, title }) => (
              <li key={id}>
                <h3>{title}</h3>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
