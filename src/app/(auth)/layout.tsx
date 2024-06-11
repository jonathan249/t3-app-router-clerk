import React from "react";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      {props.children}
    </div>
  );
}
