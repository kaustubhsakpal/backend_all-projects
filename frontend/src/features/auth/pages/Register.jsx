import React, { useState } from "react";
import { Link } from "react-router";
import "../style/form.scss";
import { useAuth } from "../hoooks/useAuth";
const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const {handleregister}=useAuth()

  async function handlesumbit(e) {
    e.preventDefault();
  handleregister(name,email,password)
  }
  return (
    <main>
      <form
        onSubmit={(e) => {
          handlesumbit(e);
        }}
      >
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Enter your name "
          name="username"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Enter your email "
          name="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
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
        <button>Register</button>
      </form>
      <p>
        {" "}
        All ready have account <Link to="/login">login</Link>
      </p>
    </main>
  );
};

export default Register;
