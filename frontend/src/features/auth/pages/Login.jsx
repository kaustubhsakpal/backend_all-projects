import React, { useState } from "react";
import "../style/form.scss";
import { Link } from "react-router";
import { useAuth } from "../hoooks/useAuth";
import { useNavigate } from "react-router"
const Login = () => {
  const navigate=useNavigate()
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const { handellogin, loading } = useAuth();
  async function sumbithandler(e) {
    e.preventDefault();
    handellogin(name, password)
    .then(()=>{
      navigate('/')
    })
  }

  // if (loading) {
  //   console.log(loading);

  //   return <h1>Loading...</h1>;
  // }
  return (
    <>
      <main>
        <form
          action="post"
          onSubmit={(e) => {
            sumbithandler(e);
          }}
        >
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Enter your name or email"
            name="username"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password eg: Kaustubh@1234"
            name="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <button disabled={loading} type="submit">{loading ? "Loading..." : "Login"}</button>
        </form>
        <p>
          Dont have account <Link to="/register">Register</Link>
        </p>
      </main>
    </>
  );
};

export default Login;
