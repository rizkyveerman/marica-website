import axios from "axios";
import { userLogin, userLogout, setError, setLoading } from "../slices/user";

const apiRoute = "http://localhost:4000/api/v1";

export const register =
  ({ firstname, lastname, email, password }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.post(
        `${apiRoute}/user`,
        { nama: `${firstname} ${lastname}`, password, email },
        config
      );

      window.location.replace("http://localhost:3000/login");
    } catch (error) {
      console.log("error", error);
      dispatch(
        setError(
          error.message && error.response
            ? error.response
            : error.message
            ? error.message
            : "Aduh ada sedikit masalah, Coba lagi yuk!"
        )
      );
    }
  };
export const login =
  ({ identifier, password }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${apiRoute}/user/login`,
        { identifier, password },
        config
      );
      dispatch(userLogin(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("token", JSON.stringify(data.data.token));
    } catch (error) {
      console.log("error", error.response);
      dispatch(
        setError(
          error.message && error.response
            ? error.response
            : error.message
            ? error.message
            : "Aduh ada sedikit masalah, Coba lagi yuk!"
        )
      );
    }
  };

export const logout = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    dispatch(userLogout());
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
  } catch (error) {
    dispatch(
      setError(
        error.message && error.response
          ? error.response
          : error.message
          ? error.message
          : "Aduh ada sedikit masalah, Coba lagi yuk!"
      )
    );
  }
};
