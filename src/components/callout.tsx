import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  title?: string;
  children: ReactNode;
}

export function Callout({ icon, title, children }: Props) {
  return (
    <Alert className="my-4">
      {icon && icon}
      {title && <AlertTitle className="mb-2 font-semibold">{title}</AlertTitle>}
      <AlertDescription className="prose-p:my-0 prose-ol:my-0 prose-ul:my-0">
        {children}
      </AlertDescription>
    </Alert>
  );
}
