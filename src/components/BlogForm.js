import React, { useState } from 'react'

const PostsForm = ({ id = null, title, image, description, action, setEditing = null }) => {
  const [titleState, setTitle] = useState(title)
  const [imageState, setImage] = useState(image)
  const [descriptionState, setDescription] = useState(description)

  return (
    <>
      <div>
        <label>Title</label>
        <input
          onChange = {e => setTitle(e.target.value)}
          value = {titleState}
        />
      </div>
      <div>
        <label>Image</label>
        <input
          onChange = {e => setImage(e.target.value)}
          value = {imageState}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          onChange = {e => setDescription(e.target.value)}
          value = {descriptionState}
        />
      </div>
      <button
        onClick = {() => {
          if (id !== null) {
            action(id, titleState, imageState, descriptionState)
          } else {
            action(titleState, imageState, descriptionState)
          }     
          if (setEditing !== null) {
            setEditing(false)
          }
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          if (setEditing !== null) {
            setEditing(false)
          }
        }}
      >
        Cancel
      </button>
    </>
  )
}

export default PostsForm