import { SignInForm } from "@/components/signin-form";
import { useSignInLogic } from "./SignIn.logic";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  const { formValues, setFormValues, onSubmit, isLoading } = useSignInLogic();

  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center p-6 md:p-10 gap-2">
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
        <SignInForm
          formValues={formValues}
          setFormValues={setFormValues}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
