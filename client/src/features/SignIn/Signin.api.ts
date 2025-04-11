import api from "@/lib/api/api";

export type SignInParams = {
  email: string;
  password: string;
};

export async function signInApi({ email, password }: SignInParams) {
  const response = await api.post("/register", {
    email,
    password,
  });
  return response.data;
}
