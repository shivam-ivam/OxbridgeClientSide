import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import secImg from "../images/helloRobo.jpg";

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = new useState({
    userName: "",
    email: "",
    coachingCode: "",
    password: "",
    cPassword: "",
  });

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

 // Make a POST request to the server
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const { userName, email, coachingCode, password, cPassword } = user;
    try{const res = await fetch("https://oxbridgeserverside.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        email,
        coachingCode,
        password,
        cPassword,
      }),
    });
    if (res.status === 201) {
      window.alert("User signed up!");
      navigate("/signin");
    } else if (res.status === 400) {
      window.alert("Plz fill all the credentials");
    } else if (res.status === 409) {
      window.alert("User already exist");
      navigate("/signin");
    } else {
      window.alert("Invalid credentials");
    }}catch(error){
      console.log(error);
      window.alert("Something went wrong, plz try again later..")
    }finally{
       setLoading(false)
    }
  };

  return (
    <div id="signin" className="section container text-center">
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <div className="sec-img-container">
            <img src={secImg} alt="img" />
          </div>
        </div>
        <div className="col-xs-12 col-md-6 form-container-col">
          <div className="form-container">
            <h1>TEACHER SIGNUP</h1>
            <form>
              <div className="mb-3">
                <label for="userName" className="form-label">
                  User Name
                </label>
                <input
                  value={user.userName}
                  onChange={handleFormChange}
                  type="text"
                  className="form-control"
                  name="userName"
                  id="userName"
                />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email address
                </label>
                <input
                  value={user.email}
                  onChange={handleFormChange}
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3">
                <label for="coachingCode" className="form-label">
                  Coaching Code
                </label>
                <input
                  value={user.coachingCode}
                  onChange={handleFormChange}
                  type="password"
                  className="form-control"
                  name="coachingCode"
                  id="coachingCode"
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  value={user.password}
                  onChange={handleFormChange}
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                />
              </div>
              <div className="mb-3">
                <label for="cPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  value={user.cPassword}
                  onChange={handleFormChange}
                  type="password"
                  className="form-control"
                  name="cPassword"
                  id="cPassword"
                />
              </div>
              {loading ? (
               
               <div class="spinner-border text-info" role="status">
 <span class="visually-hidden">Loading...</span>
 </div>
               ) : (
                 <button
                 onClick={handleSubmit}
                 type="submit"
                 className="btn-modified"
               >SignUp
               </button>
               )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
