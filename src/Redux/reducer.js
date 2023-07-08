export const weatherReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "weatherRequest":
      return { loading: true };
    case "weatherSuccess":
      return { loading: false, weatherdata: payload };
    case "weatherFailed":
      return { loading: false, error: payload };
    default:
      return state;
  }
};
