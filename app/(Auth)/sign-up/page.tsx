"use client";

import React from "react";
import { signUpWithCredentials } from "@/lib/actions/auth.action";
import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";

const SignUp = () => {
  //return <div>SignUp</div>;
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
       onSubmit={signUpWithCredentials}
    />
  );
};

export default SignUp;