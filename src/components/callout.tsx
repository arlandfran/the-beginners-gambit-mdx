import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  title?: string;
  children: ReactNode;
}

export function Callout({ icon, title, children }: Props) {
  return (
    <Alert>
      {icon && icon}
      {title && <AlertTitle className="font-semibold">{title}</AlertTitle>}
      <AlertDescription className="not-prose">{children}</AlertDescription>
    </Alert>
  );
}
