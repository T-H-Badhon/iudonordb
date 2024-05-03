/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authorized, setAuthorize] = useState(false);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  const createAdmin = async (userData, adminData) => {
    const newAdmin = {
      userData,
      adminData,
    };
    return fetch("https://iudonordbserver.vercel.app/api/auth/registerAdmin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: localStorage.getItem("AC_token"),
      },
      body: JSON.stringify(newAdmin),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success == true) {
          return {
            success: true,
          };
        } else {
          return { success: false, errorMessage: data.errorMessage };
        }
      });
  };

  const createDonor = async (userData, donorData) => {
    const newDonor = {
      userData,
      donorData,
    };
    return fetch("https://iudonordbserver.vercel.app/api/auth/registerDonor", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newDonor),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success == true) {
          localStorage.setItem("AC_token", data.data.token);
          setAuthorize(true);
          setRole(data.data.role);
          return {
            success: true,
          };
        } else {
          return { success: false, errorMessage: data.errorMessage };
        }
      });
  };
  const logIn = async (loginCredential) => {
    const loginData = {
      loginCredential,
    };
    return fetch("https://iudonordbserver.vercel.app/api/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success == true) {
          localStorage.setItem("AC_token", data.data.token);
          localStorage.setItem("role", data.data.role);
          setAuthorize(true);
          setRole(data.data.role);
          return {
            success: true,
          };
        } else {
          return { success: false, errorMessage: data.errorMessage };
        }
      });
  };

  const logOut = () => {
    setAuthorize(false);
    localStorage.removeItem("AC_token");
    localStorage.removeItem("role");
    setRole(null);
  };

  useEffect(() => {
    const AC_token = localStorage.getItem("AC_token");
    const role = localStorage.getItem("role");

    if (AC_token && role) {
      setAuthorize(true);
      setRole(role);
    } else {
      setAuthorize(false);
    }
    setLoading(false);
  }, []);

  const changePassword = async (changePasswordCredential) => {
    return fetch(
      "https://iudonordbserver.vercel.app/api/auth/change-password",
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("AC_token"),
        },
        body: JSON.stringify({ changePasswordCredential }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success == true) {
          localStorage.setItem("AC_token", data.data.token);
          localStorage.setItem("role", data.data.role);

          setAuthorize(true);
          setRole(data.data.role);
          return {
            success: true,
          };
        } else {
          return {
            success: false,
            message: data.message,
            errorMessage: data.errorMessage,
          };
        }
      });
  };
  const deleteProfile = async (link) => {
    return fetch(`${link}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: localStorage.getItem("AC_token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success == true) {
          localStorage.removeItem("AC_token");
          localStorage.removeItem("role");

          setAuthorize(false);
          setRole(null);
          return {
            success: true,
          };
        } else {
          return {
            success: false,
            message: data?.message,
            errorMessage: data?.errorMessage,
          };
        }
      });
  };

  const authInfo = {
    authorized,
    loading,
    role,
    createAdmin,
    createDonor,
    logIn,
    logOut,
    changePassword,
    deleteProfile,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
