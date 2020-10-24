import React, { useState } from "react";
import { connect } from "react-redux";
import { changeIntro } from "../actions";
import IntroForm from "./IntroForm";
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

const Introduction = ({ intro, dispatchChangeIntro }) => {
  const { image, description } = intro;
  const [editing, setEditing] = useState(false);

  if (!editing) {
    return (
      <Wrapper>
        <Wrapperh1>
          <h1>Hey this is me!</h1>
          <div>
            <img src={image}></img>
          </div>
          <div>
            <h3> {description} </h3>
          </div>
          <button onClick={() => setEditing(true)}>Edit</button>
        </Wrapperh1>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div>
          <h1>Hey this is me!</h1>
        </div>
        <IntroForm
          // pass as props
          image={image}
          description={description}
          changeIntro={dispatchChangeIntro}
          setEditing={setEditing}
        />
      </Wrapper>
    );
  }
};

const mapStateToProps = (state) => ({
  intro: state.intro,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchChangeIntro: (image, description) =>
    dispatch(changeIntro(image, description)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);
