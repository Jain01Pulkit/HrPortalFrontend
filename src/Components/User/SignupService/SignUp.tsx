import "./signUp.css";
import { Signup } from "../../../apiServices/apiFetch";
import { useNavigate } from "react-router-dom";
import { inputBox } from "./FormInput";
import { SubmitHandler } from "react-hook-form";
import FormComponent from "../../common/InputField";
interface IFormInput {
  [key: string]: any;
}

export default function SignUp() {
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      alert("jj");
      console.log("data", data);

      return;
      const payload: any = {
        userName: data?.userName,
        email: data?.email,
        contactNumber: data.Contact,
        password: data?.password,
        role: data.userRole,
      };
      const res = await Signup(payload);
      if (res) {
        navigate("/");
      }
      console.log(res, "SIGNUP");
    } catch (error) {
      console.error(error, "error In Register");
    }
  };

  return <FormComponent fields={inputBox} onSubmit={onSubmit} />;
}
