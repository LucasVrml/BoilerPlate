import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@/lib/auth/auth";
import { signInApi } from "./Signin.api";

export const useSignInLogic = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  const { mutate: signIn, isPending: isLoading } = useMutation({
    mutationFn: signInApi,
    onSuccess: (data) => {
      setUser(data);
      navigate("/protected");
    },
  });

  const onSubmit = () => {
    signIn({
      email: formValues.email,
      password: formValues.password,
    });
  };

  return {
    formValues,
    setFormValues,
    onSubmit,
    isLoading,
  };
};
