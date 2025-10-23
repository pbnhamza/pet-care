import React from "react";

const Register = () => {
  const handleOnRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };
  return (
    <div>
      <div className="hero bg-purple-200 min-h-screen">
        <form onSubmit={handleOnRegister}>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="name"
                name="text"
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register Now</button>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
