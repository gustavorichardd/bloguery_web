import React, { useState, useEffect } from 'react'
import './styles.css'
import api from '../../services/api'
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi'

export default function Home() {
 const [posts, setPosts] = useState([])

 async function loadPosts() {
  const response = await api.get("/posts/list");
  setPosts(response.data)
 }

 useEffect(() => {
  loadPosts();
 }, [])

 async function addUpVote(_id) {
  await api.put("/post/upvote", {
   headers: { _id }
  });
  loadPosts();

 }

 async function addDownVote(_id) {
  await api.put("/post/downvote", {
   headers: { _id }
  });
  loadPosts();
 }

 return (
  <div className="container">
   <div className="header">
    <h1>Bem vindo ao Bloguery!</h1>
   </div>

   <div className="body">
    <ul>
     {posts.map(post => (
      <li key={post._id}>
       <div className="posts">
        <div className="title">
         <p>{post.postTitle}</p>
        </div>
        <div className="text">
         <p>{post.postText}</p>
        </div>
        <div className="votes">
         <div className="upVotes">
          <p>{post.postUpVotes}</p>
          <button onClick={() => addUpVote(post._id)}>
           <FiThumbsUp size={15} color="#000" />
          </button>
         </div>
         <div className="downVotes">
          <p>{post.postDownVotes}</p>
          <button onClick={() => addDownVote(post._id)}>
           <FiThumbsDown size={15} color="#000" />
          </button>
         </div>
        </div>
       </div>
      </li>
     ))}
    </ul>
   </div>
  </div>
 )
}