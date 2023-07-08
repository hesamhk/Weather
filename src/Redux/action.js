import axios from "axios";

export const weatherAction = (city, keyapi) => async (dispatch, getState) => {
  try {
    dispatch({ type: "weatherRequest", loading: true });
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${keyapi}`
    );
    dispatch({ type: "weatherSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "weatherFailed", payload: error.message });
  }
};
