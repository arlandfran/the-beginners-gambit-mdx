import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  title?: string;
  className?: string;
  children: ReactNode;
}

export function Callout({ icon, title, className, children }: Props) {
  return (
    <Alert className={cn("my-4", className)}>
      {icon && icon}
      {title && <AlertTitle className="mb-2 font-semibold">{title}</AlertTitle>}
      <AlertDescription className="prose-p:my-0 prose-ol:my-0 prose-ul:my-0">
        {children}
      </AlertDescription>
    </Alert>
  );
}
