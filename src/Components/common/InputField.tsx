import React from "react";
import * as Yup from "yup";

import "./InputField.css";
import { AuthCard, CustomButton } from "../UI";
import { Formik } from "formik";
import { Form } from "react-router-dom";
import { Input, PasswordInput } from "../UI/Formik/FormikFields";

interface FormField {
  type: string;
  label: string;
  name: string;
  rules?: any;
  options?: { value: string; label: string }[];
  icon?: any;
}

interface FormProps {
  fields: FormField[];
  onSubmit: any;
}

const FormComponent: React.FC<FormProps> = ({ fields, onSubmit }) => {
  console.log("fields", fields);

  const initialValues = {
    mail: "",
    password: "",
  };
  const validationSchema = Yup.object({
    mail: Yup.string()
      .email("Please enter a right Email Address")
      .required("Please enter email address"),
    password: Yup.string().required("Please enter password"),
  });

  return (
    <AuthCard
      isLogo
      title="Hr Crm SignUp"
      subtitle="Enter your  details"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <Input
              label="Email"
              placeholder="Eg”Admin123@gmail.com”"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mail}
              formik={formik}
              name="mail"
            />
            <PasswordInput
              label="Password"
              placeholder="#12345%&%$"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              formik={formik}
              name="password"
            />
            {/* <div className="forgot-link">
              <Link to="/forgot-password">Forgot Password</Link>
            </div> */}
            <CustomButton
              text="Login"
              className="w-100"
              disabled={!formik.isValid}
            />
          </Form>
        )}
      </Formik>
    </AuthCard>
  );
};

export default FormComponent;
