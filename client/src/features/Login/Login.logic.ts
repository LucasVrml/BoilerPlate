import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useAuth } from "@/lib/auth/auth";
import { loginApi } from "./Login.api";

export const useLoginLogic = () => {
  const { setUser } = useAuth();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const { mutate: signIn, isPending: isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      setUser(data);
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
