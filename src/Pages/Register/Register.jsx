import axios from 'axios';
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { Dna } from  'react-loader-spinner'


const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const [error, setError] = useState({});
    const {
        handleGoogleSignIn,
        handleEmailPasswordRegister,
        setUser,
        setUserName,
        setLoading,
        user,
        loading,
        handleGithubSignIn,
        saveUserToDatabase,
        saveGoogleUserToDatabase
      } = useAuth();


    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
  
    const handleOnChange = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newRegisterData = { ...registerData };
      newRegisterData[field] = value;
      setRegisterData(newRegisterData);
    };
    // validate registration data
  const validationRegister = (name, password) => {
    const errorMessage = {};
    if (name.length < 5 || name.length > 15) {
      errorMessage.name = "Name Must be between 5 to 15 characters";
    }
    if (password.length < 6 || password.length > 14) {
      errorMessage.password = "Password Must be between 5 to 14 characters";
    }
    return errorMessage;
  };

  // handle email registration function
  const handleEmailRegistration = (e) => {
    setLoading(true);
    e.preventDefault();

    const errorMessage = validationRegister(
      registerData?.name,
      registerData?.password
    );

    if (errorMessage.name || errorMessage.password) {
      setError(errorMessage);
      return;
    }

    handleEmailPasswordRegister(
      registerData?.email,
      registerData?.password,
      registerData?.name
    )
      .then(async(result) => {
        setUserName(registerData?.name,registerData?.photoURL);
        const LoginUser = result.user;

        const newUser = {
          name: registerData?.name,
          email: result.user.email,
          uid: result.user.uid,
          photoUrl: result.user.photoURL,
        };
        // get jwt token
        await axios
        .post("https://pickypro-server.vercel.app/api/jwt", newUser)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
        })
        .catch((err) => console.log(err));

        saveUserToDatabase(newUser)
        setUser(LoginUser);
        console.log(user);
        navigate(from, { replace: true });
        setError({});
      })
      .catch((e) => {
        setError({ email: "User already exits this email" });
      })
      .finally(() => setLoading(false));
  };

  // google signup
  const signInGoogle = () => {
    setLoading(true);
    handleGoogleSignIn()
      .then(async(result) => {
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          uid: result.user.uid,
          photoUrl: result.user.photoURL,
        };
        // get jwt token
        await axios
        .post("https://pickypro-server.vercel.app/api/jwt", newUser)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
        })
        .catch((err) => console.log(err));
        saveGoogleUserToDatabase(newUser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message))
      .finally(() => setLoading(false));
  };

  // github signup
  const signInGithub = () => {
    setLoading(true);
    handleGithubSignIn()
      .then(async(result) => {
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          uid: result.user.uid,
          photoUrl: result.user.photoURL,
        };
        // get jwt token
        await axios
        .post("https://pickypro-server.vercel.app/api/jwt", newUser)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
        })
        .catch((err) => console.log(err));
        saveGoogleUserToDatabase(newUser);
        navigate(from, { replace: true });
      })
      .finally(() => setLoading(false));
  };

if(loading){
  <div className="container mx-auto ">
      <div className="flex justify-center items-center py-48">
      <Dna
    visible={true}
    height="250"
    width="250"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
  />
      </div>
    </div>
}

  return (
    <div>
    <div className=" min-h-screen px-4 bg-slate-100">
      <div className="container mx-auto">
        <div className="flex items-center justify-center min-h-screen">
        <div className="card md:-mt-12 md:w-1/3 shadow-xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleEmailRegistration}>
              <h1 className="text-3xl font-bold text-center mb-4">Sign Up</h1>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  name="name"
                  onChange={handleOnChange}
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Photo Url </span>
                  </label>
                  <input
                    name="photoURL"
                    onChange={handleOnChange}
                    type="text"
                    placeholder="Paste your photo url"
                    className="input input-bordered"
                    required
                  />
                 
                </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  onChange={handleOnChange}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  onChange={handleOnChange}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-purple-700">
                  Signup
                </button>
              </div>
              <label className="label block text-center">
                <Link
                  to="/register"
                  className="label-text-alt text-center link link-hover"
                >
                Already have an account? Login here
                </Link>
              </label>
            </form>
            <div className="form-control mt-2">
              <button
                onClick={signInGoogle}
                className="btn shadow-md btn-ghost"
              >
                Login with Google
              </button>
            </div>
            <div className="form-control mt-2">
              <button onClick={signInGithub} className="btn shadow-md ">
                Login with Github
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register