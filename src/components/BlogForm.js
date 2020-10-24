import React, { useState } from "react";
import s from "styled-components";

const Wrapper = s.div`
    margin-bottom: 1rem;
    background-color: blue;
    background-repeat: no-repeat
    background-image: radial-gradient(green, blue);
    `;

const Wrapperh1 = s.h1`
    color: blue;
    text-align: center
`;

const WrapperButton = s.button`
    background-color: yellow;
    color: red;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }`;

const WrapperButton2 = s.button`
  background-color: black;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}`;

const PostsForm = ({
  id = null,
  title,
  image,
  description,
  action,
  setEditing = null,
}) => {
  const [titleState, setTitle] = useState(title);
  const [imageState, setImage] = useState(image);
  const [descriptionState, setDescription] = useState(description);

  return (
    <Wrapper>
      <Wrapperh1>
        <WrapperButton>
          <div>
            <label>Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={titleState}
            />
          </div>
          <div>
            <label>Image</label>
            <input
              onChange={(e) => setImage(e.target.value)}
              value={imageState}
            />
          </div>
          <div>
            <label>Description</label>
            <input
              onChange={(e) => setDescription(e.target.value)}
              value={descriptionState}
            />
          </div>
          <WrapperButton2>
            <button
              onClick={() => {
                if (id !== null) {
                  action(id, titleState, imageState, descriptionState);
                } else {
                  action(titleState, imageState, descriptionState);
                }
                if (setEditing !== null) {
                  setEditing(false);
                }
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                if (setEditing !== null) {
                  setEditing(false);
                }
              }}
            >
              Cancel
            </button>
          </WrapperButton2>
        </WrapperButton>
      </Wrapperh1>
    </Wrapper>
  );
};

export default PostsForm;
