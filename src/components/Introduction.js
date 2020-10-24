import React, { useState } from 'react'
import { connect } from 'react-redux'
import { changeIntro } from '../actions'
import IntroForm from './IntroForm'

const Introduction = ({ intro, dispatchChangeIntro }) => {
  const{image, description} = intro
  const [editing, setEditing] = useState(false)

  if (!editing) {
        return (
            <>
                <div>
                    <h1> 
                        Hey this is me! 
                    </h1>
                </div>
                <div>
                    <img src={image}></img>
                </div>
                <div>
                    <h3> {description} </h3>
                </div>
                <button onClick={() => setEditing(true)}>
                    Edit
                </button>
            </>
        )
  } else {
        return (
            <>
                <div>
                    <h1> 
                        Hey this is me! 
                    </h1>
                </div>
                <IntroForm
                    // pass as props
                    image={image}
                    description={description}
                    changeIntro={dispatchChangeIntro}
                    setEditing={setEditing}
                />  
            </>
        )
  }
}
  
const mapStateToProps = state => ({
    intro: state.intro
})

const mapDispatchToProps = dispatch => ({
    dispatchChangeIntro: (image, description) => dispatch(changeIntro(image, description))
})
  
  export default connect(mapStateToProps, mapDispatchToProps)(Introduction)