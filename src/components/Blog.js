import React from 'react'
import { connect } from 'react-redux'

import { addPost, changePost, deletePost} from '../actions'
import BlogPosts from './BlogPosts'
import BlogForm from './BlogForm'

const Blog = ({ blogs, dispatchAddPost, dispatchChangePost, dispatchDeletePost }) => (
    <>
    <h1>Blog Posts</h1>
    <BlogForm 
        title= "" 
        image= "" 
        description= "" 
        changeInfo={dispatchAddPost}
    />
      <ul>
        {blogs.map(post =>
        <BlogPosts
            key={post.id}
            {...post}
            dispatchChangePost={dispatchChangePost}
            dispatchDeletePost={dispatchDeletePost}
        />
        )}
      </ul>
      </>
  )


const mapStateToProps = state => ({
    blogs : state.blogs
})

const mapDispatchToProps = dispatch => ({
    dispatchAddPost: (title, image, description) => dispatch(addPost(title, image, description)),
    dispatchChangePost: (id, title, image, description) => dispatch(changePost(id, title, image, description)),
    dispatchDeletePost: id => dispatch(deletePost(id))
  })

export default connect(mapStateToProps, mapDispatchToProps)(Blog)