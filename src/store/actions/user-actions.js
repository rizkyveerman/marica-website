import axios from "axios";
import {
  userLogin,
  userRegister,
  userLogout,
  setError,
  setLoading,
} from "../slices/user";

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
        "https://marica-backend.vercel.app/api/v1/user/login",
        { identifier: username, password },
        config
      );
      dispatch(userLogin(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch(
        setError(
          error ? error.message : "Aduh ada sedikit masalah, Coba lagi yuk!"
        )
      );
    }
  };

export const register = ({ firstname, lastname, email, password }) => {
  const fullname = firstname + " " + lastname;

  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "https://marica-backend.vercel.app/api/v1/user",
        { identifier: fullname, email, password },
        config
      );
      dispatch(userRegister(data));
    } catch (error) {
      dispatch(
        setError(
          error ? error.message : "Aduh ada sedikit masalah, Coba lagi yuk!"
        )
      );
    }
  };
};
