"use client";

import * as React from "react";

export type InteractionStatus = "idle" | "loading" | "success" | "error";

interface UseInteractionRhythmOptions {
  defaultDelayMs?: number;
  defaultSuccessMs?: number;
}

export function useInteractionRhythm(options: UseInteractionRhythmOptions = {}) {
  const { defaultDelayMs = 800, defaultSuccessMs = 600 } = options;
  const [status, setStatus] = React.useState<InteractionStatus>("idle");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const execute = React.useCallback(
    async (
      action: () => void | Promise<void>,
      optionsOverride?: { delayMs?: number; successMs?: number; resetAfter?: boolean }
    ) => {
      const delayMs = optionsOverride?.delayMs ?? defaultDelayMs;
      const successMs = optionsOverride?.successMs ?? defaultSuccessMs;
      const resetAfter = optionsOverride?.resetAfter ?? true;

      setStatus("loading");
      setErrorMessage(null);

      const startTime = Date.now();

      try {
        await action();
        
        // Ensure minimum believable delay so software feels rhythmic
        const elapsed = Date.now() - startTime;
        const remainingDelay = Math.max(0, delayMs - elapsed);
        if (remainingDelay > 0) {
          await new Promise((res) => setTimeout(res, remainingDelay));
        }

        setStatus("success");

        if (successMs > 0 && resetAfter) {
          await new Promise((res) => setTimeout(res, successMs));
          setStatus("idle");
        }
      } catch (err: unknown) {
        setStatus("error");
        setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred");
      }
    },
    [defaultDelayMs, defaultSuccessMs]
  );

  const reset = React.useCallback(() => {
    setStatus("idle");
    setErrorMessage(null);
  }, []);

  return {
    status,
    isLoading: status === "loading",
    isSuccess: status === "success",
    isError: status === "error",
    errorMessage,
    execute,
    reset,
    setStatus,
  };
}
