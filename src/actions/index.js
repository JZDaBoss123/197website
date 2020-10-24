let nextBlogId = 0

export const addPost = (title, image, description) => ({
    type: 'ADD_POST',
    id: nextBlogId++,
    title,
    image,
    description
  })
  
  export const changeIntro = (image, description) => ({
    type: 'CHANGE_INTRO',
    image,
    description
  })
  
  export const changePost = (id, title, image, description) => ({
    type: 'CHANGE_POST',
    id,
    title,
    image,
    description
  })
  
  export const deletePost = id => ({
    type: 'DELETE_POST',
    id
  })