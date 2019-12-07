import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { database } from './firebase'
import './App.css';

function App() {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    database.ref("posts/1").set({ title: "hackathon1"})
    database.ref("posts/2").set({ title: "hackathon2"})
    database.ref("posts").on("value", snapshot => setPosts(snapshot.val()))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {Object.keys(posts).map((key) => <div key={posts[key].title}>{posts[key].title}</div>)}
      </header>
    </div>
  );
}

export default App;
