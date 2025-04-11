import api from "@/lib/api/api";

export type LoginParams = {
  email: string;
  password: string;
};

export async function loginApi({ email, password }: LoginParams) {
  const response = await api.post("/login", {
    email,
    password,
  });
  return response.data;
}
