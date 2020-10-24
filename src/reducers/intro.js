const intro = (state = { image: "", description: "" }, action) => {
  const { type, image, description } = action;

  switch (type) {
    case "CHANGE_INTRO":
      return { image, description };
    default:
      return state;
  }
};

export default intro;
