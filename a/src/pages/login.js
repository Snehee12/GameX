import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./login.css";

export const Form = ({ setUser }) => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    fullname: yup.string().required("Full Name required!"),
    email: yup.string().email("Invalid email format").required("Email required"),
    age: yup.number().positive().integer().min(10, "Age must be above 10").required("Age required"),
    password: yup.string().min(4, "Password must be at least 4 characters").max(20).required("Password required"),
    confPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords do not match").required(),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setUser(data.fullname); // ✅ Save user info
    navigate("/"); // ✅ Redirect to Home Page
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Full Name" {...register("fullname")} />
        <br />
        <input type="text" placeholder="Email" {...register("email")} />
        <br />
        <input type="number" placeholder="Age" {...register("age")} />
        <br />
        <input type="password" placeholder="Password" {...register("password")} />
        <br />
        <input type="password" placeholder="Confirm Password" {...register("confPassword")} />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
