import axios from "axios";
import {
  userLogin,
  userRegister,
  userLogout,
  setError,
  setLoading,
} from "../slices/user";

const apiRoute = "https://marica-backend.vercel.app/api/v1";

export const login =
  ({ username, password }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        apiRoute + "/user/login",
        { identifier: username, password },
        config
      );
      dispatch(userLogin(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
      console.log("login: ", data);
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

export const register = (name, email, password) => {
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        apiRoute + "/user",
        { name, password, email },
        config
      );
      dispatch(userLogin(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
      console.log("register: ", data);
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
};
