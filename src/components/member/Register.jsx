import React, { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import "../../global.css";
import "../../index.css";
import Api from "../../Api.jsx";

//function Component
const Register = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [resident, setResident] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [block, setBlock] = useState("");
  const [flat, setFlat] = useState("");
  const [errors, setErrors] = useState({});
  const [blockData, setBlockData] = useState([]);
  const [flatData, setFlatData] = useState([]);

  const navigate = useNavigate();

  const userDetailsres = {
    name,
    mobile,
    email,
    password,
    block,
    flat,
    resident,
  };

  //form validation
  const validateForm = () => {
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(mobile)) {
      errors.mobile = "Mobile number must be exactly 10 digits long";
    }
    // if (!resident) {
    //   errors.resident = 'resident is required';
    // }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
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
    if (!block) {
      errors.block = "Block is required";
    }
    if (!flat) {
      errors.flat = "Flat number is required";
    }
    if (!resident) {
      errors.resident = "Resident is required";
    }

    return errors;
  };

  useEffect(() => {
    getApartmentBlocks();
    getFlatBlocks();
  }, []);

  const getApartmentBlocks = () => {
    Api.get("/api/v1/block/get/all").then((res) => {
      const data = res.data.data.data;
      setBlockData(data);
    });
  };

  const getFlatBlocks = () => {
    Api.get("/api/v1/flat/get/all").then((res) => {
      const data = res.data.data.data;
      setFlatData(data);
    });
  };

  //sumbit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      Api.post("api/v1/user/signup", {
        name: name,
        blockId: block,
        flatId: flat,
        phoneNumber: mobile,
        residentType: resident,
        email: email,
      }).then((res)=>{
        const status = res.status;
        const userDetails = res.data.data;
        if(status == 200){
          toast.success("Registration successful");
          alert("Registration successful");
          localStorage.setItem("userData", JSON.stringify(userDetails));
          navigate("/memberdashboard");
        }
      }).catch((error) => {
        const errorMessage = error?.response?.data?.message || "Unknown error";
        alert(errorMessage);
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

  //mobile validation
  const handleMobileChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setMobile(value);
    }
  };

  //resident radio btn valiadation
  const handleRadioChange = (radio, field) => (e) => {
    radio(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="reg-form">
              <h2 className="login-title">Member Registration</h2>
              <form onSubmit={handleSubmit} className="form">
                <div className="row">
                  <div className="col-lg-6 form-align">
                    <label className=" form-label">
                      Name<span className="login-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={name}
                      onChange={handleInputChange(setName, "name")}
                    />
                    {errors.name && <p className="err-align">{errors.name}</p>}
                  </div>
                  <div className="col-lg-6 form-align">
                    <label className=" form-label">
                      Mobile Number<span className="login-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={mobile}
                      onChange={handleMobileChange}
                    />
                    {errors.mobile && (
                      <p className="err-align">{errors.mobile}</p>
                    )}
                  </div>

                  <div className="col-lg-6 form-align">
                    <label className=" form-label">
                      Email<span className="login-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={email}
                      onChange={handleInputChange(setEmail, "email")}
                    />
                    {errors.email && (
                      <p className="err-align">{errors.email}</p>
                    )}
                  </div>
                  <div className="col-lg-6 form-align">
                    <label className=" form-label">
                      Password<span className="login-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      value={password}
                      onChange={handleInputChange(setPassword, "password")}
                    />
                    {errors.password && (
                      <p className="err-align">{errors.password}</p>
                    )}
                  </div>
                  <div className="col-lg-6 form-align">
                    <label className=" form-label">
                      Block Name<span className="login-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      value={block}
                      onChange={handleInputChange(setBlock, "block")}
                    >
                      <option value="">Select Block</option>
                      {blockData.map((blockItem) => (
                        <option key={blockItem.id} value={blockItem.id}>
                          {blockItem.blockName}
                        </option>
                      ))}
                    </select>
                    {errors.block && (
                      <p className="err-align">{errors.block}</p>
                    )}
                  </div>
                  <div className="col-lg-6 form-align">
                    <label className=" form-label">
                      Flat Number<span className="login-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      value={flat}
                      onChange={handleInputChange(setFlat, "flat")}
                    >
                      <option value="">Select Flat</option>
                      {flatData.map((flatItem) => (
                        <option key={flatItem.id} value={flatItem.id}>
                          {flatItem.flatName}
                        </option>
                      ))}
                    </select>
                    {errors.flat && <p className="err-align">{errors.flat}</p>}
                  </div>
                  <div className="col-lg-6 form-align">
                    <label className=" form-label">
                      Resident Type<span className="login-danger">*</span>
                    </label>
                    <div>
                      <input
                        type="radio"
                        value="Owner"
                        checked={resident === "Owner"}
                        onChange={handleRadioChange(setResident, "resident")}
                      />
                      <label className="ps-2 me-2" style={{ color: "#fff" }}>
                        Owner
                      </label>
                      <input
                        type="radio"
                        value="Rental"
                        checked={resident === "Rental"}
                        onChange={handleRadioChange(setResident, "resident")}
                      />
                      <label className="ps-2 me-2" style={{ color: "#fff" }}>
                        Rental Resident
                      </label>
                    </div>
                    {errors.resident && (
                      <p className="err-align">{errors.resident} </p>
                    )}
                  </div>
                </div>
                <div className="btn-center">
                  <button type="submit" className="btn-reg">
                    Register
                  </button>
                </div>
              </form>

              <div>
                <p className="account-subtitle">
                  Already have account?{" "}
                  <Link to={"/signin"} className="cl-login">
                    LogIn
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="login-img"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
