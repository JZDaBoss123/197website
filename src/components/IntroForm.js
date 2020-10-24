import React, { useState } from "react";
import s from "styled-components";

const Wrapper = s.div`
    margin-bottom: 1rem;
    background-color: green;
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

const IntroForm = ({ image, description, changeIntro, setEditing }) => {
  const [img, setImage] = useState(image);
  const [desc, setDescription] = useState(description);
  return (
    <Wrapper>
      <Wrapperh1>
        <WrapperButton>
          <div>
            <label>Image </label>
            <input onChange={(e) => setImage(e.target.value)} value={img} />
          </div>
          <div>
            <label>Description </label>
            <input
              onChange={(e) => setDescription(e.target.value)}
              value={desc}
            />
          </div>
          <WrapperButton2>
            <button
              onClick={() => {
                changeIntro(img, desc);
                setEditing(false);
              }}
            >
              Submit
            </button>
            <button onClick={() => setEditing(false)}>Cancel</button>
          </WrapperButton2>
        </WrapperButton>
      </Wrapperh1>
    </Wrapper>
  );
};

export default IntroForm;
