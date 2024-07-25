import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import * as yup from 'yup'

const SignIn = () => {

  const formik = useFormik({
    initialValues : {
      email : "",
      password : ""
    },
    onSubmit(values) {
      console.log(values)
    },
    validationSchema : yup.object({
      email : yup.string().email("Please provide valid email address.").required("Email Address is required."),
      password : yup.string().min(8, "Password must be alteast 8 chars long.").max(32, "Password must be at minimum of 32 chars long.").required("Password must be provided.")
    })
  })

  return (
    <div className="sign-in-container w-[90%] mx-auto border rounded-xl p-4 lg:w-[50%]">
        <div className="header">
          <h1 className="text-xl font-bold">
            Sign in
          </h1>
          <p>
            Sign in to your account.
          </p>
        </div>


      <div className="form-container my-4">
        <form onSubmit={formik.handleSubmit}>
          <div className="inputContainer">
            <label htmlFor="email" className="text-sm text-gray-500">Email Address</label>
            <Input onBlur={formik.handleBlur} name="email" onChange={formik.handleChange} placeholder="Enter your email address" className="mt-1" />
            <p className="text-red-500 text-xs">
              {formik.errors.email ? formik.touched.email ? formik.errors.email : null : null}
            </p>
          </div>

          <div className="inputContainer">
            <label htmlFor="password" className="text-sm text-gray-500">Password</label>
            <Input onBlur={formik.handleBlur} name="password" onChange={formik.handleChange} placeholder="Enter your password" className="mt-1" />
            <p className="text-red-500 text-xs">
             {formik.errors.password ? formik.touched.password ? formik.errors.password : null : null}
            </p>
          </div>


          <Button  className="my-4" type="submit" disabled={!formik.isValid}>
            Sign in
          </Button>

      
        </form>

      </div>


    </div>
  );
};

export default SignIn;
