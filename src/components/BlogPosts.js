import React, { useState } from 'react'
import BlogForm from './BlogForm'

const BlogPosts = ({ id, title, image, description, dispatchChangePost, dispatchDeletePost }) => {
    const [editing, setEditing] = useState(false)
  
    if (!editing) {
        return (
            <>
                <div>
                    <h2> 
                        Post #{id}: {title}
                    </h2>
                </div>
                <div>
                    <img src={image}></img>
                </div>
                <div>
                    <p> {description} </p>
                </div>
                <button onClick={() => setEditing(!editing)}>
                    Edit Post
                </button>
            </>
        )
  } else {
        return (
            <>
                <div>
                <BlogForm
                    id={id}
                    title={title}
                    image={image}
                    description={description}
                    changeInfo={dispatchChangePost}
                    setEditing={setEditing}
                />
                </div>
                <div>
                <button onClick={() => dispatchDeletePost(id)}> Delete Post </button>
                </div>
            </>
        )
     }

  }
  
  export default BlogPosts