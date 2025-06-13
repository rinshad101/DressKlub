// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import api from "../../servies/api";

// const Register = () => {

//   const [data, setData] = useState([]);
//   const [input, setInput] = useState({
//     username: "",
//     password: "",
//     email: "",
//     role: "",
//   });
//   const navigate = useNavigate()
//   const [isSubmit, setIsSubmit] = useState(false);

//   useEffect(() => {
//     const getData = async () => {
//       const response = await api.get("/user");
//       setData(response.data);
//     };
//     getData();
//   }, [isSubmit]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await api.get(`/user?email=${input.email}`);
//       if (response.data.length > 0) {
//         alert("Email already exists");
//       } else {

//         const response = await api.post("/user", input);
//         console.log(response.data);
//         alert("you are registered successfully");
//         navigate('/login')
//         setIsSubmit(!isSubmit);

//         setInput({
//           name: "",
//           email: "",
//           password: "",
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInput({ ...input, [name]: value, id: data.length + 1,role:"user" });
//     console.log(input);

//   };

//   console.log(input);

//   return (
//     <div className="main-container flex justify-center items-center">
//       <form onSubmit={handleSubmit}>
//         <div className="flex flex-col justify-center items-center gap-5 w-[400px] p-10 rounded-md border-2 border-white/10 backdrop-blur-md bg-black/10 shadow-lg">
//           <h4 className="text-white text-2xl font-bold font-">Register</h4>
//           <input
//             className="inputStyle"
//             type="text"
//             placeholder="Enter your userName"
//             onChange={handleChange}
//             name="name"
//             value={input.name}
//           />
//           <input
//             className="inputStyle"
//             type="text"
//             placeholder="Enter your Email"
//             onChange={handleChange}
//             name="email"
//             value={input.email}
//           />
//           <input
//             className="inputStyle"
//             type="password"
//             placeholder="password"
//             onChange={handleChange}
//             name="password"
//             value={input.password}
//           ></input>
//           <button className="rounded-md bg-blue-800 text-white w-full p-2 mt-5 font-semibold">
//             Register
//           </button>
//           <p className="text-white text-xs">
//             already have a account?{" "}
//             <Link to={"/login"} className="underline hover:text-blue-500">
//               Login Here..
//             </Link>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Register;

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    username: "",
    password: "",
    email: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(registerUser(input)).unwrap();
      console.log(response);
      alert("you are registered successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value, role: "USER" });
    console.log(input);
  };

  console.log(input);

  return (
    <div className="main-container flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center gap-5 w-[400px] p-10 rounded-md border-2 border-white/10 backdrop-blur-md bg-black/10 shadow-lg">
          <h4 className="text-white text-2xl font-bold font-">Register</h4>
          <input
            className="inputStyle"
            type="text"
            placeholder="Enter your userName"
            onChange={handleChange}
            name="username"
            value={input.username}
          />
          <input
            className="inputStyle"
            type="text"
            placeholder="Enter your Email"
            onChange={handleChange}
            name="email"
            value={input.email}
          />
          <input
            className="inputStyle"
            type="password"
            placeholder="password"
            onChange={handleChange}
            name="password"
            value={input.password}
          ></input>
          <button className="rounded-md bg-blue-800 text-white w-full p-2 mt-5 font-semibold">
            Register
          </button>
          <p className="text-white text-xs">
            already have a account?{" "}
            <Link to={"/login"} className="underline hover:text-blue-500">
              Login Here..
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
