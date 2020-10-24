import React, { useState } from 'react'

const IntroForm = ({ image, description, changeIntro, setEditing }) => {
    const [img, setImage] = useState(image)
    const [desc, setDescription] = useState(description)
    return (
        <>
        <div>
            <label>Image</label>
            <input
                onChange={e => setImage(e.target.value)}
                value={img}
            />
        </div>
        <div>
            <label>Description</label>
            <input
                onChange={e => setDescription(e.target.value)}
                value={desc}
            />
        </div>
        <button
            onClick={() => {
                changeIntro(img, desc)
                setEditing(false)
            }}
        >
            Submit
        </button>
        <button onClick={() => setEditing(false)}>
            Cancel
        </button>
        </>
    )
}

    export default IntroForm