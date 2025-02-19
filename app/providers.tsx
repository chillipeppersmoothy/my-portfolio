/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

export function Providers({ children, ...props }: ThemeProviderProps) {
  const NEXT_PUBLIC_POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY as string;
  const NEXT_PUBLIC_POSTHOG_HOST = process.env
    .NEXT_PUBLIC_POSTHOG_HOST as string;

  useEffect(() => {
    posthog.init(NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: NEXT_PUBLIC_POSTHOG_HOST,
      person_profiles: "always",
    });
  }, []);

  return (
    <NextThemesProvider {...props}>
      <PHProvider client={posthog}>{children}</PHProvider>
    </NextThemesProvider>
  );
}
