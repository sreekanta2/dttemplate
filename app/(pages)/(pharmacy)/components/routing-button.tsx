"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

interface RoutingButtonProps {
  route?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

export default function RoutingButton({
  route = "",
  children,
  className = "",
  disabled = false,
  onClick,
  type = "button",
  ...rest
}: RoutingButtonProps) {
  const router = useRouter();

  const handleRouting = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (onClick) {
      onClick(event);
    } else if (route) {
      router.push(route);
    }
  };

  return (
    <Button
      type={type}
      onClick={handleRouting}
      disabled={disabled}
      className={`w-full ${className}`}
      {...rest}
    >
      {children}
    </Button>
  );
}
