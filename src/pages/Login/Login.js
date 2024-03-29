import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {

    const {signIn, googleSignIn} = useContext(AuthContext);
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log(from);

    if(token){
      navigate(from, {replace: true});
    }

    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
          setLoginUserEmail(email);
        })
        .then(err => {
          console.error(err);
        })
        form.reset();
    }

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
          const user = result.user;
          saveUser(user.displayName, user.email);
        })
        .then(error => console.error(error))
    }

    const saveUser = (name, email) => {
        const user = {name, email};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data => {
            setLoginUserEmail(email);
          })
      }

    return (
        <div className='min-h-screen' style={{backgroundImage: "url(https://i.ibb.co/vBcjJJ3/header-23.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
            <div className="py-20">
        <form onSubmit={handleLogin} className="card-body bg-white md:w-[70%] lg:w-[40%] mx-auto rounded-md">
          <div className="flex justify-between items-center">
            <div className="text-center md:w-1/2">
              <h1 className="text-xl font-bold md:text-3xl uppercase">
                Log In
              </h1>
            </div>
            <div>
              <Link>
                <button className="btn btn-neutral mr-2">Login</button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-dark btn-outline mr-2">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <Link className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="divider">OR</div>
          <div className="form-control mt-6 ">
            <button onClick={handleGoogleSignIn} className="flex items-center justify-center btn btn-secondary btn-outline">
              <FaGoogle className="mr-2"></FaGoogle> Login With Google
            </button>
          </div>
        </form>
      </div>
        </div>
    );
};

export default Login;