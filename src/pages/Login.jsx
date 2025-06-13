// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Login.css";
// import api from "../../servies/api";
// import { useDispatch } from "react-redux";
// import { loginUser } from "../redux/authSlice";

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [detail, setDetail] = useState({
//     email: "",
//     password: "",
//   });

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setDetail({ ...detail, [name]: value });
//   };
//   console.log(detail);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!detail.email || !detail.password) {
//       alert("Please fill in all fields");
//       return;
//     }
//     try {
//       const response = await dispatch(loginUser(detail));
//       console.log("redux response: ", response);

//       if (response.type === "auth/login/rejected") {
//         throw new Error(response.payload);
//       }

//       console.log(response);

//       try {
//         const response = await dispatch(getCurrentUser());
//         console.log("redux response for current user: ", response);
//       } catch (error) {
//         console.log("Error fetching current user: ", error);
//       }

//       navigate("/");
//       window.location.reload();
//     } catch (error) {
//       console.log("API Error Response:", error);
//     }
//   };

//   return (
//     <div className="main-container flex justify-center items-center">
//       <form onSubmit={handleSubmit}>
//         <div className="flex flex-col justify-center items-center gap-5 w-[400px] p-10 rounded-md border-2 border-white/10 backdrop-blur-md bg-black/10 shadow-lg">
//           <h4 className="text-white text-2xl font-bold font-">login</h4>
//           <input
//             className="inputStyle"
//             type="email"
//             placeholder=" Enter Email..."
//             onChange={handleInput}
//             value={detail.email}
//             name="email"
//           />
//           <input
//             className="inputStyle"
//             type="password"
//             placeholder="password"
//             onChange={handleInput}
//             value={detail.password}
//             name="password"
//           ></input>
//           <button className="rounded-md bg-blue-800 text-white w-full p-2 mt-5 font-semibold">
//             Login
//           </button>
//           <p className="text-white text-xs">
//             don&apos;t have a account?{" "}
//             <Link to={"/register"} className="underline hover:text-blue-500">
//               Register Here..
//             </Link>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import api from "../../servies/api";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [detail, setDetail] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
  };
  console.log(detail);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!detail.email || !detail.password) {
      alert("Please fill in all fields");
      return;
    }
    try {
      const response = dispatch(loginUser(detail));
      console.log("redux response: ", response);

      if (response.type === "auth/login/rejected") {
        throw new Error(response.payload);
      }

      console.log(response);

      try {
        const response = await dispatch(getCurrentUser());
        console.log("redux response for current user: ", response);
      } catch (error) {
        console.log("Error fetching current user: ", error);
      }

      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log("API Error Response:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">DressKulb</h1>
          <p className="text-gray-500 text-sm">Welcome back to our fashion community</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Welcome Back</h2>
            <p className="text-gray-500 text-sm">Sign in to continue your style journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={detail.email}
                onChange={handleInput}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={detail.password}
                  onChange={handleInput}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-600">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mr-2"
                />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-md transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Login
            </button>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-gray-600 text-sm">
                Don't have an account?{" "}
                <Link 
                  to="/register" 
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-400 text-xs">
          <p>By continuing, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
