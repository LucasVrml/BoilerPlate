import { useAuth } from "@/lib/auth/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { logoutApi } from "../common.api";

export const useHomePageLogic = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      setUser(null);
    },
  });

  const onClickLogout = () => {
    logout();
  };

  return {
    user,
    navigate,
    onClickLogout,
    isLoading,
  };
};
