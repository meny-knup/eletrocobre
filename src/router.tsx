import { createRouter, useRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

function DefaultErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <div className="site-section flex min-h-[70vh] items-center justify-center px-4">
      <div className="premium-card max-w-xl p-8 text-center">
        <h1 className="font-display text-3xl font-semibold text-foreground">Algo saiu do esperado</h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Ocorreu um erro inesperado. Tente novamente ou volte para a página inicial.
        </p>
        {import.meta.env.DEV && error.message ? (
          <pre className="mt-4 max-h-40 overflow-auto rounded-md border border-border/70 bg-background/70 p-3 text-left font-mono text-xs text-muted-foreground">
            {error.message}
          </pre>
        ) : null}
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Voltar para a home
          </a>
        </div>
      </div>
    </div>
  );
}

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent,
  });

  return router;
};
