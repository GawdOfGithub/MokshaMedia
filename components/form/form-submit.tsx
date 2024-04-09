"use client";

import { useFormStatus } from "react-dom";

import { cn } from "@/app/utils/cn";
import { Button } from "../ui/Button";

interface FormSubmitProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "primary";
};

export const FormSubmit = ({
  children,
  disabled,
  className,
  variant = "primary"
}: FormSubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending || disabled}
      type="submit"
      variant="default"
      size="sm"
      className={cn(className)}
    >
      {children}
    </Button>
  );
};
