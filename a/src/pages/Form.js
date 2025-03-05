import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Form.css";

export const Form = () =>{
    
    const schema = yup.object().shape({
        fullname : yup.string().required("Full Name required!"),
        email : yup.string().email("Invalid email format").required("Email required"),
        age : yup.number().positive().integer().min(10,"Age must be above 10").required("Age required"),
        password : yup.string().min(4,"Password must be atleast 4 characters").max(20).required("Password required"),
        confPassword : yup
        .string()
        .oneOf([yup.ref("password"),null],"Passwords do not match")
        .required(),
    });

    const {register,handleSubmit , formState : {errors}} = useForm({
        resolver : yupResolver(schema),
    });

    const onSubmit = (data) =>{
        console.log(data);
    };

    const showErrors = () =>{
        let errorMsg = Object.values(errors).map((err)=>err.message).join("\n");
        if(errorMsg) alert(errorMsg);
    }

    return(
        <form onSubmit={(e) =>{
            handleSubmit(onSubmit)(e);
            showErrors();
            }}>

            <input type = "text" placeholder="Full Name" {...register("fullname")} />
            <br></br>
            <input type = "text" placeholder="Email" {...register("email")}/>
            <br></br>
            <input type = "number" placeholder="Age" {...register("age")}/>
            <br></br>
            <input type = "password" placeholder="Password" {...register("password")}/>
            <br></br>
            <input type = "password" placeholder="Confirm Password" {...register("confPassword")}/>
            <br></br>
            <input type = "submit" />
        </form>
    )
}