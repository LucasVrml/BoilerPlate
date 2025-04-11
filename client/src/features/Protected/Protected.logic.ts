import { getProtected } from "./Protected.api";

export const useProtectedLogic = async () => {
  await getProtected();
  return {};
};
