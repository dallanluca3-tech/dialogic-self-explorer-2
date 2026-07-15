import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/researcher")({
  component: Researcher,
});

function Researcher() {
  const [pw, setPw] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (pw === "ricerca2026") {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (unlocked) {
    return (
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Link
            to="/"
            className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
          >
            ← Home
          </Link>
          <h1 className="mt-6 font-serif text-3xl font-medium">
            Dashboard Ricercatore
          </h1>
          <div className="mt-10 rounded-lg border border-dashed border-border bg-card p-16 text-center">
            <p className="text-sm text-muted-foreground">
              I dati dei partecipanti compariranno qui dopo l'implementazione
              del backend.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-16">
        <Link
          to="/"
          className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
        >
          ← Home
        </Link>
        <h1 className="mt-6 font-serif text-2xl font-medium">
          Accesso Ricercatore
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Inserisci la password per accedere alla dashboard.
        </p>

        <form onSubmit={submit} className="mt-8 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="pw">Password</Label>
            <Input
              id="pw"
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              autoFocus
            />
            {error && (
              <p className="text-xs text-destructive">Password non valida.</p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Accedi
          </Button>
        </form>
      </div>
    </main>
  );
}
