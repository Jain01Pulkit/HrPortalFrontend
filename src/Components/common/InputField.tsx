import React, { useState } from "react";
import * as Yup from "yup";

import "./InputField.css";
import { AuthCard, CustomButton } from "../UI";
import { ErrorMessage, Formik } from "formik";
import { Form } from "react-router-dom";
import { CustomSelect, Input, PasswordInput } from "../UI/Formik/FormikFields";

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
  initialValues: any;
}

const FormComponent: React.FC<FormProps> = ({
  fields,
  onSubmit,
  initialValues,
}) => {
  console.log("fields", fields);
  console.log("initialValues", initialValues);
  const [select, setSelect] = useState("");
  // const initialValues = {
  //   mail: "",
  //   password: "",
  // };
  // const validationSchema = Yup.object({
  //   mail: Yup.string()
  //     .email("Please enter a right Email Address")
  //     .required("Please enter email address"),
  //   password: Yup.string().required("Please enter password"),
  // });

  return (
    <AuthCard
      isLogo
      title="Hr Crm SignUp"
      subtitle="Enter your account details"
    >
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          const [selectedOption, setSelectedOption] = useState(null);

       
          return (
            <Form>
              <Form className="common-form">
                {fields.map((item, index) => (
                  <ul key={index}>
                    <li>
                      {(() => {
                        switch (item.type) {
                          case "input":
                            return (
                              <Input
                                label={item.label}
                                placeholder={`Enter ${item.label}`}
                                type={
                                  item?.type == "input" ? "input" : item.type
                                }
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values[item.name]}
                                formik={formik}
                                name={item.name}
                              />
                            );
                          case "select":
                            return (
                              <CustomSelect
                                label={item.label}
                                options={item.options}
                                onChange={setSelectedOption}
                                value={selectedOption}
                              />
                            );
                          default:
                            return null;
                        }
                      })()}
                      <ErrorMessage
                        name={item.name}
                        component="div"
                        className="error"
                      />
                    </li>
                  </ul>
                ))}
                <CustomButton
                  text="submit"
                  type="button"
                  className="w-100"
                  // disabled={!formik.isValid}
                />
              </Form>

              {/* <Input
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
            /> */}
              {/* <div className="forgot-link">
              <Link to="/forgot-password">Forgot Password</Link>
            </div> */}
            </Form>
          );
        }}
      </Formik>
    </AuthCard>
  );
};

export default FormComponent;
