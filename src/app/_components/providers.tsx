import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { TRPCReactProvider } from "~/trpc/react";

export function Providers(props: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <TRPCReactProvider>{props.children}</TRPCReactProvider>
    </ClerkProvider>
  );
}
