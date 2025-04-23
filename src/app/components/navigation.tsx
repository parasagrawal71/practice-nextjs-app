"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav style={{ display: "flex", padding: 20, gap: 20 }}>
      <Link href="/" style={{ color: pathname === "/" ? "white" : "grey" }}>
        Home
      </Link>
      <Link
        href="/mock-users"
        style={{ color: pathname === "/mock-users" ? "white" : "grey" }}
      >
        Mock Users
      </Link>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};
