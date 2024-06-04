"use client";

import { useFormStatus } from "react-dom";

import { cn } from "@/app/utils/cn";


interface FormSubmitProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "primary";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

 const SubmitButton = ({
  children,
  disabled,
  className,
  onClick
  
}: FormSubmitProps) => {
  const { pending} = useFormStatus();

  return (
    <button
      disabled={pending || disabled}
      type="submit"
      onClick={onClick}
      
      
      className={cn(className)}
    >
      {pending? "Loading..":children}
    </button>
  );
};
export  default SubmitButton;
