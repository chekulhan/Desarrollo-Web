import React, { useState } from 'react';

const FetchUsuario = () => {
  const [id, setId] = useState(1);
  const [error, setError] = useState("");
  const [usuario, setUsuario] = useState({});
  const [posts, setPosts] = useState([]);


  const handleUsuario = () => {
   
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>{
            if (!response.ok) {
                throw new Error('User not found'); 
            } 
            return response.json();
        })
        .then(data =>{
            
            console.log(data);
            setUsuario(data);
        })
        .catch(error => {
            console.log(error);
        })
                
  };
  

  const handlePosts = () => {
   
    fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`)
        .then(response=>{
            if (!response.ok) {
                throw new Error('Posts not found'); 
            } 
            return response.json();
        })
        .then(data =>{
            
            console.log(data);
            setPosts(data);
        })
        .catch(error => {
            console.log(error);
        })
                
  };


  return (
    <>
      <h1>Introducir ID</h1>
      <input type="number" id="id" name="id" value={id} onChange={(e)=> setId(e.target.value)} />
      
      <button onClick={handleUsuario}>Get Usuario</button>

      <button onClick={handlePosts}>Get Posts</button>


     {error && <div style={{ color: 'red' }}>Error: {error}</div>}
    
    {usuario.name && 
      <div>
        USUARIO:
     {usuario.email}<br/>
     {usuario.name}<br/>
     {usuario.website}<br/>
      </div>
    }

    <hr />

    { (posts.length > 0) ?
      <ul>
      {posts.map((post, index) => (
        <li key={index}>{post.title}</li>
      ))}
      </ul>
    :
      <p>No hay posts</p>
    }
  </>
  );
};

export default FetchUsuario;
