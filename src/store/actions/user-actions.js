import axios from "axios";
import { userLogin, userLogout, setError, setLoading } from "../slices/user";

const apiRoute = "https://marica-backend.vercel.app/api/v1";

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

      const { data } = await axios.post(
        apiRoute + "/user",
        { nama: `${firstname} ${lastname}`, password, email },
        config
      );
      dispatch(userLogin(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
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
        `${apiRoute}/user/login`,
        { identifier: username, password, email },
        config
      );
      dispatch(userLogin(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
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

export const logout =
  ({ username, password }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      dispatch(userLogout());
      localStorage.setItem("userInfo", null);
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
