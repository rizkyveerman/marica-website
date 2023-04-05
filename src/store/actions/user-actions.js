import axios from "axios";
import {
  userLogin,
  userLogout,
  setError,
  setLoading,
  setStatus,
  childRegister,
} from "../slices/user";

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

      const data = await axios.post(
        `${apiRoute}/user`,
        { nama: `${firstname} ${lastname}`, password, email },
        config
      );
      dispatch(setStatus(data.status));
      console.log("data", data.data.type);
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

      const { data, status, statusText } = await axios.post(
        `${apiRoute}/user/login`,
        { identifier, password },
        config
      );

      dispatch(userLogin(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("token", JSON.stringify(data.data.token));
    } catch (error) {
      dispatch(setStatus(error.response.status));
      // dispatch(
      //   setError(
      //     error.message && error.response
      //       ? error.response
      //       : error.message
      //       ? error.message
      //       : "Aduh ada sedikit masalah, Coba lagi yuk!"
      //   )
      // );
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

export const addChild =
  ({ firstname, lastname, birthdate }) =>
  async (dispatch) => {
    dispatch(setLoading(true));

    console.log("firstname, birthdate", firstname, birthdate);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${apiRoute}/user/anak`,
        { nama: `${firstname} ${lastname}`, lahir: birthdate },
        config
      );
      dispatch(childRegister(data));
    } catch (error) {}
  };

export const loginAsChild = (childId) => async (dispatch) => {
  //1. loading
  dispatch(setLoading(true));
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    //2. get child data
    const { data, status, statusText } = await axios.get(
      `${apiRoute}/user/anak?idAnak=${childId}`,
      { identifier, password },
      config
    );
    console.log("data", data);

    //3. store the child data and token to redux & local storage
    dispatch(userLogin(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
    localStorage.setItem("token", JSON.stringify(data.data.token));
  } catch (error) {
    dispatch(setStatus(error.response.status));
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
