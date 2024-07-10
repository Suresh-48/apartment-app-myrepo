import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../global.css";
import "../../index.css";
import Api from "../../Api.jsx";

function SignIn() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(mobile)) {
      errors.mobile = "Mobile number must be exactly 10 digits long";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    } else if (!/[a-z]/.test(password)) {
      errors.password = "Password must contain at least one lowercase letter";
    } else if (!/[A-Z]/.test(password)) {
      errors.password = "Password must contain at least one uppercase letter";
    } else if (!/[0-9]/.test(password)) {
      errors.password = "Password must contain at least one digit";
    } else if (!/[!@#$%^&*]/.test(password)) {
      errors.password = "Password must contain at least one special character";
    }
    return errors;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      Api.post("api/v1/user/login", {
        phoneNumber: mobile,
        password: password,
      })
        .then((res) => {
          const status = res.status;
          if (status === 200) {
            toast.success("Login successful", {
              autoClose: 1500, // Show success message for 1500 milliseconds
              onClose: () => {
                navigate("/memberdashboard");
              },
            });
          }
        })
        .catch((error) => {
          const errorMessage =
            error?.response?.data?.message || "Unknown error";
          toast.error(errorMessage);
        });
    } else {
      setErrors(formErrors);
    }
  };

  const handleInputChange = (setter, field) => (e) => {
    setter(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  const handleMobileChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setMobile(value);
      setErrors((prevErrors) => ({ ...prevErrors, mobile: "" }));
    }
  };

  return (
    <div className="login-page">
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form-design">
              <h1 className="login-title">Member Login</h1>
              <form onSubmit={handleLoginSubmit} className="form">
                <div className="form-align">
                  <label className="form-label">
                    Registered Mobile
                    <span className="login-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    value={mobile}
                    placeholder="Mobile Number"
                    onChange={handleMobileChange}
                  />
                  {errors.mobile && (
                    <p style={{ color: "rgb(255 16 0)" }}>{errors.mobile}</p>
                  )}
                </div>
                <div className="form-align">
                  <label className="form-label">
                    Password<span className="login-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={handleInputChange(setPassword, "password")}
                  />
                  {errors.password && (
                    <p style={{ color: "rgb(255 16 0)" }}>{errors.password}</p>
                  )}
                </div>
                <p className="page-forget">
                  <span className="page-forget-label">Forgot Password?</span>
                </p>
                <button type="submit" className="login-btn">
                  Login
                </button>
              </form>
              <p className="at-login-act">
                Need an account?{" "}
                <Link to={"/register"} className="sign-up-link">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="login-img"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
