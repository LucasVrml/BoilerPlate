import { Button } from "@/components/ui/button";
import { useHomePageLogic } from "./Home.logic";

export default function Home() {
  const { user, navigate, onClickLogout, isLoading } = useHomePageLogic();

  return (
    <div className="min-h-svh w-full flex flex-col justify-center items-center gap-4">
      {user ? (
        <>Tu es authentifié {user.email}</>
      ) : (
        <>Tu n'es pas authentifié</>
      )}
      <div className="w-full flex justify-center items-center gap-4">
        <Button
          disabled={!!user || isLoading}
          variant="outline"
          onClick={() => navigate("/login")}
        >
          Se connecter
        </Button>
        <Button
          disabled={!!user || isLoading}
          variant="outline"
          onClick={() => navigate("/sign-in")}
        >
          Créer un compte
        </Button>
        <Button
          disabled={!user || isLoading}
          variant="outline"
          onClick={() => navigate("/protected")}
        >
          Route protégée
        </Button>
        <Button
          disabled={!user || isLoading}
          variant="outline"
          onClick={onClickLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
