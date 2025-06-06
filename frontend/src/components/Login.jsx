import React from "react";
import { Link, NavLink } from "react-router"; // ensure this is correct

const Login = () => {
  return (
    <div className="px-4">
      <nav className="max-w-7xl mx-auto py-3 flex justify-between items-center ">
        <NavLink to="/">
          <img
            src="/images/login-logo.svg"
            alt="linkedin logo"
            className="w-24"
          />
        </NavLink>
        <div className="flex items-center">
          <NavLink
            to="/join"
            className="px-5 py-2 rounded-full font-bold text-black/70 mr-2 hover:bg-black/10 hover:text-black/80"
          >
            Join now
          </NavLink>
          <NavLink
            to="/signin"
            className="px-5 py-2 rounded-full font-semibold text-[#0a66c2] border border-[#0a66c2] hover:bg-[#70b5f925]"
          >
            Sign in
          </NavLink>
        </div>
      </nav>
      <section className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto" >
        <div>
          <h1 className="text-[#526a6e] text-3xl md:text-5xl text-center sm:text-start  mt-10 mb-3">
            Welcome to your professional community
          </h1>
          <div className="flex flex-col gap-5 py-6">
            <button className="flex items-center justify-center gap-2 font-bold text-black/70 mr-2 hover:bg-black/5 border border[text-black/70]  w-96 h-12 rounded-full">
              <img src="/images/google.svg" alt="Google logo" />
              <span>Continue with Google</span>
            </button>
           
            <button className="flex items-center justify-center gap-2 font-bold text-black/70 mr-2 hover:bg-black/5 border border[text-black/70]  w-96 h-11 rounded-full">
              <span>Sign in with email</span>
            </button>

            <p className="text-xs text-[#0009] w-96 text-center">
            By clicking Continue to join or sign in, you agree to LinkedIn's <Link className="text-[#0a66c2] font-semibold hover:underline">User Agreement, Privacy Policy,</Link> and <Link className="text-[#0a66c2] font-semibold hover:underline">Cookie Policy.</Link>
          </p>
          </div>
          <p className="text-center">New to LinkedIn? <Link className="text-[#004182] font-semibold">Join now</Link></p>
        </div>
        <div className="p-5">
          <img src="/images/login-hero.svg" alt="A person creating linkedin account" className="w-78 md:w-xl mx-auto " />
        </div>
      </section>
    </div>
  );
};

export default Login;
