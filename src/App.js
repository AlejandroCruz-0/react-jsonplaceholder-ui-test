import "./App.css";

import { React, useEffect, useState } from "react";
import endpoints from "./components/endpoints";

function App() {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    const apiEndpointWithLimit = endpoints.Posts + '?_limit=5"';
    console.log(apiEndpointWithLimit);

    fetch(apiEndpointWithLimit)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    document.title = "react-jsonplaceholder-ui-test";
    console.log("useEffect starting");
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {posts?.map(({ id, title }) => (
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
