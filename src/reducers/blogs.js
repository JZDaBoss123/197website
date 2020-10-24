const blogs = (state = [], action) => {
    const { id, title, image, description, type} = action
  
    switch (type) {
        case 'ADD_POST':
            return [
            ...state,
            { id, title, image, description }
            ]
        case 'CHANGE_POST':
            return state.map(post =>
            (post.id === id)
                ? {id, title, image, description}
                : post
            )
        case 'DELETE_POST':
            return state.filter(post => post.id !== id)
      default:
        return state
    }
  }
  
  export default blogs