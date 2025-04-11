import api from "@/lib/api/api";

export async function logoutApi() {
  const response = await api.post("/logout");
  return response.data;
}
