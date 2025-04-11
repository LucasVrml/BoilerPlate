import { useProtectedLogic } from "./Protected.logic";

export default function Protected() {
  useProtectedLogic();

  return (
    <div className="flex min-h-svh w-full justify-center items-center">
      Protected page
    </div>
  );
}
