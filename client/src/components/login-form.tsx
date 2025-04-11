import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavLink } from "react-router";
import { Loader2 } from "lucide-react";

type FormValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  formValues: FormValues;
  setFormValues: (newValues: FormValues) => void;
  className?: string;
  onSubmit: () => void;
  isLoading: boolean;
};

export function LoginForm({
  formValues,
  setFormValues,
  className,
  onSubmit,
  isLoading,
}: LoginFormProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <Card>
        <CardHeader>
          <CardTitle>Connecte toi à ton compte</CardTitle>
          <CardDescription>
            Entre ton email pour accéder à ton compte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="test@exemple.com"
                  required
                  value={formValues.email}
                  onChange={(e) =>
                    setFormValues({ ...formValues, email: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Mot de passe</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={formValues.password}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full cursor-pointer">
                  {isLoading && <Loader2 className="animate-spin" />}
                  {!isLoading && <>Se connecter</>}
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 mt-4 text-center text-sm">
              Pas de compte ?{" "}
              <NavLink to="/sign-in" end>
                <div className="underline underline-offset-4 cursor-pointer">
                  Créer un compte
                </div>
              </NavLink>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
