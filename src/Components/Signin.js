import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import secImg from "../images/boySitting.jpg";

export default function Signin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = new useState({
    email: "",
    password: "",
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
    const { email, password } = user;
    try {
      const res = await fetch("https://oxbridgeserverside.onrender.com/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (res.status === 200) {
        window.alert("User signed up!");
        const { token } = await res.json();
        document.cookie = "user=" + token + ";";
        navigate("/reportform");
      } else if (res.status === 400) {
        window.alert("Plz fill all the credentials");
      } else if (res.status === 401) {
        window.alert("User doesn't exist. Please singup first");
        navigate("/signup");
      } else {
        window.alert("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
      window.alert("An error occurred. Please try again later");
    } finally {
      setLoading(false);
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
            <h1>TEACHER LOGIN</h1>
            <form>
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
              {loading ? (
               
              <div class="spinner-border text-info" role="status">
<span class="visually-hidden">Loading...</span>
</div>
              ) : (
                <button
                onClick={handleSubmit}
                type="submit"
                className="btn-modified"
              >Login
              </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
