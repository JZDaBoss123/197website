import React from "react";
import { connect } from "react-redux";
import s from "styled-components";

import { addPost, changePost, deletePost } from "../actions";
import BlogPosts from "./BlogPosts";
import BlogForm from "./BlogForm";

const Wrapper = s.div`
    margin-bottom: 1rem;
    background-color: black;
    background-repeat: no-repeat
    background-image: radial-gradient(green, blue);
    `;

const Wrapperh1 = s.h1`
    color: red;
    text-align: center
`;

const Blog = ({
  blogs,
  dispatchAddPost,
  dispatchChangePost,
  dispatchDeletePost,
}) => (
  <Wrapper>
    <Wrapperh1>
      <h1>Blog Posts</h1>
      <BlogForm
        title=""
        image=""
        description=""
        action={dispatchAddPost}
        //setEditing, id can be missing
      />
      <ul>
        {blogs.map((post) => (
          <BlogPosts
            key={post.id}
            {...post}
            //actions needed
            dispatchChangePost={dispatchChangePost}
            dispatchDeletePost={dispatchDeletePost}
          />
        ))}
      </ul>
    </Wrapperh1>
  </Wrapper>
);

const mapStateToProps = (state) => ({
  blogs: state.blogs,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAddPost: (title, image, description) =>
    dispatch(addPost(title, image, description)),
  dispatchChangePost: (id, title, image, description) =>
    dispatch(changePost(id, title, image, description)),
  dispatchDeletePost: (id) => dispatch(deletePost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
