import * as Yup from "yup";
export const checkValidateData = (isSignInForm: boolean) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const validationSchema = isSignInForm
    ? Yup.object({
        email: Yup.string()
          .matches(emailRegex,"Invalid email address")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      })
    : Yup.object({
        email: Yup.string()
          .matches(emailRegex,"Invalid email address")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password")], "Passwords must match")
          .required("Confirm password is required"),
      });

      return {validationSchema}
};
