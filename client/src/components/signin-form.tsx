// SignInForm.tsx
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

type FormValues = {
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
};

type SignInFormProps = {
  formValues: FormValues;
  setFormValues: (newValues: FormValues) => void;
  className?: string;
  onSubmit: () => void;
  isLoading: boolean;
};

export function SignInForm({
  formValues,
  setFormValues,
  className,
  onSubmit,
  isLoading,
}: SignInFormProps) {
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let errorExists = false;

    setEmailError("");
    setPasswordError("");

    if (formValues.email !== formValues.confirmEmail) {
      setEmailError("Les adresses e-mail ne correspondent pas.");
      errorExists = true;
    }

    if (formValues.password !== formValues.confirmPassword) {
      setPasswordError("Les mots de passe ne correspondent pas.");
      errorExists = true;
    }

    if (!errorExists) {
      onSubmit();
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formValues.email}
                  onChange={(e) =>
                    setFormValues({ ...formValues, email: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="confirm-email">Confirme ton email</Label>
                <Input
                  id="confirm-email"
                  type="email"
                  required
                  value={formValues.confirmEmail}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      confirmEmail: e.target.value,
                    })
                  }
                />
                {emailError && (
                  <p className="text-red-500 text-sm">{emailError}</p>
                )}
              </div>

              <div className="grid gap-3">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={formValues.password}
                  onChange={(e) =>
                    setFormValues({ ...formValues, password: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="confirm-password">
                  Confirme ton mot de passe
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  required
                  value={formValues.confirmPassword}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                {passwordError && (
                  <p className="text-red-500 text-sm">{passwordError}</p>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full cursor-pointer"
                  disabled={isLoading}
                >
                  {isLoading && <Loader2 className="animate-spin" />}
                  {!isLoading && <>Créer un compte</>}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
