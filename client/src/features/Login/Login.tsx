import { LoginForm } from "@/components/login-form";
import { Button } from "@/components/ui/button";
import { useLoginLogic } from "./Login.logic";

export default function Login() {
  const { formValues, setFormValues, onSubmit, isLoading } = useLoginLogic();

  return (
    <div className="flex min-h-svh flex-col w-full items-center justify-center p-6 md:p-10 gap-2">
      <div className="w-full max-w-sm flex justify-start items-center">
        <Button
          onClick={() => history.back()}
          className="cursor-pointer"
          variant="link"
        >
          Retour
        </Button>
      </div>
      <div className="w-full max-w-sm">
        <LoginForm
          formValues={formValues}
          setFormValues={setFormValues}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
