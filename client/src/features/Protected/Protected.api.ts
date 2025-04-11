import api from "@/lib/api/api";

export async function getProtected() {
  const response = await api.get("/protected");
  return response.data;
}
