export const inputBox = [
  {
    type: "input",
    label: "Username",
    name: "userName",
    rules: {
      required: "This is required.",
    },
  },
  {
    type: "input",
    label: "Email",
    name: "email",
    rules: {
      required: "This is required.",
    },
  },
  {
    type: "input",
    label: "Contact",
    name: "contact",
    rules: {
      required: "This is required.",
      pattern: {
        value: /\d+/,
        message: "This input is number only.",
      },
      maxLength: {
        value: 10,
        message: "This input exceed maxLength.",
      },
      minLength: {
        value: 10,
        message: "User length should be equal to 10.",
      },
    },
  },
  {
    type: "input",
    label: "Password",
    name: "password",
    rules: {
      required: "This is required.",
    },
  },
  {
    type: "input",
    label: "ConfirmPassword",
    name: "confirmPassword",
    rules: {
      required: "This is required.",
    },
  },
  {
    type: "select",
    label: "Select Role",
    name: "role",
    rules: {
      required: "This is required.",
    },
    options: [
      { value: "", label: "Select Role" },
      { value: "admin", label: "Admin" },
      { value: "subadmin", label: "Subadmin" },
    ],
  },
];
