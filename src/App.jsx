// import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Redirect from "./components/Redirect";
import Course from "./pages/Course";
import Community from "./pages/Community";
import Mentor from "./pages/Mentor";
import RoadMap from "./pages/RoadMap";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 1;
    // axios({
    //   method: "GET",
    //   url: "https://jsonplaceholder.typicode.com/photos",
    // }).then((response) => setPosts(response.data));
    // 2.
    // axios
    //   .get("https://jsonplaceholder.typicode.com/photos")
    //   .then((response) => setPosts(response.data));
    // 3.
    // try {
    //   const response = await axios.get(
    //     "https://jsonplaceholder.typicode.com/photos"
    //   );
    //   setPosts(response.data);
    // } catch (error) {
    //   console.log(error);
    // }
  });

  return (
    <>
      {/* <div>{posts.length}</div> 
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oauth" element={<Redirect />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/roadmaps" element={<RoadMap />} />
        <Route path="/mentors" element={<Mentor />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </>
  );
}

export default App;
