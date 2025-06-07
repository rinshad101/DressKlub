import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import api from "../../servies/api";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [detail, setDetail] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
  };
  console.log(detail);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!detail.name || !detail.password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const Response = await dispatch();
      const data = Response.data;
      const user = data.find(
        (user) =>
          (detail.name === user.email || user.name === detail.name) &&
          user.password === detail.password
      );

      if (user.role === "admin") {
        alert("welcom..........");
        localStorage.setItem("user", JSON.stringify(user));

        navigate("/admin");
        console.log(user);
      } else if (user) {
        alert("login successful");
        localStorage.setItem("user", JSON.stringify(user));

        navigate("/");
        console.log(user);
      } else {
        alert("invalid username or password");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center gap-5 w-[400px] p-10 rounded-md border-2 border-white/10 backdrop-blur-md bg-black/10 shadow-lg">
          <h4 className="text-white text-2xl font-bold font-">login</h4>
          <input
            className="inputStyle"
            type="email"
            placeholder=" Enter Email..."
            onChange={handleInput}
            value={detail.email}
            name="email"
          />
          <input
            className="inputStyle"
            type="password"
            placeholder="password"
            onChange={handleInput}
            value={detail.password}
            name="password"
          ></input>
          <button className="rounded-md bg-blue-800 text-white w-full p-2 mt-5 font-semibold">
            Login
          </button>
          <p className="text-white text-xs">
            don&apos;t have a account?{" "}
            <Link to={"/register"} className="underline hover:text-blue-500">
              Register Here..
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
