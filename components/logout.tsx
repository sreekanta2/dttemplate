"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

interface LogoutButtonProps {
  className?: string; // Optional prop for custom styling  e.g. "w-16 h-16" or "text-xl"
}
export default function LogoutButton({ className }: LogoutButtonProps) {
  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Sign-out failed:", error);
    }
  };
  return (
    <button
      type="button"
      onClick={handleSignOut}
      className={`w-full flex gap-3  text-default-700 text-sm capitalize px-[12px] font-medium py-3 rounded cursor-pointer hover:bg-primary hover:text-primary-foreground ${className}`}
    >
      <LogOut size={16} />
      Logout
    </button>
  );
}
