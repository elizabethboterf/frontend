import React, {useState, useEffect} from "react";
import PostDetail from "./PostDetail";

function App() {
  const [posts, setPosts]= useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then(response=>response.json())
      .then(data=>setPosts(data));
  }, []);

  const initailDisplay=[];
  posts.forEach((post)=>{
    const newPost={
      ...post,
      display: false
    };
    initailDisplay.push(newPost);
  });
  setPosts(initailDisplay);

  function handleClick (event, element){
    event.preventDefault();
    const id = element.value;
    const postFound= posts.map((post)=>{
      if(post.id===id){
        const toggle=!post.display;
        return({
          ...post,
          display: toggle
        });
      }
      return post;
    });
  setPosts(postFound);
  }

  const list = posts.map((post)=>{
    return(
      <li key={post.id}>
        <p>post.title</p>
        <button type="button" value={post.id} onClick={handleClick(this)}>post.body</button>
        {post.display ? (<PostDetail postId={post.id} />) : (null)}
      </li>
    );
  });

  return (
    <div className="App">
      <ul>{list}</ul>
    </div>
  );
}

export default App;
