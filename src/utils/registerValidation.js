export const registerValidation = (values) => {
    if (!values.firstName) {
      return { firstName: "Fill the First Name" };
    }
    if (!values.lastName) {
      return { lastName: "Fill the Last Name" };
    }
    if (!values.email) {
      return { email: "Fill the Email Address" };
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      return { email: "Invalid Email Address" };
    }
    if (!values.password) {
      return { password: "Enter Your Password" };
    } else if (values.password.length < 8) {
      return { password: "Password must be min 8 characters!" };
    } else if (values.password.search(/\d/) === -1) {
      return { password: "Password must contain number!" };
    } else if (values.password.search(/[A-Z]/) === -1) {
      return {
        password: "Password must contain capital and lowercase letter!",
      };
    } else if (values.password.search(/[a-z]/) === -1) {
      return {
        password: "Password must contain lowercase letter!",
      };
    } else if (values.password.search(/[^a-zA-Z0-9!@#$%^&*()_+]/) === -1) {
      return {
        password: "Password must contain special character!",
      };
    } else if (!values.confirmPassword) {
      return { confirmPassword: "Confirm Password" };
    } else if (!(values.password === values.confirmPassword)) {
      return { confirmPassword: "Didn't Match Password" };
    }
    if (!values.policy) {
      return { policy: "You should accept Privacy Policy!" };
    }
    return "";
  };
  
  export default registerValidation;